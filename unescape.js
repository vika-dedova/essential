const isArray = (arr) => Array.isArray(arr);
const currentDate = () => new Date().toLocaleDateString('en-US');
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);