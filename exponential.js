const flattenedArray = arr => [].concat(...arr);
const removeDuplicates = (arr) => [...new Set(arr)];
const scriptRootPath = path.join(repositoryRootPath, 'script');