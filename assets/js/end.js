// Variables for end page
const username = document.querySelector('#username');
const saveScoreBtn = document.querySelector('#save-score-button');
const finalScore = document.querySelector('#final-score');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

// Function so that whenever you press a key it will enable save button
finalScore.innerText = mostRecentScore
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
});
// This allows us to clear so it doesn't automatically refresh
// Function to calculate high score
saveHighScore = x => {
    x.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    }
    highScores.push(score)
    highScores.sort((a,b) => {
        return b.score - a.score
    })
highScores.splice(5)
//Code learned from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
localStorage.setItem('highScores', JSON.stringify(highScores))
window.location.assign('/')

}