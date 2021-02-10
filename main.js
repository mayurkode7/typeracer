// import randomWords from "random-words";
const randomWords = require('random-words');
let word = document.querySelector("#word");
const userInput = document.querySelector("#userInput");
const timeLeftLbl = document.querySelector("#timeLeft");
const scoreLbl = document.querySelector("#score");
const resetBtn = document.querySelector("#resetBtn");
let score = 0;
let timer = 5;
const app = () => {
  let newGameInteval;
  userInput.focus();
  scoreLbl.textContent = score;

  const resetTimer = () => {
    timer = 5;
  };

  const stopInterval = () => {
    timerInterval.clear();
  };

  const updateTimer = () => {
    timer--;
    timeLeftLbl.textContent = timer;
    if (timer == 0) {
      clearInterval(timerInterval);
      if (newGameInteval) clearInterval(newGameInteval);
      userInput.disabled = true;
    }
  };

  let timerInterval = setInterval(updateTimer, 1000);

  const updateScore = () => {
    score++;
    scoreLbl.textContent = score;
  };
  const clear = () => {
    userInput.value = "";
  };
  const newWord = () => {
    word.textContent = randomWords();
  };

  userInput.addEventListener("keyup", function () {
    if (this.value == word.textContent) {
      updateScore();
      clear();
      newWord();
      resetTimer();
    }
  });

  const startGame = () => {
    resetTimer();
    score = 0;
    scoreLbl.textContent = score;
    timeLeftLbl.textContent = timer;
    userInput.disabled = false;
    userInput.focus();
    newGameInteval = setInterval(updateTimer, 1000);
  };

  resetBtn.addEventListener("click", function () {
    startGame();
  });
};

app();
