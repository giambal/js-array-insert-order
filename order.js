var surnameContainer=["bianchi" , "rossi" , "baldoncini" , "pippo"];

var userSurname = prompt("inserisci cognome");

surnameContainer.push(userSurname);

surnameContainer.sort();


for (var i = 0; i < surnameContainer.length ; i++) {

  if (userSurname==surnameContainer[i]) {
   alert("la posizione di " + userSurname + " è la numero " + i);
  }
}
