var scorecards = document.querySelectorAll('.score-card')
var resetButton = document.querySelector('.button-reset')

resetButton.addEventListener('click', resetScore)

scorecards.forEach(element => {
    let buttonsArr = Array.from(element.getElementsByClassName('button-increment'));
    let scoreElement = element.getElementsByClassName('score').item(0);
    
    if (scoreElement == null) {
        console.warn('Cannot locate a score element!')
    }

    buttonsArr.forEach((element, idx) => {
        element.textContent = '+' + (idx + 1);
        element.addEventListener('click', () => {
            clickHandler(idx + 1, scoreElement);
        })
    });

});


function clickHandler(amount, scoreEl) {
    if (scoreEl == null) {
        console.warn('score element is null');
        return
    }

    let currentScore = Number(scoreEl.textContent);
    scoreEl.textContent = currentScore + amount;
    
}

function resetScore() {
    Array.from(document.getElementsByClassName('score')).forEach(scoreEl => {
        scoreEl.textContent = 0;
    })
}