const buildOutputPath = path.join(repositoryRootPath, 'out');
const getRandomBoolean = () => Math.random() >= 0.5;
console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);