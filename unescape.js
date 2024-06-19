const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
const results = await Promise.all(resultingPromises);
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);