// declaring variables for JS 
const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progress-text');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progress-bar-full');

let currentQuestion = {};
let acceptingAnswers = true ;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// Questions for the quiz
let questions = [
    { question: 'When was ScreenCloud founded?',
        choice1: '2014',
        choice2: '2015',
        choice3: '2016',
        choice4: '2017',
        answer: 4,
    }
    ,{ question: 'How many customers do we have?',
    choice1: '1000',
    choice2: '8500',
    choice3: '3000',
    choice4: '5000',
    answer: 2,
},
{ question: 'How many employees do we have (approximately)?',
choice1: '110',
choice2: '90',
choice3: '70',
choice4: '60',
answer: 1,
} 
,{ question: 'What is Ciarans favourite football team?',
choice1: 'Man Utd',
choice2: 'Tottenham',
choice3: 'Liverpool',
choice4: 'Arsenal',
answer: 4,
} ,
{ question: 'What movie did Santinos parents name him after?',
choice1: 'Goodfellas',
choice2: 'Casino',
choice3: 'The Godfather',
choice4: 'Donnie Brasco',
answer: 3,
} ,
{ question: 'Where does Amber live?',
choice1: 'Compton',
choice2: 'Stockton',
choice3: 'Manhattan',
choice4: 'Hollywood',
answer: 2,
} 
,{ question: 'What does Fiffi do in her spare time?',
choice1: 'Music',
choice2: 'Paint',
choice3: 'Workout',
choice4: 'Rap',
answer: 1,
} 
,{ question: 'What kind of Funko POPs does Jamie collect?',
choice1: 'Marvel',
choice2: 'Star Wars',
choice3: 'Horror',
choice4: 'Disney',
answer: 3,
} 
,{ question: 'How many languages does Allen speak?',
choice1: '2',
choice2: '4',
choice3: '1',
choice4: '3',
answer: 4,
} 
,{ question: 'Where did ScreenCloud travel this year ?',
choice1: 'Thailand',
choice2: 'Australia',
choice3: 'Turkey',
choice4: 'Greece',
answer: 4,
}
]
// Total number of score you can get plus total number of questions
const SCORE_POINTS = 100;
const MAX_QUESTIONS = 10;


// function to start game
startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
};

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('https://github.com/allenrahbar/ScreenCloudQuiz/blob/main/end.html')
    };

    // function to calculate the progress in the progress bar
    questionCounter++ ;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;

    // function to see which question you are currently on and to know which questions to ask
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    // function to know which answer is being clicked on and if the answer is correct
    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    })
    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true ;
}

// function to show if the answer is true or false and to show the correct color from the css
choices.forEach(choice => {
    choice.addEventListener('click', x => {
        if(!acceptingAnswers) return;
        acceptingAnswers = false;
        const selectedChoice = x.target;
        const selectedAnswer = selectedChoice.dataset ['number'];

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
        // function to calculate score

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
        }
        selectedChoice.parentElement.classList.add(classToApply)
        // when you click right or wrong gives time to show answer and brings up new question
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        },1000)
    })
})

incrementScore = num => {
    score += num;
    scoreText.innerText = score
}

startGame()
