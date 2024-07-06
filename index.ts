#! /usr/bin/env node

import inquirer from "inquirer"

// computer will have random number

// user will try to guess that number

const randomNumber = Math.floor(Math.random() * 6 + 1);

const answer = await inquirer.prompt([
  {
    message: "Please select any number between 1 to 6",
    type: "number",
    name: "usersGuessedNumber",
  },
]);

if (answer.usersGuessedNumber === randomNumber) {
  console.log("Congratulations! You've guessed the right number.");
} else {
  console.log("Sorry! you've guessed the wrong number.");
}
