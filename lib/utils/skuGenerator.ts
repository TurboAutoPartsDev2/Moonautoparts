export function generateSKU(): number {
    // Generate a random 9-digit number between 100,000,000 and 999,999,999
    const min = 100000000;
    const max = 999999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// randome orderId generator
export function generateRandomString() {
    const randomChars = Math.random().toString(36).substring(2, 5).toUpperCase(); // Random letters
    const date = new Date();
    // Extract date components
    const year = String(date.getFullYear()).slice(-2); // Last two digits of the year
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month (01 to 12)
    const day = String(date.getDate()).padStart(2, '0'); // Day (01 to 31)
    const seconds = String(date.getSeconds()).padStart(2, '0'); // Seconds (00 to 59)
    // Combine everything into the final string
    const result = `${randomChars}${year}${month}${day}${seconds}`;
    return result;
}