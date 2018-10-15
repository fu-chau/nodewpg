let number = 13;
let sum = '*************';
do {
    sum = sum.substr( 0, number )
    console.log(sum);
    number--;
}
while (number >= 0);



// Copy and paste the code from exercise 73
// Refactor the code to use do/while instead of while