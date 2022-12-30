/*
Write a JavaScript program to get the current date.
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/
var date = new Date();

var dateMonth = date.getMonth();
var dateDay = date.getDate();
dateMonth = (dateMonth <= 9)? '0'+dateMonth+1 : dateMonth+1;
dateDay = (dateDay <= 9)? '0'+dateDay : dateDay;

console.log(`${dateDay}/${dateMonth}/${date.getFullYear()}`);
console.log(`${dateDay}-${dateMonth}-${date.getFullYear()}`);