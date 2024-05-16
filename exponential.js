const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");