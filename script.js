const questions = [
    {
        question: "What Is The National Animal Of Scotland?",
        answers: [
            { text: "Scottish Cow", correct: false },
            { text: "Unicorn", correct: true },
            { text: "Goat", correct: false },
            { text: "Magpie", correct: false },
        ]
    },
    {
        question: 'What animal can not stick out their tongue?',
        answers: [
            { text: 'Owl', correct: false },
            { text: 'Zebra', correct: false },
            { text: 'Crocodiles', correct: true },
            { text: 'Otter', correct: false },
        ]
    },
    {
        question: 'What Is Fastest Land Animal?',
        answers: [
            { text: 'Springbok', correct: false },
            { text: 'Sloth', correct: false },
            { text: 'Cheetah', correct: true },
            { text: 'Ostrich', correct: false },
        ]
    }
]

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const answerButtonWrong = document.getElementById("answer-button-wrong");
const timerEl = document.getElementById("countdown");
const scoreText = document.querySelector("score");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() { }
currentQuestionIndex = 0;
score = 0;
showQuestion();

function showQuestion() {
    resetState();
    let currentQuestion = question[currentQuestionIndex]
    let questionsNo = currentQuestionIndex + 1;
    questionElement.innerHTML.questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            (button.dataset.correct);
        }
        button.addEventListener("click", selectedAnswer);
    });
}
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButton.removeChild(answerButtons.firstChild);
    }
}
function selectedAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("wrong");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disable = true;
    });
    nextButton.style.display = "block";
}
function showScore() {
    resetState();
    questionElement.innerHTML = 'you scored ${score} out of ${questions.length}!';
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = block;
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})
//Timer countdown 
const timerEL = document.getElementById('countdown');//this refers to the timer (NEEDS to be added to the HTML)

function countdown() {
    timerEL = 30
}
let msgInterval = setInterval('30')
if (timeLeft > 1) {
    timerEL.textContent = timeLeft + 'seconds remaining' > timeLeft
} else {
}
if (timeLeft === 1) {
    timerEL.textContent = timeLeft + 'second remaining' > timeLeft
} else {
    timerEL.textContent = 'GAME OVER'
    clearInterval(timeInterval)
    startQuiz();
}
