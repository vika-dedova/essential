const allResults = await Promise.all(items.map(async (item) => {}));
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;