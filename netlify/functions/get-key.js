export default async function handler(event) {
  // ক্যাশ বন্ধ করার জন্য হেডার
  const noCacheHeaders = {
    "Cache-Control": "no-cache, no-store, must-revalidate",
    "Pragma": "no-cache",
    "Expires": "0"
  };

  // র‍্যান্ডম কী বানানোর লিস্ট
  const possibleKeys = [
    "VIP-ABCD1234-EFGH5678",
    "GODX-" + Math.floor(Math.random() * 100000),
    "SECRET-KEY-" + Date.now(),
    "GUJJU-MODS-" + Math.random().toString(36).substring(2,10).toUpperCase(),
    "AD_FREE_FIRE_" + Math.floor(Math.random() * 999999)
  ];

  // র‍্যান্ডম একটা কী বেছে নেওয়া
  const randomKey = possibleKeys[Math.floor(Math.random() * possibleKeys.length)];

  return {
    statusCode: 200,
    headers: noCacheHeaders,  // এটাই ক্যাশ বন্ধ করে দেবে
    body: JSON.stringify({ key: randomKey })
  };
}
