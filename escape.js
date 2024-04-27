const minNumber = arr => Math.min(...arr);
const channelName = getChannelName(channel);
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;