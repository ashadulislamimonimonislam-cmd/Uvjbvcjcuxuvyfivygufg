export default async function handler(request) {
  const headers = {
    "Cache-Control": "no-cache, no-store, must-revalidate",
    "Pragma": "no-cache",
    "Expires": "0",
    "Content-Type": "application/json"
  };

  const now = Date.now();
  const sixHoursMs = 6 * 60 * 60 * 1000; // ৬ ঘন্টা

  const cycle = Math.floor(now / sixHoursMs); // প্রতি ৬ ঘন্টায় চেঞ্জ হবে

  const randomPart = Math.random().toString(36).substring(2, 10).toUpperCase();

  const key = `AD-FREE-FIRE_\( {cycle}- \){randomPart}`;

  const body = JSON.stringify({
    key: key,
    createdAt: now,
    expiresAt: now + sixHoursMs
  });

  return new Response(body, { status: 200, headers });
}
