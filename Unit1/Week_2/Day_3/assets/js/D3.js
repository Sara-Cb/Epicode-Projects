/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const es1n1 = 17;
const es1n2 = 71;

var bigger = es1n1 >= es1n2 ? es1n1 : es1n2;

document.getElementById("esercizio1").innerHTML =
  "Il numero maggiore è " + bigger;
console.log("Es.1 - " + "Il numero maggiore è " + bigger);

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

const es2n1 = 19;

var same = es2n1 === 5 ? "equal" : "not equal";
/*oppure ---   var same = (es2n1 !=== 5) ? 'not equal' : 'equal'; */

document.getElementById("esercizio2").innerHTML =
  "The two numbers are: " + same;
console.log("Es.2 - " + "The two numbers are: " + same);

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente 
  divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const es3n1 = 27;
const es3n2 = 25;

var divisibile = es3n1 % 5 === 0 ? "divisibile per 5" : "non divisibile per 5";
var divisibile2 = es3n2 % 5 === 0 ? "divisibile per 5" : "non divisibile per 5";

document.getElementById("esercizio3").innerHTML =
  "Il numero " + es3n1 + " è " + divisibile;
document.getElementById("esercizio3_").innerHTML =
  "Il numero " + es3n2 + " è " + divisibile2;
console.log("Es.3 - " + "Il numero " + es3n1 + " è " + divisibile);
console.log("Es.3 - " + "Il numero " + es3n2 + " è " + divisibile2);

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 
  8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

const es4n1 = 57;
const es4n2 = 27;

var verificaOtto =
  es4n1 == 8 ||
    es4n2 == 8 ||
    es4n1 + es4n2 == 8 ||
    es4n1 - es4n2 == 8 ||
    es4n2 - es4n1 == 8
    ? "Almeno una delle opzioni è vera"
    : "Nessuna delle opzioni è vera";

document.getElementById("esercizio4").innerHTML += verificaOtto;
console.log(verificaOtto);

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

var totalShoppingCart = 60;
const spedizione = 10;
var totalCost = "";

if (totalShoppingCart > 50) {
  totalCost = totalShoppingCart;
  document.getElementById("esercizio5").innerHTML += "Sì";
} else {
  totalCost = totalShoppingCart + spedizione;
  document.getElementById("esercizio5").innerHTML += "No";
}

document.getElementById("esercizio5_").innerHTML += totalCost;
console.log("Es. 5 - " + "Il tuo totale è: " + totalCost);
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, 
  determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

var totScontato = totalShoppingCart * 0.8;

if (totScontato > 50) {
  totalCost = totScontato;
  document.getElementById("esercizio6").innerHTML += "Sì";
} else {
  totalCost = totScontato + spedizione;
  document.getElementById("esercizio6").innerHTML += "No";
}

document.getElementById("esercizio6_").innerHTML += totalCost;
console.log("Es. 6 - " + "Il tuo totale è: " + totalCost);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, 
  dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
/*
var riordiniamo = [es7n1, es7n2, es7n3];
document.getElementById('esercizio7').innerHTML += riordiniamo;

riordiniamo.sort();
document.getElementById('esercizio7_').innerHTML += riordiniamo;

console.log('Es. 7 - ' + 'Dal minore al maggiore: ' + riordiniamo);
*/

var es7n1 = 33;
var es7n2 = 23;
var es7n3 = 3;

var riordiniamo = [es7n1, es7n2, es7n3];
document.getElementById("esercizio7").innerHTML += riordiniamo;

if (es7n1 > es7n2 && es7n1 > es7n3) { // es7n1 è il maggiore di tutti, sappiamo che va per ultimo
  if (es7n2 > es7n3) {
    riordiniamo = [es7n3, es7n2, es7n1];
  } else {
    riordiniamo = [es7n2, es7n3, es7n1];
  }
} else if (es7n2 > es7n1 && es7n2 > es7n3) { // es7n2 è il maggiore di tutti, sappiamo che va per ultimo
  if (es7n1 > es7n3) {
    riordiniamo = [es7n3, es7n1, es7n2];
  } else {
    riordiniamo = [es7n1, es7n3, es7n2];
  }
} else { // es7n3 è il maggiore di tutti, sappiamo che va per ultimo
  if (es7n1 > es7n2) {
    riordiniamo = [es7n2, es7n1, es7n3];
  } else {
    riordiniamo = [es7n1, es7n2, es7n3];
  }
}

document.getElementById("esercizio7_").innerHTML += riordiniamo;

console.log("Es. 7 - " + "Dal minore al maggiore: " + riordiniamo);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no 
  (suggerimento: cerca su un motore di ricerca "typeof").
*/

const es8n1 = 8;
document.getElementById("es8n1").innerHTML = es8n1;

var numero = (typeof es8n1 == 'number') ? "Sì" : "No";
document.getElementById("esercizio8").innerHTML = numero;

console.log("Es. 8 - " + es8n1 + " è un numero? " + numero);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari 
  (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const es9n1 = 345;
document.getElementById("es9n1").innerHTML = es9n1;

var pari = (es9n1 % 2 == 0) ? "Sì" : "No";
document.getElementById("esercizio9").innerHTML = pari;

console.log("Es. 9 - " + es9n1 + " è un numero pari? " + pari);

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

const es10n1 = 10;
var rapporto = "";

if (es10n1 < 5) {
  rapporto = " è minore di 5";
} else if (es10n1 < 10) {
  rapporto = " è minore di 10";
} else {
  rapporto = " è maggiore o uguale a 10";
}

console.log("Es. 10 - " + es10n1 + rapporto);
document.getElementById('esercizio10').innerHTML = es10n1 + rapporto;


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", 
  il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
};

me.city = 'Toronto'; 
console.log('Es. 11 -' + me);
document.getElementById('esercizio11').innerHTML = `${me.name} ${me.lastName}, skilled in ${me.skills}, lives in ${me.city}`;


//document.getElementById('esercizio11').innerHTML = me.name + ' ' + me.lastName + ', (' + me.skills + '), ' + me.city;


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

me.lastName = '';
console.log('Es. 12 -' + me);
document.getElementById('esercizio12').innerHTML = `${me.name} ${me.lastName}, skilled in ${me.skills}, lives in ${me.city}`;


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
me.skills.pop();
console.log('Es. 13 -' + me);
document.getElementById('esercizio13').innerHTML = `${me.name} ${me.lastName}, skilled in ${me.skills}, lives in ${me.city}`;

//document.getElementById('esercizio11').innerHTML = me.name + ' ' + me.lastName + ', (' + me.skills + '), ' + city;

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
var array14 = []
array14.push('1')
array14.push('2')
array14.push('3')
array14.push('4')
array14.push('5')
array14.push('6')
array14.push('7')
array14.push('8')
array14.push('9')
array14.push('10')

console.log('Es. 14 -' + array14);
document.getElementById('esercizio14').innerHTML = array14;
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

array14.pop();
array14.push('100')
console.log('Es. 15 -' + array14);
document.getElementById('esercizio15').innerHTML = array14;
