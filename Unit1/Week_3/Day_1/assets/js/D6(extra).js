// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali 
 (creati con la funzione "giveMeRandom") 
 e per ogni elemento stampa in console se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/
var casual = [];
var checkArray = function(array){
    var sum = 0;
    for (let i = 0; i < 10; i++) {
        const randomNumber = Math.floor(Math.random() * 10);
        array.push(randomNumber);
        if (array[i]> 5){
            sum += array[i];
            array[i] += ' è grande';
        }
        else {
            array[i] += ' è piccolo';
        }
    }
    return 'Ho un insieme di numeri dove: ' + array + '. La somma dei numeri grandi è: ' + sum;
}

console.log('Es. Extra 1 - ' + checkArray(casual));

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: 
 "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

function Acquisto(price, name, id, quantity) {
    this.price = price;
    this.name = name;
    this.id = id;
    this.quantity = quantity;
};

const edera = new Acquisto (10, 'Edera', 'pianta', 2);
const mappa = new Acquisto (15, 'Mappa', 'cartina geografica', 4);

var shoppingCart = [edera, mappa];

var shoppingCartTotal = function(){
    let total = 0;
    for (var i = 0; i < shoppingCart.length; i++) {
        total += shoppingCart[i].price * shoppingCart[i].quantity;
    }
    return total;
}
console.log('Es. Extra 2 - ' + shoppingCartTotal())


/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: 
 "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" 
 e ritorna il nuovo numero totale degli elementi.
*/

const nutella = new Acquisto (3, 'Nutella', 'crema', 3);

var addToShoppingCart = function (newObj){
    shoppingCart.push(newObj);
    let oggettiTot = 0;
    oggettiTot = shoppingCart.length;
    return 'nel tuo carrello ci sono ' + oggettiTot + ' articoli'
}

console.log('Es. Extra 3 - ' + addToShoppingCart(nutella))

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: 
 "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

var maxShoppingCart = function(max){
    max = shoppingCart[0].price;
    var caro = shoppingCart[0].name;
    shoppingCart.forEach(element => {
        if (element.price > max){
            max = element.price;
            caro = element.name;
        }});
    return 'Il più caro è ' + caro + ' che costa ' + max;
}

console.log('Es. Extra 4 - ' + maxShoppingCart())

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: 
 "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

var latestShoppingCart = function(){
    var latest = shoppingCart.length - 1;
    return shoppingCart[latest];
}

console.log('Es. Extra 5 - ' + latestShoppingCart().name)


/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè 
 il numero casuale non è maggiore di x per tre volte di fila.
*/

var loopUntil = function(x){
    if (x>=0 && x<=9) {

    } 
    else {alert('choose a number between 0 and 9')} 
}

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna 
la media aritmetica. 
La funzione salta automaticamente i valori non numerici nell'array.
*/




/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
var stringhe = ['farfalla', 'vino', 'birra', 'pirata', 'bicchiere'];
var piuLunga = function(){
    max = stringhe[0].length;
    var lunga = stringhe[0];
    stringhe.forEach(element => {
        if (element.lenght > max){
            max = element.lenght;
            lunga = element;
        }});
    return 'La parola più lunga è: ' + lunga + ', perché ha ' + max + ' lettere ';
};

console.log('Es. Extra 8 - ' + piuLunga())

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. 
 La funzione riceve un parametro stringa chiamato "emailContent", e torna un 
 valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole 
 "SPAM" o "SCAM".
*/
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

var giorno = new Date(2023,01,07);

function days(data) {
    const today = new Date();
    let daysPassed = today - data;
    daysPassed = Math.floor(daysPassed/1000/60/60/24);
    return `Da ${data} sono trascorsi ${daysPassed} giorni`;
}

console.log('Es. Extra 10 - ' + days(giorno));

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come paremetri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

