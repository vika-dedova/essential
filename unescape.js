const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const isTabInView = () => !document.hidden;