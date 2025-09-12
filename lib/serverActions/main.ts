'use server';
import connectDB from "@/lib/db";
import { unstable_noStore as noStore } from 'next/cache';
import Products from "@/lib/productSchema";

export async function SearchFilter(query: string) {
    if (!query || query.trim() === "") {
        return { success: false, message: "Please provide a valid search query.", data: [], count: 0 };
    }
    noStore();
    await connectDB();
    try {
        const spliteQuery = query.split(" ");
        let yearQuery = null;
        const searchQuery = spliteQuery.filter((q: string) => {
            if (!isNaN(q) && q.length === 4) {
                yearQuery = Number(q);
                return false;
            }
            return true;
        });
        const cleanSearchQuery = searchQuery.join(" ").trim();
        const searchPipeline = [
            {
                $search: {
                    index: "default",
                    text: {
                        query: cleanSearchQuery,
                        path: ["make", "model", "option", "part_name"],
                        fuzzy: { maxEdits: 2, prefixLength: 1 }
                    }
                }
            },
            ...(yearQuery ? [{ $match: { year: yearQuery } }] : []),
            {
                $facet: {
                    results: [
                        { $limit: 15 },
                        {
                            $project: {
                                _id: 1,
                                part_name: 1,
                                make: 1,
                                model: 1,
                                year: 1,
                                option: 1,
                                images: 1,
                                option_slug: 1
                            }
                        }
                    ],
                    totalCount: [{ $count: "count" }]
                }
            }
        ];
        const result = await Products.aggregate(searchPipeline);
        return {
            data: result[0]?.results || [],
            count: result[0]?.totalCount?.[0]?.count || 0,
            success: true
        };
    } catch (error) {
        console.error("Error in SearchFilter:", error);
        return {
            data: [],
            count: 0,
            success: false,
            message: "An unexpected error occurred."
        };
    }
}

// lead submit function
type LeadSubmitData = {
    partName: string;
    make: string;
    model: string;
    year: number;
    option: string;
    name: string;
    email: string;
    contactNumber: string;
    leadType: string;
    zipCode: number;
};

type LeadSubmitResponseBody = {
    message?: string;
    status?: string;
    error?: string;
};

export async function leadSubmit(data: LeadSubmitData) {
    try {
        const headers: HeadersInit = {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "x-api-key": process.env.NEXT_PUBLIC_SOCKET_LEAD_API_KEY ?? "",
        };

        if (!headers["x-api-key"]) {
            console.warn("leadSubmit: Missing x-api-key (NEXT_PUBLIC_SOCKET_LEAD_API_KEY)");
        }

        const response = await fetch("https://usedcarsengines.com/api/leads", {
            method: "POST",
            body: JSON.stringify(data),
            // Next.js fetch options: disable caching for external POST
            cache: "no-store",
        });

        let responseBody: LeadSubmitResponseBody | string | null = null;
        const text = await response.text().catch(() => "");
        try {
            responseBody = text ? (JSON.parse(text) as LeadSubmitResponseBody) : null;
        } catch (_e) {
            responseBody = text || null;
        }

        if (!response.ok) {
            const message =
                (responseBody && (responseBody.message || responseBody.error)) ||
                `Failed to submit lead. Status ${response.status}`;
            console.error("Error submitting lead:", {
                status: response.status,
                statusText: response.statusText,
                body: responseBody,
            });
            return { success: false, message };
        }

        const successMessage =
            (responseBody && typeof responseBody === 'object' && (responseBody.message || responseBody.status)) ||
            "Lead submitted successfully.";
        return { success: true, message: successMessage };
    } catch (error) {
        console.error("leadSubmit: Network or runtime error:", error);
        return { success: false, message: "Network error while submitting lead." };
    }
}