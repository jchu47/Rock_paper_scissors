// Create Random computer choice
function getComputerSelection (){
    let computerRandom = Math.floor(Math.random() * 3);
    if (computerRandom == 0) {
        return  'rock';
    } else if (computerRandom == 1) {
        return 'paper';
    } else {
        return 'scissors';
}
};


// Create Selection & Selection Events
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');


// Create scoreboard
let userScore = 0;
let compScore = 0;
const user = document.getElementById('user-score');
const comp = document.getElementById('comp-score');
user.textContent = 0;
comp.textContent = 0;



// Create images under the winner
const userCheck = document.getElementById('user-check');
const compCheck = document.getElementById('comp-check');
userCheck.style.visibility = 'hidden';
compCheck.style.visibility = 'hidden';

const output = document.getElementById('output-statement');

// Update winner statement
function resetScore(){
    setTimeout(()=> {
        userScore = 0;
        compScore = 0;
        user.textContent = 0;
        comp.textContent = 0;}, 2500)
};

const winner = document.getElementById('winner-statement');
function decideWinner(user, comp){
    if (compScore == 5){
        winner.textContent = 'The computer wins :(';
        resetScore();
    } else if (userScore == 5){
        winner.textContent = 'You beat that stupid computer! :)';
        resetScore();
    } else {
        winner.textContent = 'It\'s anyone\'s game!'
    }
};




function win() {
    userScore++;
    user.textContent = userScore;
    userCheck.src = '/images/greencheck.png';
    userCheck.style.visibility = 'visible';
    compCheck.style.visibility = 'hidden';
    output.textContent = 'You Win!'
};
function lose() {
    compScore++;
    comp.textContent = compScore;
    compCheck.src = '/images/greencheck.png';
    compCheck.style.visibility = 'visible';
    userCheck.style.visibility = 'hidden';
    output.textContent = 'You lose..'
};
function tie() {
    compCheck.style.visibility = 'hidden';
    userCheck.style.visibility = 'hidden';
    output.textContent = 'It\'s a draw.'

};



function game(userSelection) {
    const computerSelection = getComputerSelection();
    switch (userSelection + computerSelection) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win();
            break;
        case 'rockpaper':
        case 'scissorsrock':
        case 'paperscissors':
            lose();
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            tie();
            break;
    }
    decideWinner(userScore, compScore);
};

function play(userSelection) {
    rock.addEventListener('click', function(){
        game('rock');
    });
    paper.addEventListener('click', function(){
        game('paper');
    });
    scissors.addEventListener('click', function(){
        game('scissors');
    });
};

play();




