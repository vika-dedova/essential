const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const symbolsPath = path.join(buildOutputPath, 'symbols');
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const channel = getChannel(computedAppVersion);
const result = await makeHttpRequest(url);
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));