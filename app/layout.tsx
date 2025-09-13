import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "Moon Auto - Premium Used Auto Parts",
  description: "Quality used engines and transmissions with industry-leading warranty. Free nationwide shipping and expert installation support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical CSS */}
        <link rel="preload" href="/_next/static/css/app/globals.css" as="style" />
        <link rel="preload" href="/_next/static/css/app/components/Header.module.css" as="style" />
        <link rel="preload" href="/_next/static/css/app/engine/EnginePage.module.css" as="style" />
        <link rel="preload" href="/_next/static/css/app/components/Footer.module.css" as="style" />
        
        {/* Preload critical images */}
        <link rel="preload" href="/modern-logo.svg" as="image" type="image/svg+xml" />
        {/* Prevent FOUC with inline critical styles */}
        <style dangerouslySetInnerHTML={{
          __html: `
            body { 
              font-family: Arial, Helvetica, sans-serif; 
              margin: 0; 
              padding: 0; 
              background: #ffffff;
              color: #171717;
            }
            .header { 
              background: #ffffff; 
              padding: 16px 0; 
              position: sticky; 
              top: 0; 
              z-index: 100; 
              box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08); 
            }
            .container { 
              max-width: 1200px; 
              margin: 0 auto; 
              padding: 0 32px; 
            }
            .header_content { 
              display: flex; 
              justify-content: space-between; 
              align-items: center; 
              gap: 40px; 
            }
            .logo img { 
              max-height: 55px; 
              width: auto; 
              height: auto; 
              display: block; 
            }
            .desktop_nav { 
              display: flex; 
              gap: 36px; 
              align-items: center; 
            }
            .nav_link { 
              text-decoration: none; 
              color: #059669; 
              font-weight: 700; 
              font-size: 18px; 
              padding: 12px 20px; 
              border-radius: 12px; 
            }
            @media (max-width: 768px) {
              .desktop_nav { display: none; }
              .mobile_menu_btn { display: flex; }
            }
            
            /* Prevent layout shift during loading */
            .engines-page { min-height: 100vh; }
            .hero-section { min-height: 100vh; }
            .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
            .hero-content { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
            .hero-title { font-size: 3.5rem; font-weight: 900; line-height: 1.1; margin-bottom: 24px; }
            .hero-description { font-size: 1.25rem; color: #4a5568; margin-bottom: 32px; }
            .hero-benefits { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-bottom: 40px; }
            .benefit-item { display: flex; align-items: center; gap: 12px; padding: 16px; background: rgba(255, 255, 255, 0.8); border-radius: 12px; }
            .form-card { background: #ffffff; padding: 40px; border-radius: 20px; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1); }
            .form-group { margin-bottom: 24px; }
            .form-group input, .form-group select { width: 100%; padding: 16px; border: 2px solid #e5e7eb; border-radius: 12px; font-size: 16px; }
            .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
            .trust-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin-top: 60px; }
            .stat-card { text-align: center; padding: 24px; background: rgba(255, 255, 255, 0.8); border-radius: 16px; }
            .stat-number { font-size: 2.5rem; font-weight: 900; color: #059669; margin-bottom: 8px; }
            .features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
            .feature-card { text-align: center; padding: 32px 24px; background: #ffffff; border-radius: 16px; border: 1px solid #e5e7eb; }
            .testimonials-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
            .testimonial-card { background: #ffffff; padding: 32px; border-radius: 16px; border: 1px solid #e5e7eb; }
            .process-steps { display: flex; justify-content: space-between; align-items: center; margin: 60px 0; }
            .process-step { text-align: center; flex: 1; max-width: 200px; }
            .faq-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
            .faq-item { background: #ffffff; border-radius: 12px; border: 1px solid #e5e7eb; }
            .cta-buttons { display: flex; gap: 24px; justify-content: center; margin-bottom: 40px; }
            .cta-guarantees { display: flex; justify-content: center; gap: 40px; flex-wrap: wrap; }
            
            /* Footer critical styles */
            .footer { background: #f8fafc; padding: 60px 0 20px; border-top: 1px solid #e2e8f0; }
            .footer-content { display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px; margin-bottom: 40px; }
            .footer-section { display: flex; flex-direction: column; gap: 20px; }
            .footer-nav { display: flex; flex-direction: column; gap: 12px; }
            .footer-nav a { color: #4a5568; text-decoration: none; transition: all 0.3s ease; font-size: 0.95rem; }
            .footer-nav a:hover { color: #059669; transform: translateX(5px); }
            .services-list { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 12px; }
            .features-list { display: flex; flex-direction: column; gap: 16px; }
            .feature-item { display: flex; align-items: center; gap: 12px; }
            .footer-bottom { padding-top: 20px; border-top: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; }
            .legal-links { display: flex; gap: 24px; }
          `
        }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
