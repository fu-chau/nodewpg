let f1 =- 1;
let f2 = 1;
let f = f1 + f2;
let counter = 1;
let howManyNumbers = 100;

do {
    f= f1 + f2
    f1 = f2
    f2 = f
    console.log (`f${counter}=${f}`);
    f++;
    counter++;
}while (counter <= howManyNumbers)




// Copy and paste the code from exercise 75
// Refactor the code to use do/while instead of while