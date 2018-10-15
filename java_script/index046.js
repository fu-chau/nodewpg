const userAndPassword = 'pepito2017,12345';
const userName = userAndPassword.substr(0,10);
const password = userAndPassword.substr(11,5);

console.log(`the user ${userName} has ${password} as password`);
