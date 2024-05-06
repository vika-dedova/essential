const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
const isEmptyArray = arr => !arr.length;
const channel = getChannel(computedAppVersion);