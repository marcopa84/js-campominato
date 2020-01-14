// Il computer deve generare 16 numeri casuali da 1 a 100.

// In seguito deve chiedere all’utente di inserire per 84 volte un numero da 1 a 100, se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.

// La partita termina quando il giocatore inserisce un numero “vietato”, ovvero presente nella lista di numeri random, o raggiunge il numero massimo possibile di tentativi consentiti.

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

var numeriRandom = [];
var numeriUtente = [];
var numeriOk = 0;
var erroriInput = 1;
var trovatoNumeroVietato = false;

while (numeriRandom.length < 16) {
  var numeroEstratto = getRandomIntInclusive(1,100);
  if(numeriRandom.includes(numeroEstratto) == false){
    numeriRandom.push(numeroEstratto);
  }
}
console.log(numeriRandom);

while (numeriUtente.length < 84 && erroriInput <= 5 && trovatoNumeroVietato == false) {
  // chiedo il numero all utente
  var numeroUtenteSingolo = parseInt(prompt('inserisci il numero da 1 a 100'));

  // se è diverso lo inserisco nell'array
  if(numeriUtente.includes(numeroUtenteSingolo) == false){
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
    // for (var i = 0; i < numeriRandom.length; i++) {
    //   var risultato = '';
    //   if (numeriUtente != numeriRandom [i]) {
    //     risultato = true;
    //     console.log('comparazione OK');
    //   }
    //   else if (numeriUtente == numeriRandom [i]) {
    //     risultato = false;
    //     console.log('comparazione NO');
    //   }
    // }
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
