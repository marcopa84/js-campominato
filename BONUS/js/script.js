// Il computer deve generare 16 numeri casuali da 1 a 100.

// In seguito deve chiedere all’utente di inserire per 84 volte un numero da 1 a 100, se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.

// La partita termina quando il giocatore inserisce un numero “vietato”, ovvero presente nella lista di numeri random, o raggiunge il numero massimo possibile di tentativi consentiti.

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// Con difficoltà 0 => numeri vietati da 1 a 100, tentativi 84
// con difficoltà 1 => numeri vietati  da 1 a 80, tentativi 64
// con difficoltà 2 => numeri vietati  da 1 a 50, tentativi 34

// VERSIONE BONUS

var numeriRandom = [];
var numeriUtente = [];
var numeriOk = 0;
var erroriInput = 1;
var trovatoNumeroVietato = false;

var numeriMassimi = 100;
var tentativi = 84;

var difficolta = parseInt(prompt('Inserisci il grado di difficoltà con cui vuoi giocare da 0 a 2:'));
console.log(difficolta);
if (difficolta == 1){
  numeriMassimi = 80;
  tentativi = 64;
} else if (difficolta == 2){
  numeriMassimi = 50;
  tentativi = 34;
} else {
  alert('Hai immesso un valore di difficoltà non valido! Giocherai al livello 0!')
}
console.log(numeriMassimi);
console.log(tentativi);
while (numeriRandom.length < 16) {
  var numeroEstratto = getRandomIntInclusive(1,numeriMassimi);
  if(numeriRandom.includes(numeroEstratto) == false){
    numeriRandom.push(numeroEstratto);
  }
}
console.log(numeriRandom);

while (numeriUtente.length < tentativi && erroriInput <= 5 && trovatoNumeroVietato == false) {
  // chiedo il numero all utente

  var resultRange = false;
  do{
    var numeroUtenteSingolo = parseInt(prompt('inserisci il numero da 1 a ' + numeriMassimi));
  } while(checkRangeNumber(1, numeriMassimi, numeroUtenteSingolo) == false)

  // se è diverso lo inserisco nell'array
  if(numeriUtente.includes(numeroUtenteSingolo) == false && resultRange == false){
    numeriUtente.push(numeroUtenteSingolo);
    numeriOk +=1;

    // Controllo se il numero è presente nei numeri random
    var i = 0;
    while (i < numeriRandom.length && numeriUtente != numeriRandom[i]){
      if (numeroUtenteSingolo != numeriRandom[i]) {
        console.log(numeriOk);
        console.log('comparazione OK');
      }
      else if (numeroUtenteSingolo == numeriRandom[i]) {
        trovatoNumeroVietato = true;
        console.log('comparazione NO');
        alert('HAI PERSO! ne hai indovinati: ' + numeriOk);
        console.log(numeriOk);
      }
      i++
    }
  }

  // se è uguale mando un allert
  else{
    alert('NUMERO GIA\' PRESENTE! hai commesso errori per nr. ' + erroriInput + ' volte');
    erroriInput += 1;
  }


  // Troppi errori
  if (erroriInput > 5) {
    alert('ATTENZIONE! hai commesso 5 errori, vatti a fare una passeggiata e poi ci rivediamo!');
  }
  console.log(numeriUtente);
}




// Funzione generazione numero random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//funzione che controlla che un numero sia in un certo range
function checkRangeNumber(min, max, number) {
  var resultRange = false;
  if(number >= min && number <= max) {
    resultRange = true;
  }
  return resultRange;
}
