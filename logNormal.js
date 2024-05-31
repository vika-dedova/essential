const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
var DELIM_SIZE = 4;
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));