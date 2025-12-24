export default async function handler(request) {
  const headers = {
    "Cache-Control": "no-cache, no-store, must-revalidate",
    "Pragma": "no-cache",
    "Expires": "0",
    "Content-Type": "application/json"
  };

  const now = Date.now();
  const sixHoursMs = 6 * 60 * 60 * 1000; // ৬ ঘন্টা

  // প্রতি ৬ ঘন্টায় চেঞ্জ হওয়া অংশ (এক্সপায়ারি নিয়ন্ত্রণ করে)
  const cycle = Math.floor(now / sixHoursMs);

  // র‍্যান্ডম অংশ
  const randomPart = Math.random().toString(36).substring(2, 12).toUpperCase();

  // ফাইনাল কী: শুরুতে AD-FREE-H6_ + cycle + র‍্যান্ডম
  const key = `AD-FREE-H6_\( {cycle}- \){randomPart}`;

  const body = JSON.stringify({
    key: key,
    createdAt: now,
    expiresAt: now + sixHoursMs
  });

  return new Response(body, {
    status: 200,
    headers: headers
  });
}
