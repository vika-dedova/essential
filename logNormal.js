const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
const merge = [...new Set([...a, ...b])];
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
var arr1 = "john".split('');
const timeFromDate = date => date.toTimeString().slice(0, 8);