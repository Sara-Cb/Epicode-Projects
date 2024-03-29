/*
// RIFERIMENTI PLAYER
const tracklistRef = document.getElementById("tracklist");
const playerSong = document.getElementById("playerSong");
const playerArtist = document.getElementById("playerArtist");
const songTime = document.getElementById("songTime");
const timeRange = document.getElementById("timeRange");
const playerImg = document.getElementById("playerImg");
const playButton = document.getElementById("playbutton");
const btnNext = document.getElementById("trackNext");
const btnBack = document.getElementById("trackBack");
const iconsRowRef = document.getElementById("iconsRow");
const indiciRowRef = document.getElementById("indici");
let currentTrack;
const volumeControl = document.getElementById("volume");
let audio = document.getElementById("audioReference");

//INIZIO FUNZIONI PLAYER

//play top
const playTop = function () {
  if (albumId) {
    document.getElementById("0").click();
  }
};

//next prev
btnBack.addEventListener("click", function () {
  if (currentTrack != 0) {
    let backId = currentTrack - 1;
    console.log(currentTrack);
    let divBack = document.getElementById(backId);
    console.log(divBack);
    divBack.click();
  } else {
    divCur = document.getElementById(currentTrack);
    divCur.click();
  }
});

btnNext.addEventListener("click", function () {
  if (currentTrack != trackArray.length - 1) {
    let nextId = currentTrack + 1;
    console.log(currentTrack);
    let divNext = document.getElementById(nextId);
    console.log(divNext);
    divNext.click();
  } else {
    divCur = document.getElementById("0");
    divCur.click();
  }
});
timeRange.addEventListener("click", function (event) {
  const pos = (event.pageX - timeRange.offsetLeft) / timeRange.offsetWidth;
  audio.currentTime = pos * audio.duration;
});

playButton.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

volumeControl.addEventListener("input", function () {
  audio.volume = volumeControl.value / 10;
});

function playFunction(url, title, artist, cover, duration, id) {
  audio.src = url;
  currentTrack = id;
  playerSong.textContent = title;
  playerArtist.textContent = artist;
  playerImg.setAttribute("src", cover);

  audio.addEventListener("loadedmetadata", function () {
    songTime.children[0].textContent = formatTime(0);
    songTime.children[2].textContent = formatTime(Math.round(duration));

    audio.play();
  });

  audio.addEventListener("timeupdate", function () {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    songTime.children[0].textContent = formatTime(Math.round(currentTime));
    const percentage = (currentTime / duration) * 100;
    timeRange.style.backgroundImage = `linear-gradient(to right, #ffffff ${percentage}%, #808080 ${percentage}%)`;
    timeRange.value = percentage;
  });
}

const formatTime = function (time) {
  minuti = Math.round(time / 60);
  secondi = time % 60;
  if (secondi < 10) {
    secondi = "0" + secondi;
  }
  let correctTime = `${minuti}:${secondi}`;
  console.log(correctTime);
  return correctTime;
};

//FINE FUNZIONI PLAYER 

*/

/* 

//FUNZIONE FETCH PRINCIPALE 
const getData = async function (_content, _array) {
  try {
    let response = await fetch(API_URL + _content);
    if (response.ok) {
      data = await response.json();
      console.log(data);
      _array.push(data);
    } else {
      return new Error("Error while loading data.");
    }
  } catch (error) {
    console.log(error);
  }
}; 

*/

/*
//FUNZIONE RIEMPIMENTO NAVBAR
let printMore = async function () {
  await getData("album/316555317", cardsMore);
  await getData("album/405622007", cardsMore);
  await getData("album/288437072", cardsMore);
  await getData("album/205447462,", cardsMore);
  await getData("album/361734707", cardsMore);
  await getData("album/137556512", cardsMore);
  await getData("album/119606", cardsMore);
  await getData("album/15483710", cardsMore);
  await getData("album/314664567", cardsMore);
  let ulRef = document.getElementById("myUl");
  for (let i = cardsMore.length - 1; i > -1; i--) {
    ulRef.innerHTML += `<a class="my-1" href="albums.html?id=${cardsMore[i].id}"> <li><p class="card-title">${cardsMore[i].title}</p></li> </a> `;
  }
};
*/
/*

//LIKE FUNCTION
const hearts = document.getElementsByClassName("like");
for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener("click", function (e) {
    e.target.classList.toggle("bi-heart");
    e.target.classList.toggle("bi-heart-fill");
  });
}
*/
let allCards = document.getElementsByClassName("card");
let mainContainer = document.getElementsByClassName;

const makeItColored = function () {
  titolo.addEventListener("click", function () {
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    titolo.style.color = randomColor;
  });
};
makeItColored();
