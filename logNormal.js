const scriptRootPath = path.join(repositoryRootPath, 'script');
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;
const executableName = getExecutableName(channel, appName);