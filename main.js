// import randomWords from "random-words";
const randomWords = require('random-words');
let word = document.querySelector("#word");
const userInput = document.querySelector("#userInput");
const overText = document.querySelector("#overLbl");
const timeLeftLbl = document.querySelector("#timeLeft");
const scoreLbl = document.querySelector("#score");
const resetBtn = document.querySelector("#resetBtn");
let score = 0;
let timer = 5;
const app = () => {
  let newGameInterval;
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
      overText.style.display = "block"
      if (newGameInterval) clearInterval(newGameInterval);
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
    if (timer === 0) {
      resetTimer();
      score = 0;
      scoreLbl.textContent = score;
      timeLeftLbl.textContent = timer;
      userInput.disabled = false;
      overText.style.display = "none"
      userInput.focus();
      newGameInterval = setInterval(updateTimer, 1000);
    } else {
      console.log('game is on')
    }

  };

  resetBtn.addEventListener("click", function (event) {
    startGame();
  });
};

app();
