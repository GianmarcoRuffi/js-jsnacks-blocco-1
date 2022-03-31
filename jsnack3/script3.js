/*JSnack 3
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.*/

let num = prompt("Please enter a 4-digits number.");

const maxLength = 4;

if (num.length != 4) {
  console.log("ERRORE");
} else {
  let numbers = num.split("");
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += parseInt(numbers[i]);
  }

  console.log(sum);
}
