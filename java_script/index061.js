const weekdayNumber = 1;
let weekDay = null;

switch (weekdayNumber) {
  case 1:
    weekDay = 'Today it\'s Monday';
    break;
  case 2:
    weekDay = 'Today it\'s Tusday';
    break;
  case 3:
    weekDay = 'Today it\'s Wednesday';
    break;
  case 4:
    weekDay = 'Today it\'s Thursday';
    break;
  case 5:
    weekDay = 'Today it\'s Friday';
    break;
  case 6:
    weekDay = 'Today it\'s Saturday';
    break;
  case 7:
    weekDay = 'Today it\'s Sunday';
    break;
  default:
     weekDay = 'Error: Please input a number bettwen 1 and 7';
}

console.log (weekDay);

// IF ELSE METHODE

if ( weekdayNumber === 1 ) {
    console.log ('Today it\'s Monday');
} else if ( weekdayNumber === 2 ) {
    console.log ('Today it\'s Tusday');
} else if ( weekdayNumber === 3 ) {
    console.log ('Today it\'s Wednesday');
} else if ( weekdayNumber === 4 ) {
    console.log ('Today it\'s Thursday');
} else if ( weekdayNumber === 5 ) {
    console.log ('Today it\'s Friday');
} else if ( weekdayNumber === 6 ) {
    console.log ('Today it\'s Saturday');
} else if ( weekdayNumber === 7 ) {
    console.log ('Today it\'s Sunday');
}  else {
    console.log ('Error: Please input a number bettwen 1 and 7');
}







// Define weekdayNumber and assign a numeric value between 1 and 7
// If weekday number is 1 show the following message: Today it's Monday
// If weekday number is 2 show the following message: Today it's Tuesday
// If weekday number is 3 show the following message: Today it's Wednesday
// If weekday number is 4 show the following message: Today it's Thursday
// If weekday number is 5 show the following message: Today it's Friday
// If weekday number is 6 show the following message: Today it's Saturday
// If weekday number is 7 show the following message: Today it's Sunday
// If weekday number it's not bettwen 1 and 7 show an error message: Error: Please input a number bettwen 1 and 7
// Switch version:
// Use a switch statement to show weekday name using the weekday variable value
// IF/ELSE/IF version:
// After the switch version create the same functionality but using if/else/if statement

// Try all the posible cases/scenarios (even the error message) by changing the weekdayNumber value

// Refactor
// Once you have the code working for both statements refactor the code as follows
// Don't use console.log() inside the switch statement
// Instead add a message variable so each case only adds the selected weekname message
// Use only one console.log() after the switch statement to show the result and error