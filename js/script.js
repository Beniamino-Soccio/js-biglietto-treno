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
const noDiscount = 0 ;
const youngDiscount = 20 ;
const seniorDiscount = 40;

// ! FASE DI RACCOLTA DATI

const kilometers = parseInt(prompt('inserisci il numero di chilometri da percorrere'));
const age = parseInt(prompt("inserisci l'età del passeggero"));

// ! FASE DI ELABORAZIONE

const basePrice = kilometers * priceKm ;

if (!(age < 18) && !(age >= 65)) {
    console.log('il prezzo del biglietto e di:' + ' ' + basePrice + '€');
    //!bonus
    const discountElement = document.getElementById('discount');
    console.log(discountElement);
    discountElement.innerText = 'Sconto applicato: ' + noDiscount + ' %';
    const discountticketElement = document.getElementById('discount-ticket');
    console.log(discountticketElement);
    discountticketElement.innerText = 'prezzo scontato: ' + basePrice + ' €';
} else if (age < 18) {
    const youngPrice = basePrice - ((basePrice * youngDiscount) / 100);
    console.log('il prezzo del biglietto e di:' + ' ' + youngPrice + '€');
    //!bonus
    const discountElement = document.getElementById('discount');
    console.log(discountElement);
    discountElement.innerText = 'Sconto applicato: ' + youngDiscount + ' %';
    const discountticketElement = document.getElementById('discount-ticket');
    console.log(discountticketElement);
    discountticketElement.innerText = 'prezzo scontato: ' + youngPrice + ' €';
} else {
    const seniorPrice = basePrice - ((basePrice * seniorDiscount) / 100);
    console.log('il prezzo del biglietto e di:' + ' ' + seniorPrice + '€');
    //!bonus
    const discountElement = document.getElementById('discount');
    console.log(discountElement);
    discountElement.innerText = 'Sconto applicato: ' + seniorDiscount + ' %';
    const discountticketElement = document.getElementById('discount-ticket');
    console.log(discountticketElement);
    discountticketElement.innerText = 'prezzo scontato: ' + seniorPrice + ' €';
}
//!bonus
//recupero gli elementi che mi interessano dal DOM
const ageElement = document.getElementById('user-age');
console.log(ageElement);

const kmElement = document.getElementById('km');
console.log(kmElement);

const priceticketElement = document.getElementById('price-ticket');
console.log(priceticketElement);

//stampo i risultati nell'elemento interessato del DOM
ageElement.innerText = 'Età: ' + age + ' anni';

kmElement.innerText = 'lunghezza tragitto: ' + kilometers + ' km';

priceticketElement.innerText = 'prezzo base ticket: ' + basePrice + ' €';

