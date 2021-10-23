// declaring variables for JS 
const questions = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progress-text');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progress-bar-full');

let currentQuestion = {};
let acceptingAnswers = true ;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    { question: 'When was ScreenCloud founded?',
        choice1: '2014',
        choice2: '2015',
        choice3: '2016',
        choice4: '2017',
    }
]



