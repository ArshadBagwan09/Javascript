const prompt = require("prompt-sync")();

let age = Number(prompt("Enter your age: "));

if (age >= 18) {
  console.log("Eligible to Vote");
} else {
  console.log("Not Eligible to Vote");
}