console.log("welcome to spotify");
// initiliste the variable
let songindex = 0;
var audioelement = new Audio("1.mp3");

// const audioelement = document.getElementById("1.mp3");

let masterplay = document.getElementById("masterplay");
let myprogressbar = document.getElementById("myprogressbar");
let songs = [
  {
    songname: "salem-e-ishq",
    filePath: "song/1.mp3",
    coverPath: "cover/1.jpg",
  },
  {
    songname: "salem-e-ishq",
    filePath: "song/1.mp3",
    coverPath: "cover/1.jpg",
  },
  {
    songname: "salem-e-ishq",
    filePath: "song/1.mp3",
    coverPath: "cover/1.jpg",
  },
  {
    songname: "salem-e-ishq",
    filePath: "song/1.mp3",
    coverPath: "cover/1.jpg",
  },
  {
    songname: "salem-e-ishq",
    filePath: "song/1.mp3",
    coverPath: "cover/1.jpg",
  },
  {
    songname: "salem-e-ishq",
    filePath: "song/1.mp3",
    coverPath: "cover/1.jpg",
  },
];

// audioelement.play()

// handle play / pause click
masterplay.addEventListener("click", () => {
  if ((audioelement.paused, audioelement.currentTime <= 0)) {
    audioelement.play();
  } else {
    audioelement.paused();
  }
});
// listen to event

function playpause() {
  if ((audioelement.paused, audioelement.currentTime <= 0)) {
    audioelement.play();
    masterplay.classList.replace(
      "fa-solid fa-3x fa-circle-play",
      "fa-solid fa-3x fa-circle-pause"
    );
  } else {
    audioelement.pause();
  }
}
// audioelement.play();

// audioelement.paused()

document.addEventListener("timeupdate", () => {
  console.log("timeupdate");
  // update seekbar
});
