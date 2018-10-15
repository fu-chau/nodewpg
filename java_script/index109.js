const validateUser = function(username, password) {
    if ((username === 'nacho' && password === 'Nerd1979') || (username === 'pedro' && password === 'Batman0217') || (username === 'marta' && password === 'Mother2312')) {
        return `Wellcome ${username}, nice to see you again`;
    }else {
        return `Please input valid credentials`;
    }
}

console.log(validateUser('nacho', 'Nerd1979'));
console.log(validateUser('pedro', 'Batman0217'));
console.log(validateUser('nico', 'lovedogs'));


// Define a validateUser function that accepts the following parameters: username and password
// This function returns true or false if username and password match any of the following values:
// username: nacho, password: Nerd1979
// username: pedro, password: Batman0217
// username: marta, password: Mother2312
// Show the following output if username and password belong to a user: Wellcome %username%, nice to see you again
// Show the following output if username and password don't belong to a user: Please input valid credentials
// Try calling the validateUser with valid credentials and also with invalid ones