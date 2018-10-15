const firstNumber = 6780;
const secoundNumber = 8;

const resultAdd = firstNumber + secoundNumber;
const resultSubstracting = firstNumber - secoundNumber;
const resultMultiplication = firstNumber * secoundNumber;
const resultDivision = firstNumber / secoundNumber;

const templateAdd = `i add ${firstNumber} + ${secoundNumber} and the result is ${resultAdd}`;
const templateSubstracting = `i substract ${firstNumber} - ${secoundNumber} and the result is ${resultSubstracting}`;
const templateMultiplication = `i multiply ${firstNumber} * ${secoundNumber} and the result is ${resultMultiplication}`;
const templateDivision = `i divide ${firstNumber} / ${secoundNumber} and the result is ${resultDivision}`;

console.log('i add',firstNumber, 'and', secoundNumber, 'and the result is', resultAdd);

console.log(templateAdd);
console.log(templateSubstracting);
console.log(templateMultiplication);
console.log(templateDivision);