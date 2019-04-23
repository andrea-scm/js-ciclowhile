var cognomi = [];
var quanti_cognomi = prompt("Inserisci un numero,il quale determinerà il numero di cognomi da inserire per comporre la lista di cognomi: ")
var cognome_utente = prompt("Inserisci il tuo cognome: ");
cognomi.push(cognome_utente);
var i = 0;

while (i < quanti_cognomi){
  cognomi.push(prompt("Inserisci una lista di " +quanti_cognomi+ " cognomi: "));
  i++;
}

cognomi.sort();

console.log("Lista cognomi: " + cognomi + " Posizione cognome inserito: " + cognomi.indexOf(cognome_utente));
