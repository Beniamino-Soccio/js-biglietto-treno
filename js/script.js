//TRACCIA: chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero e calcolare il prezzo totale del viaggio, secondo queste regole:
//-il prezzo del biglietto è definito in base ai km (0.21 € al km)
//-va applicato uno sconto del 20% per i minorenni
//-va applicato uno sconto del 40% per gli over 65.
//BONUS :
//Stampare il prezzo finale sulla pagina invece che in console
// Aggiungere, sempre in pagina, altre informazioni, come il prezzo prima dello sconto e l'età e il chilometraggio indicati dall'utente
//Abbellire col CSS

//ANALISI TRACCIA BASE
/*
1.preparo eventuali variabili da tenere in considerazione fin da subito
2.chiedere all'utente i chilometri da percorrere e l'età del passeggero
3.calcolare il prezzo del viaggio
4.applicare gli eventuali sconti
5.stampare in console il prezzo
*/
//ANALISI TRACCIA BONUS
/*
1.Recuperare gli elementi che mi interessano dal DOM
2.stampo il numero di km inseriti dall'utente nell'elemento interessato del DOM
3.stampo l'età inserita dall'utente nell'elemento interessato del DOM
4.stampo il prezzo del biglietto eventualmente senza sconto nell'elemento interessato del DOM
5.stampo il prezzo eventualmente scontato nell'elemento del DOM interessato
*/

// ! FASE DI PREPARAZIONE

const priceKm = 0.21 ;
const basePrice = kilometers * priceKm ;

// ! FASE DI RACCOLTA DATI

const kilometers = parseInt(prompt('inserisci il numero di chilometri da percorrere'));
const age = parseInt(prompt("inserisci l'età del passeggero"));

// ! FASE DI ELABORAZIONE

//calcolo sconto per i minorenni( se l'età e < di 18 allora faccio il 20% altrimenti se vedo che è > di 65 faccio il 40%)
if (!(age < 18) && !(age >= 65)) {
    const basePrice = kilometers * priceKm ;
    console.log('il prezzo del biglietto e di:' + ' ' + basePrice + '€');
} else if (age < 18) {
    const youngPrice = basePrice - ((basePrice * 20) / 100);
    console.log('il prezzo del biglietto e di:' + ' ' + youngPrice + '€');
} else {
    const seniorPrice = basePrice - ((basePrice * 40) / 100);
    console.log('il prezzo del biglietto e di:' + ' ' + seniorPrice + '€');
}

// ! BONUS

