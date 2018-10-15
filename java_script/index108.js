function sort(number1, number2, number3, isTrue) {
    let resultValue = '';
        
        if (number1 > number2 && number2 > number3 && isTrue === true) {
            resultValue = `${number1}, ${number2}, ${number3}`;
        } else if (number1 > number3 && number3 > number2 && isTrue === true) {
            resultValue = `${number1}, ${number3}, ${number2}`;
        } else if (number2 > number1 && number1 > number3 && isTrue === true) {
            resultValue = `${number2}, ${number1}, ${number3}`;
        }  else if (number2 > number3 && number3 > number1 && isTrue === true) {
            resultValue = `${number2}, ${number3}, ${number1}`;
        }  else if (number3 > number1 && number1 > number2 && isTrue === true) {
            resultValue = `${number3}, ${number1}, ${number2}`;
        }  else if (number3 > number2 && number2 > number1 && isTrue === true) {
            resultValue = `${number3}, ${number2}, ${number1}`;
        }   else {
            resultValue = `Something went wrong`
        }

        return resultValue;
    }
console.log(sort(12, 34, 45, true));
console.log(sort(45, 34, 1005, true));
console.log(sort(12, 340, 5, true));
console.log(sort(12, 34, 45, false));
console.log(sort(12, 4, 5, true));


// Define a sort function that accepts 3 numeric parameters with the following names: number1, number2 and number3
// The function must sort the params values from lower to higher
// Call the function with the following parameters: 10, 8, 25
// Show the following result as output: 8, 10, 25
// Refactor the sort function to accept a fourth parameter with the name highToLow (boolean)
// If highToLow is true then you need to show the following output: 25, 10, 8
// Call the function again with the following parameters: 10, 8, 25, true