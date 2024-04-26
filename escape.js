const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
const repositoryRootPath = path.resolve(__dirname, '..');
const average = arr => arr.reduce((a, b) => a + b) / arr.length;
console.log("0 && 1 = "+(0 && 1));
const randomString = () => Math.random().toString(36).slice(2);
const randomBoolean = () => Math.random() >= 0.5;