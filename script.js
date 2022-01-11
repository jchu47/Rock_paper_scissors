let computerRandom = Math.floor(Math.random() * 3);
let computerPlay;
if (computerRandom == 0) {
    computerPlay = 'rock'
} else if (computerRandom == 1) {
    computerPlay = 'paper'
} else {
    computerPlay = 'scissors'
}

let playerSelection = window.prompt('Choose your weapon:').toLowerCase()

let userScore = 0;
let computerScore = 0;


function playGame(playerSelection, computerPlay){
    if (playerSelection == computerPlay) {
        return 'Tie.. should\'ve picked rock.'
    } else if (playerSelection == 'rock' && computerPlay == 'paper') { 
        return 'You lose to the weak paper'
    } else if (playerSelection == 'rock' && computerPlay == 'scissors') {
        return 'You win! Rock is superior to every object'
    } else if (playerSelection == 'paper' && computerPlay == 'scissors') {
        return 'You lose. Definitely should\'ve went with rock'
    } else if (playerSelection == 'paper' && computerPlay == 'rock') {
        return 'You win, but rock would have been more dramatic.'
    } else if (playerSelection == 'scissors' && computerPlay == 'rock'){
        return 'You lose. Obviouly rock is the strongest'
    } else if (playerSelection == 'scissors' && computerPlay == 'paper') {
        return 'You win, you\'re just lucky you didn\'t face a rock.'
    }
};

console.log(`computer choice: ${computerPlay}`)
console.log(playGame(playerSelection, computerPlay))