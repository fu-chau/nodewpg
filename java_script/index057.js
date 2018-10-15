const userName = 'pepe2017';
const password = '123456';

const message = ( userName === 'pepe2017' && password == 12345 ) ? 'Logged in user, show user home page' : 'Sorry, there has been a problem, please try it again.';

console.log (message);

// if ( userName === 'pepe2017' && password == 12345 ) {
//     console.log ( 'Logged in user, show user home page' )
// } else {
//     console.log ( 'Sorry, there has been a problem, please try it again.' )
// }
//------------------------------exercise 57----------------------------------------
// Copy and paste the code from exercise 54
// Refactor the code so it match the new requirements:*
// Replace if/ese statement for a conditional ternary operator