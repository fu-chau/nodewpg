const getHexaColor = function(color) {
    let resultValue = '';
    if (color === 'white') {
        resultValue = `white = #FFFFFF`;
    } else if (color === 'black') {
        resultValue = `black = #000000`;
    } else if (color === 'blue') {
        resultValue = `blue = #0b24fb`;
    } else if (color === 'green') {
        resultValue = `green = #0e7e12`;
    } else if (color === 'yellow') {
        resultValue = `yellow = #fffd38`;
    } else if (color === 'pink') {
        resultValue = `pink = #fec1cc`;
    } else {
        resultValue = `Wrong color or data type`
    }
    return resultValue;
}
console.log (getHexaColor('white'));
console.log (getHexaColor('black'));
console.log (getHexaColor('blue'));
console.log (getHexaColor('yellow'));
console.log (getHexaColor('green'));
console.log (getHexaColor('pink'));
console.log (getHexaColor('red'));
console.log (getHexaColor(34));
// Define the getHexaColor function that accepts one of the following web colors as parameter:
// white
// black
// blue
// green
// yellow
// pink
// This function returns the hexa color for the given parameter color:
// param: white, return value: #FFFFFF
// param: black, return value: #000000
// param: blue, return value: #0b24fb
// param: green, return value: #0e7e12
// param: yellow, return value: #fffd38
// param: pink, return value: #fec1cc
// The returned value must be a string
// Call the function using each posible value as parameter
// Show each hexa color as output