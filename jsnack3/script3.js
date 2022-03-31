/*JSnack 3
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.*/

// let num = parseInt(prompt("Please enter a 4-digits number."));

let maxLength = 4;
let userData = -1;

while (userData == -1 || (userData != null && userData.length > maxLength)) {
  userData = window.prompt(`Please enter a ${maxLength}-digits number.`);
  console.log(userData);
}
