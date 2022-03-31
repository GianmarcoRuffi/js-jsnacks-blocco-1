/*Snack 2
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.*/

let numList = [];
numList.length = 6;

do {
  let enteredNumber = parseInt(prompt("Please enter a number "));
  if (number % 2 == 0) {
    console.log("The number is even.");
  }

  // if the number is odd
  else {
    numList.push(enteredNumber);
    console.log("The number is odd.");
    console.log(numList);
  }
} while (isNaN(enteredNumber) || enteredNumber < 6);

console.log(number);
console.log(numList);
