const value = ( 5 < 7 ) ? "True" : "False" ;
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};