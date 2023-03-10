// Creo il container
const container = document.createElement('div');
container.id = 'container';
// Creo un bel titolo
const h1 = document.createElement('h1');
h1.innerHTML = 'Esercizi di JS, <br> anche in console';


// Li inserisco
document.getElementsByTagName('body')[0].appendChild(container);
container.appendChild(h1);

//creo un div per esercizi da A a G
const divBasic = document.createElement('div');
container.appendChild(divBasic);
const h2Basic = document.createElement('h2');
h2Basic.innerHTML = 'Esercizi Basic'
divBasic.appendChild(h2Basic);
const ulBasic = document.createElement('ul');
divBasic.appendChild(ulBasic);

//creo un div per esercizi da 1 a 10
const divFunzioni = document.createElement('div');
container.appendChild(divFunzioni);
const h2Funzioni = document.createElement('h2');
h2Funzioni.innerHTML = 'Esercizi Funzioni'
divFunzioni.appendChild(h2Funzioni);
const ulFunz = document.createElement('ul');
divFunzioni.appendChild(ulFunz);

//div per esercizi da 11 a 19
const divArr = document.createElement('div');
container.appendChild(divArr);
const h2Arr = document.createElement('h2');
h2Arr.innerHTML = 'Esercizi su Arrays e Oggetti'
divArr.appendChild(h2Arr);
const ulArr = document.createElement('ul');
divArr.appendChild(ulArr);

//div per esercizi da 20 a 26
const divDom = document.createElement('div');
container.appendChild(divDom);
const h2Dom = document.createElement('h2');
h2Dom.innerHTML = 'Esercizi sul DOM'
divDom.appendChild(h2Dom);
const ulDom = document.createElement('ul');
divDom.appendChild(ulDom);

//div per esercizi da 20 a 26
const divExtra = document.createElement('div');
container.appendChild(divExtra);
const h2Extra = document.createElement('h2');
h2Extra.innerHTML = 'Esercizi Avanzati'
divExtra.appendChild(h2Extra);



/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics
console.info('Esercizi di basic JS');
/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
/*
var sum = function () {
  return 10+20;
}
console.log(sum())
*/
function sum (n1, n2) {
  return n1 + n2;
}
console.log('Es. A - ' + sum(10, 20));
divBasic.appendChild(document.createElement('li')).innerHTML = 'Es. A - ' + sum(10, 20);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
function random () {
  let randomN = Math.floor(Math.random() * (21));
  return randomN;
}

console.log('Es. B - ' + random());
divBasic.appendChild(document.createElement('li')).innerHTML = 'Es. B - ' + random();

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

const me = {
  name: 'Sara',
  surname: 'Campobasso',
  age: '25'
}

function printObj (obj) {
  let entireObj = ''
  for (let prop in obj) {
    entireObj += `| ${prop}: ${obj[prop]} |`
  }
  return entireObj;
}

console.log('Es. C - ' + printObj(me));
divBasic.appendChild(document.createElement('li')).innerHTML = 'Es. C - ' + printObj(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;

console.log('Es. D - ' + printObj(me));
divBasic.appendChild(document.createElement('li')).innerHTML = 'Es. D - ' + printObj(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

var skills = ['Graphic Design', 'Web Development', 'Communication strategies'];
me.skills = skills;

console.log('Es. E - ' + printObj(me));
divBasic.appendChild(document.createElement('li')).innerHTML = 'Es. E - ' + printObj(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push('SM Management');

console.log('Es. F - ' + printObj(me));
divBasic.appendChild(document.createElement('li')).innerHTML ='Es. F - ' + printObj(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop();

console.log('Es. G - ' + printObj(me));
divBasic.appendChild(document.createElement('li')).innerHTML = 'Es. G - ' + printObj(me);

// Funzioni
console.info('Esercizi su funzioni JS');

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
function dice () {
  let randomN = Math.floor(Math.random() * (6) + 1);
  return randomN;
}

console.log('Es. 1 - ' + dice());
divFunzioni.appendChild(document.createElement('li')).innerHTML = 'Es. 1 - ' + dice();

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
function whoIsBigger (num1, num2) {
  return num1 > num2 ? num1 : num2;
}

console.log('Es. 2 - ' + whoIsBigger(5, 10));
divFunzioni.appendChild(document.createElement('li')).innerHTML = 'Es. 2 - ' + whoIsBigger(5, 10);


/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

function splitMe (string) {
  let array = string.split(' ');
  let result = [];
  array.forEach(function (word) {
    result.push(word);
  });
  return result;
}

console.log('Es. 3 - ' + splitMe('Every word must be separeted from each other'));
divFunzioni.appendChild(document.createElement('li')).innerHTML = 'Es. 3 - ' + splitMe('Every word must be separeted from each other');

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

function deleteOne(string, boolean) {
  if (boolean) {
    return string.slice(1);
  } else {
    return string.slice(0, -1);
  }
}
console.log('Es. 4 - ' + deleteOne("Hello", false));
divFunzioni.appendChild(document.createElement('li')).innerHTML = 'Es. 4 - ' + deleteOne("Hello", false);

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/


function onlyLetters(string) {
  let letters = '';
  for (let i = 0; i < string.length; i++) {
    if (isNaN(string[i])) {
      letters += string[i];
      if (string[i + 1] == ' ') { //se dopo quella lettera c'era uno spazio, lo devi inserire
        letters += ' ';
      }
    }
  }
  return letters;
}
console.log('Es. 5 - ' + onlyLetters("I have 4 dogs and 6 cats."));
divFunzioni.appendChild(document.createElement('li')).innerHTML = 'Es. 5 - ' + onlyLetters("I have 4 dogs and 6 cats.");

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

function isThisAnEmail(string) {
  var at = string.search('@');
  var dotPosition = string.lastIndexOf('.');
  return at >= 0 && dotPosition > at && dotPosition < string.length - 1;
}

console.log('Es. 6 - ' + isThisAnEmail('this.is@an.email'));
divFunzioni.appendChild(document.createElement('li')).innerHTML = 'Es. 6 - ' + isThisAnEmail('this.is@an.email');


/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
function whatDayIsIt() {
  var days = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
  var today = new Date().getDay();
  return days[today];
}

console.log('Es. 7 - ' + whatDayIsIt());
divFunzioni.appendChild(document.createElement('li')).innerHTML = 'Es. 7 - ' + whatDayIsIt();


/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
function diceS (num) {
  var launches = [];
  var sum = 0;
  for (i = 0; i < num; i++) {
    let result = dice()
    launches.push(result);
    sum += result;
  };
  var resultExplained =
    `Your ${num} launch(es) gave: ${launches}, for a total result of: ${sum}`
  return resultExplained
}

console.log('Es. 8 - ' + diceS(5));
divFunzioni.appendChild(document.createElement('li')).innerHTML = 'Es. 8 - ' + diceS(5);


/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
const myBD = new Date(1997, 08, 23);
const birthday = `${myBD.getDate()}/${myBD.getMonth()+1}/${myBD.getFullYear()}`
const today = new Date();

function howManyDays(date) {
  const time = Math.abs(today - date);
  const days = Math.floor(time / (1000 * 60 * 60 * 24)); 
  return days;
}

console.log(`Es. 9 - I was born on ${birthday}, so I already lived ${howManyDays(myBD)} days`); //
divFunzioni.appendChild(document.createElement('li')).innerHTML = `Es. 9 - I was born on ${birthday}, so I already lived ${howManyDays(myBD)} days`;

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
function isTodayMyBirthday(date) {
  if (date.getDate() === today.getDate() && date.getMonth() === today.getMonth()) {
    return 'Happy birthday! 🥳🎂';
  } else {
    return 'Happy un-birthday! 🎩🐰';
  }
}

console.log(`Es. 10 - ${isTodayMyBirthday(myBD)}`); //
divFunzioni.appendChild(document.createElement('li')).innerHTML = `Es. 10 - ${isTodayMyBirthday(myBD)}`;

// Arrays & Oggetti
console.info('Esercizi su Arrays e Oggetti JS');
// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; 
  deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

const fre = {
  name: 'Francesco',
  age: 27,
  eyeColor: 'green',
  job: 'Physiotherapist',
};

console.log(`Es. 11 pt.1 - ${printObj(fre)}`);
divArr.appendChild(document.createElement('li')).innerHTML = `Es. 11 pt1 - ${printObj(fre)}`;


function deleteProp(obj, prop) {
  delete obj[prop];
  return obj;
}

deleteProp(fre, 'job') //Fre's been fired from work!!

console.log(`Es. 11 pt.2 - ${printObj(fre)}`);
divArr.appendChild(document.createElement('li')).innerHTML = `Es. 11 pt2 - ${printObj(fre)}`;

// Array di film
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

function newestMovie(array) {
  let newest = '';
  let max = 0;
  array.forEach(film => {
    const year = parseInt(film.Year);
    if (year > max) {
      newest = `${film.Title}, dated: ${film.Year}`;
      max = year;
    } else if (year === max){
      newest += ` || ${film.Title}, dated: ${film.Year}`;
    }
  });
  return newest;
}

console.log(`Es. 12 - Most recent movie(s): ${newestMovie(movies)}`);
divArr.appendChild(document.createElement('li')).innerHTML = `Es. 12 - Most recent movie(s): ${newestMovie(movies)}`;

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

function countMovies(array) {
  let howMany = array.length;
  return `In my library there are ${howMany} movies`
}

console.log(`Es. 13 - ${countMovies(movies)}`);
divArr.appendChild(document.createElement('li')).innerHTML = `Es. 13 - ${countMovies(movies)}`;

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con 
  solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

function onlyTheYears(array){
  let anniUscita = [];
  array.forEach(film => {
    anniUscita.push(film.Year);
  });
  return anniUscita
}

console.log(`Es. 14 - ${onlyTheYears(movies)}`);
divArr.appendChild(document.createElement('li')).innerHTML = `Es. 14 - ${onlyTheYears(movies)}`;


/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

function onlyInLastMillennium(array) {
  let collection = '';
  let millennium = 2000;
  array.forEach(film => {
    const year = parseInt(film.Year);
    if (year < millennium){
      collection += ` ${film.Title}, dated: ${film.Year}.`;
    }
  });
  return `Movies from the last millennium: ${collection}`;
}

console.log(`Es. 15 - ${onlyInLastMillennium(movies)}`);
divArr.appendChild(document.createElement('li')).innerHTML = `Es. 15 - ${onlyInLastMillennium(movies)}`;


/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

function sumAllTheYears(array) {
  let sum = 0;
  array.forEach(film => {
    const year = parseInt(film.Year);
    sum += year;
  });
  return sum;
}

console.log(`Es. 16 - ${sumAllTheYears(movies)}`);
divArr.appendChild(document.createElement('li')).innerHTML = `Es. 16 - ${sumAllTheYears(movies)}`;


/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
// comincio a creare HTML così vedo anche le copertine!

// Creo un div con campo input e bottone (per es. 17)
const divSearch = document.createElement('div');
const titEs17 = document.createElement('h3');
titEs17.innerHTML = 'Esercizio 17, cerca un film'
const inputSearch = document.createElement('input');
inputSearch.type = 'text';
inputSearch.id = 'search-movie';
inputSearch.placeholder = 'Search a movie';
const btnSearch = document.createElement('button');
btnSearch.id = 'btnSearch';
btnSearch.textContent = 'Search';
const listaFilm = document.createElement('ul');
listaFilm.id = 'listaFilm';

// Aggiungo tutto
divArr.appendChild(divSearch);
divSearch.appendChild(titEs17);
divSearch.appendChild(inputSearch);
divSearch.appendChild(btnSearch);
divSearch.appendChild(listaFilm);

btnSearch.addEventListener("click", function () {
  let ricerca = inputSearch.value;
  if (ricerca == "") {
    alert("Scegli almeno un film");
    return;
  }
  movies.forEach(element => {
    if (element.Title.includes(ricerca)) {
      var li = document.createElement('li');
      li.innerHTML = `${element.Title} <br> ${element.Year} <br> <img src=${element.Poster}>`;
      listaFilm.appendChild(li);
    }
  })
  inputSearch.value = ''
});


/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro 
  e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono 
  la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
// Creo un div con campo input e bottone (per es. 18)
const divMatch = document.createElement('div');
const titEs18 = document.createElement('h3');
titEs18.innerHTML = 'Esercizio 18, i film contengono la parola?'
const inputMatch = document.createElement('input');
inputMatch.type = 'text';
inputMatch.id = 'match-movie';
inputMatch.placeholder = 'Search a movie';
const btnMatch = document.createElement('button');
btnMatch.id = 'btnSearch';
btnMatch.textContent = 'Search';
const listaMatch = document.createElement('ul');
listaMatch.id = 'listaMatch';
const listaUNMatch = document.createElement('ul');
listaUNMatch.id = 'listaUNMatch';

divArr.appendChild(divMatch);
divMatch.appendChild(titEs18);
divMatch.appendChild(inputMatch);
divMatch.appendChild(btnMatch);
divMatch.appendChild(listaMatch);
divMatch.appendChild(listaUNMatch);

btnMatch.addEventListener("click", function () {
  let ricerca = inputMatch.value;
  if (ricerca == "") {
    alert("Scrivi qualcosa");
    return;
  } else {
    searchAndDivide(ricerca)
  }
  inputSearch.value = ''
});

function searchAndDivide (ricerca){
  var match = []
  var unmatch = []
  movies.forEach(element => {
    if (element.Title.includes(ricerca)) {
      match.push(element.Title);
      var li = document.createElement('li');
      li.innerHTML = `${element.Title} è un match!`;
      listaMatch.appendChild(li);
    } else {
      unmatch.push(element.Title);
      var li = document.createElement('li');
      li.innerHTML = `${element.Title} non è un match!`;
      listaUNMatch.appendChild(li);
    }
  })
  return `Questi sono match: ${match} invece questi no: ${unmatch}`
}

//console.log(`Es. 18 - ${searchAndDivide('Avengers')}`);



/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro 
  e ritorna l'array "movies" 
  fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

function removeIndex(index) {
  delete movies[index];
  return movies;
}
removeIndex(3); //Lord of war
console.log(movies)
divArr.appendChild(document.createElement('li')).innerHTML = `Es. 19 - <b>In console</b>`;



// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

//const container = document.getElementById('container'); 
divDom.appendChild(document.createElement('li')).innerHTML = `Es. 20 - <b>Solo script</b>`;

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
divDom.appendChild(document.createElement('h3')).innerHTML = 'Es. 21'
const table = document.createElement('table');
divDom.appendChild(table)
const headerRow = document.createElement('tr');
const nameHeader = document.createElement('th');
nameHeader.textContent = 'Nome';
headerRow.appendChild(nameHeader);


const surnameHeader = document.createElement('th');
surnameHeader.textContent = 'Cognome';
headerRow.appendChild(surnameHeader);
table.appendChild(headerRow);

const firstDataRow = document.createElement('tr');
table.appendChild(firstDataRow);
const firstNameCell = document.createElement('td');
firstNameCell.textContent = 'Sara';
firstDataRow.appendChild(firstNameCell);


const surnameCell = document.createElement('td');
surnameCell.textContent = 'CB';
firstDataRow.appendChild(surnameCell);


table.style.border = 'solid 1px white';



const tdList = document.querySelectorAll('td'); //crea array con tutti eventuali td

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

function printTD() {
  const es22 = [];
  for (let i = 0; i < tdList.length; i++) {
    es22.push(tdList[i].textContent);
  }
  return es22;
}

console.log('Es. 22 - ' + printTD());
divDom.appendChild(document.createElement('li')).innerHTML = `Es. 22 - ${printTD()}`;


/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/


function turnRed (){
  let aS = document.querySelectorAll('a');
  aS.forEach(link => {
    link.style.backgroundColor = 'red';
  })
}

divDom.appendChild(document.createElement('li')).innerHTML = `Es. 23 - <b>Solo script</b>`;

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const myList = document.createElement('ul');
myList.id = 'myList';
const newLi = document.createElement('li');
newLi.innerHTML = 'Es 24 - New ul and li created!';
divDom.appendChild(myList);
myList.appendChild(newLi);


/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

function clearList() {
  myList.innerHTML = '';
};


//clearList();
divDom.appendChild(document.createElement('li')).innerHTML = `Es. 25 - <b>Solo script</b>`;


/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

(function testingTR(){
  const allTr = document.querySelectorAll('tr');
  allTr.forEach(tr => {
    tr.setAttribute('id', 'test')
  }
  )
})()

divDom.appendChild(document.createElement('li')).innerHTML = `Es. 26 - <b>Solo script</b>`;


// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

function halfTree(height) {
  let tree = '';
  for (let i = 1; i <= height; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += '*';
    }
    tree += row + '\n';
  }
  return tree;
}
function halfTree2(height) {
  let tree = '';
  for (let i = 1; i <= height; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += '*';
    }
    tree += row + '<br>';
  }
  return tree;
}

console.log(`Es. 27 \n${halfTree(4)}`)
divExtra.appendChild(document.createElement('p')).innerHTML = `Es. 27 <br> ${halfTree2(4)}`;


/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
function tree(height, blank) {
  let tree = '';
  let space = height - 1;
  let asterisks = 1;
  
  for (let i = 0; i < height; i++) {
    let row = '';
    for (let j = 0; j < space; j++) {
      row += ' ';
    }
    for (let k = 0; k < asterisks; k++) {
      row += '*';
    }
    tree += row + blank;
    space--;
    asterisks += 2;
  }
  return tree;
}



console.log(`Es. 28 \n${tree(5, '/n')}`)
const es28 = divExtra.appendChild(document.createElement('p'))
es28.innerHTML = `Es. 28 <br> ${tree(5, '<br>')}`;
es28.style.textAlign = 'center'



/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

const titEs29 = document.createElement('h3');
titEs29.innerHTML = 'Esercizio 29, è un numero primo?'
const inputPrime = document.createElement('input');
inputPrime.type = 'number';
inputPrime.placeholder = 'Choose a number';
const btnPrime = document.createElement('button');
btnPrime.id = 'btnSearch';
btnPrime.textContent = 'Verify';
const resultPrime = document.createElement('p');
resultPrime.id = 'result';

divExtra.appendChild(titEs29);
divExtra.appendChild(inputPrime);
divExtra.appendChild(btnPrime);
divExtra.appendChild(resultPrime);

btnPrime.addEventListener("click", function () {
  let numero = inputPrime.value;
  if (numero == "") {
    alert("Scrivi un numero!");
    return;
  } else {
    resultPrime.innerHTML = isItPrime(numero);
  }
  inputPrime.value = '';
});

function isItPrime(num) {
  if (num <= 1) {
    return `${num} non è un numero primo`;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return `${num} non è un numero primo`;
    }
  }
  return `${num} è un numero primo!`;
};

console.log(`Es. 29 - ${isItPrime(25)}`)
