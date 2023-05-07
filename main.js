const roundedNumber = () => {
     Math.trunc(Math.random() * 20) + 1;
}

let secretNumber = roundedNumber();
let number = document.querySelector(".number");

let score = 20;
let highscore = 0;

/** function to call instead of repeating document.querySelector(".message").textContent = "No number entered!"; 
 * when no number is entered... 
 *  */   
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
}

const bgColor = function (color) {
   document.querySelector("body").style.background = color;
}


document.querySelector(".check").addEventListener("click", () => {
  let guess = Number(document.querySelector(".guess").value);

  //! when there is no input
  if (!guess) {
    displayMessage("⛔No number entered...❗" );

    //! When player wins or the guess number is equals to the secret number
  } else if (guess === secretNumber) {
    displayMessage("🎈wow! That's correct!🙌 ");
    number.textContent = secretNumber;

    bgColor("#60b347");
    number.style.width = "30rem";
    number.style.color = "#60b347";
    number.style.backgroundColor = "#fff";

    //  if the score is greater than highscore, then the current score should be the new highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // // //! REFACTORING------------ when guess is different from secret number
   
    // ! When the guess is wrong...
  } else if (guess !== secretNumber) {
      if (score > 1) { 
        document.querySelector(".message").textContent =
          guess > secretNumber ? "Number too high!...⚡" : "Number too low!...🔅";
        document.querySelector("body").style.backgroundColor =
          guess > secretNumber ? "red" : "#350101";
        number.style.width = "30rem";

        score--;
        document.querySelector(".score").textContent = score;
      } else {
        displayMessage("Game Over...😞")
        document.querySelector(".score").textContent = 0;
      }
   }
       // ! when the guessed number is higher than the secret number
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Number too high!";
  //     document.querySelector("body").style.backgroundColor = "red";
  //     number.style.width = "30rem";
  //     number.style.backgroundColor = "#350101";

  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "Game Over!";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
  // // ! when the guessed number is lower than the secret number
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Number too low!";
  //     document.querySelector("body").style.backgroundColor = "#350101";
  //     number.style.width = "30rem";
  //     number.style.backgroundColor = "red";

  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "Game Over!";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

let againBtn = document
  .querySelector(".again")
  .addEventListener("click", () => {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage("Start Guessing...😇")
    document.querySelector(".score").textContent = score;
    number.textContent = "?";
    document.querySelector(".guess").value = "";
    bgColor("#222");
    number.style.width = "15rem";
    number.style.backgroundColor = "#fff";
    number.style.color = "#000";
  });  


