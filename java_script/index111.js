const even = function (number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;}        
}

if (even(3)) {
    console.log (`the number is even`);
} else {
    console.log (`the number is odd `);
}


// Define a even function that has one numeric parameter and returns a boolean value
// This function must validate if the number passed as parameter is an even number or not (true or false)
// Call this function using the following parameters: 2, 5, 3, 24, 12
// If the number is even show the following message: %number% is even
// Else show the following message: %number% is odd