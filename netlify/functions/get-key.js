export default async function handler(event) {
  const possibleKeys = [
    "VIP-ABCD1234-EFGH5678",
    "GODX-" + Math.floor(Math.random() * 100000),
    "SECRET-KEY-" + Date.now(),
    "GUJJU-MODS-" + Math.random().toString(36).substring(2,10).toUpperCase(),
    "AD_FREE_FIRE_" + Math.floor(Math.random() * 999999)
  ];

  const randomKey = possibleKeys[Math.floor(Math.random() * possibleKeys.length)];

  return {
    statusCode: 200,
    body: JSON.stringify({ key: randomKey })
  };
}
