// *** Ignore the following lines ***
import chalk from "chalk";
import prompt from "prompt-sync";
// *** Ignore the above lines ***

// Use the following prompt to read input from the user:
const readLine = prompt({ sigint: true });

function runExerciseOne() {
  const firstName = "Sebastian";
  const lastName = "Vallin";
  console.log(
    `Hello ${firstName} ${lastName}! I'm glad to inform you that you are the test subject of my very first assignment!`
  );
}

function runExerciseTwo() {
  const firstName = readLine("Enter your first name: ");
  const lastName = readLine("Enter your last name: ");
  console.log(`Hello ${firstName} ${lastName}! Have a nice day!`);
}

function runExerciseThree() {
  let num1 = 0;
  let num2 = 0;
  let validInput = false;

  while (!validInput) {
    try {
      const input = readLine("Enter first number: ");
      num1 = parseInt(input);

      if (isNaN(num1)) {
        throw new Error();
      }

      validInput = true;
    } catch {
      console.error("Invalid input. Please enter a number.");
    }
  }

  validInput = false;
  while (!validInput) {
    try {
      const input = readLine("Enter second number: ");
      num2 = parseInt(input);

      if (isNaN(num2)) {
        throw new Error();
      }

      validInput = true;
    } catch {
      console.error("Invalid input. Please enter a number.");
    }
  }

  console.log(Math.abs(num1 - num2) !== 1 ? "Not consecutive" : "Consecutive");
}

function runExerciseFour() {
  const today = new Date();

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  console.log("Today");
  console.log(today.toLocaleDateString());
  console.log(today.toLocaleTimeString());
  console.log(today.toLocaleString());

  console.log(`Tomorrow: ${tomorrow.toLocaleDateString()}`);
  console.log(`Yesterday: ${yesterday.toLocaleDateString()}`);
}

function runExerciseFive() {
  // A
  const intNum1 = 5;
  const intNum2 = 9;
  const intSum = intNum1 + intNum2;
  console.log(intSum);

  // B
  const floatNum1 = 3.3;
  const floatNum2 = 9.4;
  const floatSum = Math.round(floatNum1 + floatNum2);
  console.log(floatSum);

  // C
  const evenNum = 4;
  const oddNum = 7;
  const divisionResult = oddNum / evenNum;
  console.log(divisionResult);
}

// Does not really work that well in TS because theres only the "number" type (not int, float, double etc)
function runExerciseSix() {
  const x = 40;
  const y = 20;
  const z = 25;
  const m = 15;

  let e: number, f: number, g: number, h: number;

  // formula x + y * z / m

  // e = 100
  e = ((x + y) * z) / m;
  console.log(e, "=", 100, e === 100);

  // f = 60
  f = x + y * Math.floor(z / m);
  console.log(f, "=", 60, f === 60);

  // g = 73
  g = Math.floor(x + (y * z) / m);
  console.log(g, "=", 73, g === 73);

  // 36
  h = Math.floor((x + y * z) / m);
  console.log(h, "=", 36, h === 36);
}

function runExerciseSeven() {
  const input = parseInt(readLine("Enter a positive whole number: "));
  console.log(input % 2 === 0 ? "Even" : "Odd");
}

function runExerciseEight() {
  const randomIntList = Array.from({ length: 20 }, () =>
    Math.floor(Math.random() * 100)
  );

  const evenNumbers: number[] = [];
  const oddNumbers: number[] = [];

  for (const num of randomIntList) {
    if (num % 2 === 0) {
      evenNumbers.push(num);
    } else {
      oddNumbers.push(num);
    }
  }

  console.log("######### Using a for loop #########");
  console.log();
  console.log("Even numbers: ", evenNumbers);
  console.log();
  console.log("Odd numbers: ", oddNumbers);

  const evenNumbers2 = randomIntList.filter((num) => num % 2 === 0);
  const oddNumbers2 = randomIntList.filter((num) => num % 2 !== 0);

  console.log();
  console.log("######### Using filter #########");
  console.log();
  console.log("All numbers: ", randomIntList);
  console.log();
  console.log("Even numbers: ", evenNumbers2);
  console.log();
  console.log("Odd numbers: ", oddNumbers2);
}

function runExerciseNine() {
  const radius = parseFloat(readLine("Enter a radius: "));
  const sphereArea = 4 * Math.PI * Math.pow(radius, 2);
  const circleArea = Math.PI * Math.pow(radius, 2);

  console.log("Sphere area: ", sphereArea);
  console.log("Circle area: ", circleArea);
}

function runExerciseTen() {
  const input = readLine(
    "Enter 10 numbers (positive and negative) separated by a space: "
  );

  const negativeNumbers: number[] = [];
  for (const num of input.split(" ")) {
    const parsedNum = parseInt(num);
    if (parsedNum < 0) {
      negativeNumbers.push(parsedNum);
    }
  }
  console.log("######## Using for loop ########");
  console.log("Negative numbers: ", negativeNumbers);

  const negativeNumbers2 = input
    .split(" ")
    .map((num) => parseInt(num))
    .filter((num) => num < 0);
  console.log("######## Using map and filter ########");
  console.log("Negative numbers: ", negativeNumbers2);
}

/* ^^^^^^^^^^^^  Add the rest of the exercise functions above this line ^^^^^^^^^^^^ */

let keepAlive = true;
console.clear();
while (keepAlive) {
  try {
    const assignmentChoice = parseInt(
      readLine("Enter assignment number (or -1 to exit): ")
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
      readLine(chalk.dim("Press enter to continue..."));
      console.clear();
    } else {
      console.log(chalk.green("Exiting..."));
    }
  } catch (err) {
    console.log(chalk.red(err));
  }
}
