// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector(".guess").value);   

const func = function () {
    console.log('You just clicked CHECK!');
}

const checkBtn = document.querySelector('.check');
checkBtn.addEventListener('click', () => {
    console.log(document.querySelector(".guess").value);

    console.log(document.querySelector('.message').textContent = 'correct number!');  
    
    console.log('Let"s go again');
})
