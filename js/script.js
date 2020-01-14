// Il computer deve generare 16 numeri casuali da 1 a 100.

// In seguito deve chiedere all’utente di inserire per 84 volte un numero da 1 a 100, se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.

// La partita termina quando il giocatore inserisce un numero “vietato”, ovvero presente nella lista di numeri random, o raggiunge il numero massimo possibile di tentativi consentiti.

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

var numeriRandom = [];

//TO DO VERIFICARE LA CORRETTA CREAZIONE DEI NUMERI CHE POTREBBERO ESSERE DUPLICATI
var i = 0;
while (i < 16) {
  var numeroEstratto = getRandomIntInclusive(1,20);
  if (numeroEstratto != numeriRandom[i]){
    numeriRandom.push(numeroEstratto);
    i++;
  }
  else {
    i--;
    // numeriRandom.pop();
  }
  console.log(numeroEstratto);
}

console.log(numeriRandom);

// Funzione generazione numero random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
