/*Snack 2
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.*/

let numList = [];

let questionCount = 0;

do {
  let enteredNumber = parseInt(prompt("Please enter a number "));

  if (isNaN(enteredNumber)) {
    console.log("Not a number");
  } else if (enteredNumber % 2 == 0) {
    console.log("The number is Even. It won't be added.");
    questionCount += 1;
  } else {
    numList.push(enteredNumber);
    questionCount += 1;
    console.log("The number is Odd. Added to the array.");
    console.log(numList);
  }
} while (questionCount < 6);

console.log(numList);
console.log("Array length: " + numList.length);
