let number = 0;
let sum = '*';

do {
    if (number % 2 === 1) {
        console.log(sum);
        sum = sum + '**';}
        number++;
}while (number <= 13)


// Copy and paste the code from exercise 74
// Refactor the code to use do/while instead of while