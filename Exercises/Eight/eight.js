//Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".

const randomNumber = Math.ceil(Math.random() * 10);
const userGuessNumber = prompt("Try to guess the number beetwen 1 to 10");
if (userGuessNumber == randomNumber) {
  console.log(`Matched, good work number was ${randomNumber}.`);
} else {
  console.log(`Not matched, the number was ${randomNumber}.`);
}