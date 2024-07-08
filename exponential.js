const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];