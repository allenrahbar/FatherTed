// Variables for end page
const username = document.querySelector('#username');
const saveScoreBtn = document.querySelector('#save-score-button');
const finalScore = document.querySelector('#final-score');
const mostRecentScore = document.querySelector('#most-recent-score');

const highScores = JSON.parse(localStorage.getItem('highScores')) || []

const MAX_HIGH_SCORES = 5

// Function so that whenever you press a key it will enable save button
finalScore.innerText = mostRecentScore
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})
// This allows us to clear so it doesn't automatically refresh
saveHighScore = x => {
    x.preventDefault()

    const score = {
        score: mostRecentScore
    }
}