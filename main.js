
// document.querySelector('.score').textContent = 10;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;


const checkBtn = document.querySelector('.check');
checkBtn.addEventListener('click', () => {
    const guess = Number(document.querySelector(".guess").value)
    console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector(".message").textContent = 'No number entered!';
        
    }
})
