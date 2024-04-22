// *** Ignore the following lines ***
import chalk from "chalk";
import prompt from "prompt-sync";
const readLine = prompt();
const readKey = prompt({ sigint: true });
// *** Ignore the above lines ***

function runExerciseOne() {
  console.log(
    "Write your own code for this method. Press any key to exit method."
  );
}

function runExerciseTwo() {}

function runExerciseThree() {}

function runExerciseFour() {}

function runExerciseFive() {}

function runExerciseSix() {}

function runExerciseSeven() {}

function runExerciseEight() {}

function runExerciseNine() {}

function runExerciseTen() {}

/* ^^^^^^^^^^^^  Add the rest of the exercise functions above this line ^^^^^^^^^^^^ */

let keepAlive = true;
console.clear();
while (keepAlive) {
  try {
    const assignmentChoice = parseInt(
      readLine("Enter assignment number (or -1 to exit): ") ?? ""
    );
    console.log();
    switch (assignmentChoice) {
      case 1:
        runExerciseOne();
        break;
      case 2:
        runExerciseTwo();
        break;
      case 3:
        runExerciseThree();
        break;
      case 4:
        runExerciseFour();
        break;
      case 5:
        runExerciseFive();
        break;
      case 6:
        runExerciseSix();
        break;
      case 7:
        runExerciseSeven();
        break;
      case 8:
        runExerciseEight();
        break;
      case 9:
        runExerciseNine();
        break;
      case 10:
        runExerciseTen();
        break;

      /* ^^^^^^^^^^^^  Add the rest of the exercises above this line ^^^^^^^^^^^^ */
      case -1:
        keepAlive = false;
        break;
      default:
        console.log(chalk.red("That is not a valid assignment number!"));
        break;
    }
    if (assignmentChoice !== -1) {
      console.log();
      readKey(chalk.dim("Hit any key to continue..."));
      console.clear();
    } else {
      console.log(chalk.green("Exiting..."));
    }
  } catch (err) {
    console.log(err);
  }
}
