const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = number;

document.querySelector(".check").addEventListener(
  "click", () => {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);

// code here prints message "No number entered" ~
    if (!guess) {
      document.querySelector(".message").textContent = "No number entered!"
    }
  }
)