
// document.querySelector('.score').textContent = 10;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber    ;

let score = 20;
let highscore = 0;

const checkBtn = document.querySelector('.check');
checkBtn.addEventListener('click', () => {
    const guess = Number(document.querySelector(".guess").value)
    console.log(guess, typeof guess);

    if (!guess) {
      document.querySelector(".message").textContent = "No number entered!";
    } else if (guess < secretNumber) {
        document.querySelector(".message").textContent = "Too low!";
         score --; 
        document.querySelector(".score").textContent = score;
    } else if (guess > secretNumber) {
        document.querySelector(".message").textContent = "Too high!";
        score --;
        document.querySelector(".score").textContent = score;
    }
    else if (guess !== secretNumber) {
      document.querySelector(
        ".message"
      ).textContent = `Wrong Number! Try again...`;
    } else if (guess === secretNumber) {
        document.querySelector(".message").textContent = "Correct!";
        score++;
        document.querySelector(".score").textContent = score;  
        highscore = ;
        document.querySelector(".highscore").textContent = highscore;
    
    }

})

