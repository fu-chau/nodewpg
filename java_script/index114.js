function revert(text){
    let userName = text.length;
    let revertion= '';
    for (userName; userName >= 0; userName--) {
        revertion += text.charAt(userName);   
    }
    return revertion;
}

console.log(revert('aaabbbccc'));
console.log(revert('hey nico how are you'))
console.log(revert('uoy era woh ocin yeh'))
console.log(revert('Define a revert function that accepts a string parameter'))
console.log(revert('etemarap gnirts a stpecca taht noitcnuf trever a enifeD'))

// Define a revert function that accepts a string parameter
// This function shows the reverted text parameter
// For example if you call the revert function with 'hello' the function will show: olleh
// Call this function using at least 5 different words :)