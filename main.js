const secretNumber = Math.trunc(Math.random() * 20) + 1;
let number = document.querySelector(".number");

 let score = 5;


document.querySelector(".check").addEventListener(
  "click", () => {
    const guess = Number(document.querySelector(".guess").value);
   
    //! when there is no input
     if (!guess) {
       document.querySelector(".message").textContent = "No number entered!";

      //! When player wins or the guessed number is equals to the secret number
     } else if (guess === secretNumber) {
       document.querySelector(".message").textContent = "That's Correct!";
       number.textContent = secretNumber;
       document.querySelector('body').style.background = '#60b347';
       number.style.width = "30rem";
       number.style.color = "#60b347";
       number.style.backgroundColor = "#fff";

      // ! when the guessed number is higher than the secret number
     } else if (guess > secretNumber) {
       if (score > 1) {
         document.querySelector(".message").textContent = "Number too high!";
          document.querySelector("body").style.backgroundColor = "red";
         number.style.width = "30rem";
         number.style.backgroundColor = "#350101";

         score--;
         document.querySelector(".score").textContent = score;
       } else {
         document.querySelector(".message").textContent = "Game Over!";
         document.querySelector(".score").textContent = 0; 
       }
       
      //! when the guessed number is lower than the secret number
     } else if (guess < secretNumber) {
       if (score > 1) {
         document.querySelector(".message").textContent = "Number too low!";  
         document.querySelector("body").style.backgroundColor = "#350101";
         number.style.width = "30rem";
         number.style.backgroundColor = "red";

         score--;
         document.querySelector(".score").textContent = score;
       } else {
         document.querySelector(".message").textContent = "Game Over!";
         document.querySelector(".score").textContent = 0;
       }
       }
  
  } 
)

let againBtn = document.querySelector(".again").addEventListener(
  "click", () => {
    score = 5;
    
  }
)

 