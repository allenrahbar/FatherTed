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
    { question: 'Father Ted was set on Craggy Island, which was supposedly off the coast of where?',
        choice1: 'England',
        choice2: 'Ireland',
        choice3: 'Wales',
        choice4: 'Scotland',
        answer: 2,
    }
    ,{ question: "Father Ted's housekeeper is called?",
    choice1: 'Ms Dunne',
    choice2: 'Ms Larkin',
    choice3: 'Ms Farrell',
    choice4: 'Ms Doyle',
    answer: 4,
},
{ question: 'How was Ted wounded at Funland while Dougal was speaking to a camera crew ?',
choice1: 'Fell off a roundabout',
choice2: 'Hit by a fortune teller',
choice3: 'Bit by a mutant manrabbit, head of a rabbit, body of rabbit',
choice4: 'Fell off a bench',
answer: 4,
} 
,{ question: 'Father Stone had to go to hospital when he was struck by lightning, which other character was struck by lightning also (not shown on camera just said)?',
choice1: 'Jack',
choice2: 'Dougal',
choice3: 'Ted',
choice4: 'Bishop Brennan',
answer: 2,
} ,
{ question: 'A Cuban Priest visits the parish and when he leaves he gives Dougal',
choice1: 'A balloon',
choice2: 'A pencil which Dougal is delighted with',
choice3: 'A video recorder',
choice4: 'Cuban cigar with which Dougal looks hilarious',
answer: 3,
} ,
{ question: "Ted, Dougal and Jack dress as Elvis for the talent competition what does Ted's enemies father Dick Byrne and friends dress as",
choice1: "The supreme's",
choice2: "Destiny's child",
choice3: 'Three Musketeers',
choice4: "Diana's",
answer: 1,
} 
,{ question: 'Ted gets his book signed by an author who later comes to live on Craggy Island but she gets his name wrong. Who does she sign his book to....',
choice1: 'Father Crilly',
choice2: 'Father Craggy',
choice3: 'Father Curly',
choice4: 'Father Corly',
answer: 3,
} 
,{ question: 'The nuns are angry when Ted gives a short mass what do they threaten to do',
choice1: 'Go to another priest',
choice2: 'Tell bishop Brennan',
choice3: 'Come for lent and torture them',
choice4: 'They are happy with the short mass',
answer: 1,
} 
,{ question: "What brought on death like symptoms on Jack when he drank it ?",
choice1: 'Floor Polish',
choice2: 'Window lean',
choice3: 'Furniture polish',
choice4: 'Petrol',
answer: 1,

} 
,{ question: 'Above all drinks what should you not give father Jack',
choice1: 'Tea',
choice2: 'Water',
choice3: 'Orange juice',
choice4: 'Milk',
answer: 2,
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
        return window.location.assign('https://allenrahbar.github.io/FatherTed/end.html')
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
