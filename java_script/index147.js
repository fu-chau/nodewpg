const user = {
    userName: 'batman',
    password: 'Alfred1960ROCKS!'
 };


const shouldOpenBatCave = function(superHero) {
    return (superHero.userName === 'batman' && superHero.password === 'Alfred1960ROCKS!')
}

if (shouldOpenBatCave(user) === true) {
    return console.log ('Welcome back batman!!');
} else {
    return console.log ('Sorry, you can\'t enter the Batcave, try again..');
}





// Copy and paste the code from the previous exercise
// Refactor the code to match the requirements
// The shouldOpenBatCave function not longer accepts two parameters
// Now the shouldOpenBatCave function only accepts a user parameter
// Instead of calling the shouldOpenBatCave function passing username and passowrd now we only pass the user object
// The rest of the code should still work the same way and show the proper output