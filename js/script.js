// Blocco 2 Snack1
// Inserisci un numero, se è pari stampa il numero, se è dispari
// stampa il numero successivo

var numeroUtente = parseInt(prompt('Inserisci un numero:'));

function isEven(numero) {
  var messaggio
  if (numero % 2 == 0){
    console.log(numero)
    return messaggio = (numero);
  }
  else {
    console.log(numero + 1);
    return messaggio = (numero + 1);
  }
}


var risultato = isEven(numeroUtente);
console.log('risultato',risultato);

//CHIARA//

// var numeroUtente = parseInt(prompt('Inserisci un numero:'));
// console.log(numeroUtente);
// if (numeroUtente % 2 == 0){
//     console.log(numeroUtente)
//   }
//   else {
//     console.log(numeroUtente + 1);
//   }
