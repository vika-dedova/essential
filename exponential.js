console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const apmRootPath = path.join(repositoryRootPath, 'apm');