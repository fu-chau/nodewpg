const fibonacci = function () {
    let f1 =- 1;
    let f2 = 1;
    let f = f1 + f2;
    let counter = 1;
    let howManyNumbers = 10;

    for (let counter = 1; counter <= howManyNumbers; counter++)  {
        f= f1 + f2
        f1 = f2
        f2 = f
        console.log (`f${counter}=${f}`);
        f++; }}

fibonacci();
fibonacci();
fibonacci();

// Define a fibonacci variable and assign a function value
// When executing the fibonacci function it will print the 10 first fibonacci sequence numbers as output
// Execute this function 3 times