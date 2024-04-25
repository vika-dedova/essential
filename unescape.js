const shuffledArray = array.sort(() => Math.random() - 0.5); 
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);