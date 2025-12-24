export default async function handler(request) {
  // ক্যাশ বন্ধ রাখার জন্য হেডার
  const headers = {
    "Cache-Control": "no-cache, no-store, must-revalidate",
    "Pragma": "no-cache",
    "Expires": "0",
    "Content-Type": "application/json"
  };

  // র‍্যান্ডম কী তৈরি
  const possibleKeys = [
    "VIP-ABCD1234-EFGH5678",
    "GODX-" + Math.floor(Math.random() * 100000),
    "SECRET-KEY-" + Date.now(),
    "GUJJU-MODS-" + Math.random().toString(36).substring(2,10).toUpperCase(),
    "AD_FREE_FIRE_" + Math.floor(Math.random() * 999999)
  ];

  const randomKey = possibleKeys[Math.floor(Math.random() * possibleKeys.length)];

  // নতুন ফরম্যাটে Response রিটার্ন করো
  const body = JSON.stringify({ key: randomKey });

  return new Response(body, {
    status: 200,
    headers: headers
  });
}
