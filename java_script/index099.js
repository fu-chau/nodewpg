let number = 0; 
let sum = 0;
let counter = 0;

for (let number = 0; number <= 1000; number++) {
    if (number % 2 === 0) {
        sum = sum + number 
        counter++
        console.log (sum)
    } else if (counter === 20 ) {
        break;
    }
}







// Add all even numbers bettwen 0 and 1000 using for statement
// The iteration must break after finding the first 20 even numbers
// Show the result as output