/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dichiara una variabile di nome "myself" e assegnale come valore il tuo nome.
*/

let myself = 'Sara';

/* ESERCIZIO 2
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish', 'chinchilla'];

const printPets = () => {
    for (i=0; i<pets.length; i++){
        console.log(pets[i]);
    }
};

printPets()

/* ESERCIZIO 3
    Scrivi del codice per aggiungere all'array pets un nuovo elemento.
*/
pets.push('gorilla');

/* ESERCIZIO 4
    Scrivi del codice per rimuovere dall'array pets l'ultimo elemento aggiunto.
*/

pets.pop();

/* ESERCIZIO 5
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
const firstPet = pets.shift();
pets.push(firstPet);

console.log(pets);

/* ESERCIZIO 6
    Cicla gli elementi dell'array pets, e stampa true in console se l'animale comincia con la lettera "c". Stampa false in caso contrario.
*/
for (i=0; i<pets.length; i++){
    if (pets[i][0] === 'c') {
    console.log(true);
    } else {
    console.log(false);
    }
    }

/* ESERCIZIO 7
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

for (let car of cars) {
    car.licensePlate = 'AB123CD';
}

/* ESERCIZIO 8
    Scrivi una funzione per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Alla fine dell'esecuzione, la funzione dovrà ritornare la nuova lunghezza dell'array cars.
*/

const addCar = (brand, model, color, trims, licensePlate) => {
    const newCar = { brand, model, color, trims, licensePlate };
    cars.push(newCar);
    return console.log(cars.length);
}

addCar('Fiat', '500', 'Coral', ['life', 'style'], 'FS932GB');



/* ESERCIZIO 9
    Scrivi una funzione per per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justFirstTrims", sotto definito.
*/
let justFirstTrims = []
// inserisci la tua funzione qui
const saveFirstTrims = () => {
    for (let car of cars) {
    justFirstTrims.push(car.trims[0]);
    }
};

saveFirstTrims();
console.log(justFirstTrims);

/* ESERCIZIO 10
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console.
    Se la lunghezza del valore della proprietà "color" è uguale o minore di 4, mostra in console "Fizz".
    Altrimenti, mostra in console "Buzz".
*/
for (let car of cars) {
    if (car.color.length <= 4) {
    console.log("Fizz");
    } else {
    console.log("Buzz");
    }
};

/* ESERCIZIO 11
    Utilizza il metodo .filter() sull'array cars in modo da ottenere un nuovo array in cui sono presenti
    solamente le auto che hanno più di 2 trims disponibili.
*/
const carsMoreThan2Trims = cars.filter(car => car.trims.length > 2);
console.log(carsMoreThan2Trims);
/* ESERCIZIO 12
    Utilizza il metodo .map() sull'array cars in modo da ottenere un nuovo array in cui sono presenti
    stringhe formate nel seguente modo: "Ford Fiesta", "Peugeot 208" etc.
*/

const carModels = cars.map(car => `${car.brand} ${car.model}`);
console.log(carModels);

/* ESERCIZIO 13
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

const printNum = function () {
let i = 0;
while (numericArray[i] !== 32) {
console.log(numericArray[i]);
i++;
}
};

printNum();

/* ESERCIZIO 14
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd'];
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

const positionsArray = charactersArray.map((char) => {
switch (char) {
case 'a':
return 1;
case 'b':
return 2;
case 'c':
return 3;
case 'd':
return 4;
case 'e':
return 5;
case 'f':
return 6;
case 'g':
return 7;
case 'h':
return 8;
case 'i':
return 9;
case 'j':
return 10;
case 'k':
return 11;
case 'l':
return 12;
case 'm':
return 13;
case 'n':
return 14;
case 'o':
return 15;
case 'p':
return 16;
case 'q':
return 17;
case 'r':
return 18;
case 's':
return 19;
case 't':
return 20;
case 'u':
return 21;
case 'v':
return 22;
case 'w':
return 23;
case 'x':
return 24;
case 'y':
return 25;
case 'z':
return 26;
default:
return null;
}
});

console.log(positionsArray);

/*
const charactersArray = ['g', 'n', 'u', 'z', 'd'];

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const positionsArray = charactersArray.map(char => alphabet.indexOf(char.toLowerCase()) + 1);

console.log(positionsArray);*/