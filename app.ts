#! /usr/bin/env node

import inquirer from "inquirer";
const calculator = async()=>{
  const answer = await inquirer.prompt([
    { message: "Enter the first number", type: "number", name: "firstNumber" },
    { message: "Enter the second number", type: "number", name: "secondNumber" },
    {
      message: "select the one operator to perform operation",
      type: "list",
      name: "operator",
      choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
  ]);
  
  //conditional statement
  if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
  } else if (answer.operator === "Subtration") {
    console.log(answer.firstNumber - answer.secondNumber);
  } else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
  } else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
  } else {
    console.log("please select the valid operator");
  }
  
}
calculator();