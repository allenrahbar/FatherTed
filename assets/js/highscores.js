const highScoresList = document.querySelector('#high-scores-list')
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
const highScore = JSON.parse(localStorage.getItem('highScores')) || []
