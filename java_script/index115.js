const getLongerText = function( text, text1 ) {
    let textlenght1 = text.length;
    let textlenght2 = text1.length;

    if (textlenght1 > textlenght2 && (textlenght1 >0 && textlenght2 > 0)) {
    return text;
} else if (textlenght1 < textlenght2 && (textlenght1 >0 && textlenght2 > 0)){
    return text1;
} else {
    return `ERROR`;
}
}

console.log (getLongerText('troll', 'lffgfgfg'));
console.log (getLongerText('nicko', 'how are you'));
console.log (getLongerText('', 'omg'));
console.log (getLongerText(34,'2'));
console.log (getLongerText('oll', 'collors'));



// Define a getLongerText that accepts two string values
// This function returns the longer text
// After calling the function show the longer word as output
// Call this function 3 times with different words