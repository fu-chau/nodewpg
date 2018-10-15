let number = 13;
let sum = '*************';

while (number >= 0) {
  
  sum = sum.substr( 0, number )
  console.log(sum);
  number--;
}

// Show the following output using while:
// *************
// ************
// ***********
// **********
// *********
// ********
// *******
// ******
// *****
// ****
// ***
// **
// *