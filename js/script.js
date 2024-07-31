//TRACCIA: chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero e calcolare il prezzo totale del viaggio, secondo queste regole:
//-il prezzo del biglietto è definito in base ai km (0.21 € al km)
//-va applicato uno sconto del 20% per i minorenni
//-va applicato uno sconto del 40% per gli over 65.
//BONUS :
//Stampare il prezzo finale sulla pagina invece che in console
// Aggiungere, sempre in pagina, altre informazioni, come il prezzo prima dello sconto e l'età e il chilometraggio indicati dall'utente
//Abbellire col CSS

//ANALISI TRACCIA "base"
/*
1.preparo eventuali variabili da tenere in considerazione fin da subito
2.chiedere all'utente i chilometri da percorrere e l'età del passeggero
3.calcolare il prezzo del viaggio
4.applicare gli eventuali sconti
5.stampare in console il prezzo
*/

// ! FASE DI PREPARAZIONE

const priceKm = 0.21 ;

// ! FASE DI RACCOLTA DATI

const kilometers = parseInt(prompt('inserisci il numero di chilometri da percorrere'));
const age = parseInt(prompt("inserisci l'età del passeggero"));

// ! FASE DI ELABORAZIONE

const basePrice = kilometers * priceKm ;
console.log(basePrice);