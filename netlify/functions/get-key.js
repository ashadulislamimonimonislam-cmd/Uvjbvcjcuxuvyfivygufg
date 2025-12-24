export default async function handler(request) {
  const headers = {
    "Cache-Control": "no-cache, no-store, must-revalidate",
    "Pragma": "no-cache",
    "Expires": "0",
    "Content-Type": "application/json"
  };

  const now = Date.now();
  const sixHours = 6 * 60 * 60 * 1000;

  const cycle = Math.floor(now / sixHours); // প্রতি ৬ ঘন্টায় চেঞ্জ হবে
  const randomPart = Math.random().toString(36).substring(2, 10).toUpperCase();

  const key = `AD-FREE-FIRE_\( {cye}- \){randomPart}`; // এখানে ভেরিয়েবল ব্যবহার করা হয়েছে

  return new Response(JSON.stringify({
    key: key,
    expiresAt: now + sixHours
  }), { status: 200, headers });
}
