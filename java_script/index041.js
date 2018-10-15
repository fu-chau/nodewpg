const text1 = 'HELLO ';
const text2 = 'javascript ';
const text3 = 'WORLD';

const text1Xs = text1.toLowerCase();
const text2Xs = text2.toUpperCase();
const text3Xs = text3.toLowerCase();

const message = text1.concat (text2, text3);

console.log(text1Xs.concat(text2Xs,text3Xs));
console.log(message);
console.log(text1.toLowerCase().concat(text2.toLocaleUpperCase(),text3.toLowerCase()));