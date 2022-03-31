/*JSnack 1
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

const userName = prompt(
  "Good evening and welcome to the Jay Gatsby party! Your name, please, sir."
);

const guestList = [
  "Nick",
  "Daisy",
  "Tom",
  "Jordan",
  "Klipspringer",
  "Meyer ",
  "George",
  "Myrtle",
  "Owl Eyes",
];

let output = document.getElementById("output");

let invitedGuest = false;
let i = 0;

while (!invitedGuest && i != guestList.length) {
  console.log(i);

  if (userName === guestList[i]) {
    invitedGuest = true;
  }

  i++;
}

if (invitedGuest) {
  output.innerHTML = "<h1>Thank you sir, enjoy the party!</h1>";
} else {
  output.innerHTML =
    "<h1>I'm sorry sir, it appears that you're not among the guests tonight.</h1>";
}
