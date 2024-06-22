const buildOutputPath = path.join(repositoryRootPath, 'out');
const merge = Object.assign({}, obj1, obj2);
const removeDuplicates = (arr) => [...new Set(arr)];