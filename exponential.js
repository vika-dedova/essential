const isWeekday = (date) => date.getDay() % 6 !== 0;
const electronDownloadPath = path.join(repositoryRootPath, 'electron');
const uniqueArr = (arr) => [...new Set(arr)];