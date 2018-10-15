const playerName = 'Patrik Laine is lame';
const teams = 'New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins'
const message = 'Winnipeg is the best Canadian citi, Go Winnipeg';

const jetsUpper = `${(teams.charAt(46)).toUpperCase()}${teams.slice(47,50)}`

const finalMessage = `${( playerName.slice(0,12) ).toUpperCase()} ${message.slice(9,20)} ${jetsUpper} player, ${message.slice(36,38)} ${jetsUpper}!!`;

console.log (finalMessage);
