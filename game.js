const screen = document.querySelector(".screen");
const answer = document.querySelector(".answer");
const mark = document.querySelector(".mark");
const btn = document.querySelector(".btn");
const cancel = document.querySelector(".cancel");
const userAns = document.querySelector(".user-answer");
const computerAns = document.querySelector(".computer-answer");
const user = screen.value.toLowerCase();
const attemptShow = document.querySelector(".attempt");

const gamesPlayed = document.querySelector(".played-games");
const gamesPlayedComputer = document.querySelector(".played-games-computer");
const userWinAns = document.querySelector(".player-wins");
const userDrawAns = document.querySelector(".player-draws");
const userLooseAns = document.querySelector(".player-looses");
const userScore = document.querySelector(".player-score");

const computerWinAns = document.querySelector(".computer-wins");
const computerDrawAns = document.querySelector(".computer-draws");
const computerLooseAns = document.querySelector(".computer-looses");
const computerScore = document.querySelector(".computer-score");

let counter = 0;
let attempt = 0;
let playerWinCounter = 0;
let playerDrawCounter = 0;
let playerLooseCounter = 0;
let playerScoreCounter = 0;

let computerWinCounter = 0;
let computerDrawCounter = 0;
let computerLooseCounter = 0;
let computerScoreCounter = 0;

const arry = ['r', 'p', 's'];

function play() {

    const user = screen.value.toLowerCase();
    let random = Math.floor(Math.random() * arry.length);

    if (user == '') {
        alert("Enter A letter to Play with the Computer!");
    } else if (!(user == 'r' || user == 'p' || user == 's')) {
        alert("Notice!\nEnter letter either r for Rock or p for Paper or s for Scissors as your Choice\nThank You! ");
    } else {
        const computer = arry[random];

        userAns.innerHTML = user;
        computerAns.innerHTML = computer;

        if (user == computer) {
            playerDrawCounter++;
            computerDrawCounter++;
            answer.innerHTML = "It's A Tie";
            userDrawAns.innerHTML = playerDrawCounter;
            computerDrawAns.innerHTML = computerDrawCounter;
        }

        if (winner(user, computer)) {
            counter++;
            playerScoreCounter++;
            playerWinCounter++;
            computerScoreCounter--;
            computerLooseCounter++;
            userScore.innerHTML = playerScoreCounter;
            computerScore.innerHTML = computerScoreCounter;
            computerLooseAns.innerHTML = computerLooseCounter;
            userWinAns.innerHTML = playerWinCounter;
            answer.innerHTML = "You Win!";
            mark.innerHTML = counter;
            if (counter > 0) {
                mark.style.color = "blue";
            }
        }

        if (winner(computer, user)) {
            counter--;
            playerScoreCounter--;
            computerScoreCounter++;
            playerLooseCounter++;
            computerWinCounter++;
            userScore.innerHTML = playerScoreCounter;
            computerScore.innerHTML = computerScoreCounter;
            computerWinAns.innerHTML = computerWinCounter;
            userLooseAns.innerHTML = playerLooseCounter;
            answer.innerHTML = "You Loose!";
            mark.innerHTML = counter;
            if (counter < 0) {
                mark.style.color = "red";
            }
        }

        attempt++;
        attemptShow.innerHTML = attempt;
        gamesPlayed.innerHTML = attempt;
        gamesPlayedComputer.innerHTML = attempt;
    }

}


function winner(player, opponent) {
    if ((player == 'r' && opponent == 's') || (player == 'p' && opponent == 'r') ||
        (player == 's' && opponent == 'p')) {
        return true;
    }
}

btn.addEventListener("click", function () {
    play();
    //show();
    screen.value = "";
});
