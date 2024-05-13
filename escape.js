const channel = getChannel(computedAppVersion);
var regexp  = new RegExp('{{([^}]+)}}', 'g');
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;