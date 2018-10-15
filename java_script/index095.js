let f1 =- 1;
let f2 = 1;
let f = f1 + f2;
let counter = 1;
let howManyNumbers = 100;

for (let counter = 1; counter <= howManyNumbers; counter++)  {
    f= f1 + f2
    f1 = f2
    f2 = f
    console.log (`f${counter}=${f}`);
    f++;
}


// Copy and paste the code from exercise 85
// Refactor the code to use for instead of do/while