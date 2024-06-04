const scriptRootPath = path.join(repositoryRootPath, 'script');
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
const copyToClipboard = (text) => navigator.clipboard.writeText(text);