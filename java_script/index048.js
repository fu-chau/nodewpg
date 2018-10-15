const message = "3.14 it's a great number but 42 it's the answer to life."

const pi = parseFloat(message.slice(0,4)); //got 3.14 from string and transformed it to a number
const answerToLife = parseInt(message.substr(29,2)); //got 42 from string and transform in to a number

const result = pi + answerToLife; //got 45.14 number
const resultAsString = result.toString(); //got 45.14 as a string

console.log (`pi is ${pi} and answer to life is ${answerToLife}`);
console.log (`result of adding pi and answer to life is ${resultAsString}`, typeof resultAsString);


// Declare a message variable and assign the following value: 3.14 it's a great number but 42 it's the answer to life.
// Declare a pi variable, get 3.14 value from the message variable and transform it into a decimal number type value
// Declare a answerToLife variable, get 42 value from the message variable and transform it into a integer number type value
// Declare a result value and assign the result of adding pi and answerToLife values
// Show the result variable value and name as output (use console.log(variable name, variable value))
// Show the following output: 45.14 is the result of adding pi and answerToLife
// Concatenate the strings and transform 45.14 (result value) from number to string using toString method