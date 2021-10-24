const highScoresList = document.querySelector('#high-scores-list');
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse;
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

highScoresList.innerHTML = 
highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;

}).join('')
