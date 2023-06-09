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
    },
    {
        question: 'Where do flying lizards (Draco) live?',
        answers: [
            { text: 'Dessert', correct: false },
            { text: 'Ocean', correct: false },
            { text: 'Arctic', correct: false },
            { text: 'Rain Forest', correct: true },
        ]
    },
    {
        question: 'What animal can live anywhere?',
        answers: [
            { text: 'Cockroach', correct: false },
            { text: 'Tardigrade', correct: true },
            { text: 'Mouse', correct: false },
            { text: 'Bear', correct: false },
        ]
    },
    {
        question: 'What bird had the largest wingspan?',
        answers: [
            { text: 'Eagle', correct: false },
            { text: 'Hawk', correct: false },
            { text: 'Falcon', correct: false },
            { text: 'Albatross', correct: true },
        ]
    },

]

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const answerButtonWrong = document.getElementById("answer-button-wrong");
const timerEl = document.getElementById("countDown");
const scoreText = document.querySelector("#score");

let currentQuestionIndex = 0;
let score = 0;
function startQuiz() {

}
currentQuestionIndex = 0;
score = 0;

let timeLeft = 40;

function showQuestion() {
    //  resetState();
    let currentQuestion = questions[currentQuestionIndex]
    console.log(currentQuestion.question)
    let questionsNo = currentQuestionIndex + 1;
    console.log(questionsNo)
    questionElement.innerHTML = questionsNo + "." + currentQuestion.question;
    console.log(questionElement.innerHTML)
    answerButton.innerHTML = "";
    let position = 0

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");

        button.innerHTML = answer.text;
        button.classList.add("button");
        button.dataset.position = position
        answerButton.appendChild(button);

        if (answer.correct) {
            (button.dataset.correct = "true");
        }
        button.addEventListener("click", selectedAnswer);
        position++
    });

}
showQuestion();

function selectedAnswer(e) {
    const selectedBtn = e.target;
    let isCorrect = selectedBtn.dataset.correct === "true";
    if (questions[currentQuestionIndex].answers[+(e.target.dataset.position)].correct == true) {
        console.log(questions[currentQuestionIndex].answers[+(e.target.dataset.position)].correct)
        console.log("correct")
        selectedBtn.classList.add("correct");
        score++;
        console.log(score)
        scoreText.innerHTML = score;

    } else {
        console.log(questions[currentQuestionIndex].answers[+(e.target.dataset.position)].correct)
        console.log(console.log(questions[currentQuestionIndex].answers[+(e.target.dataset.position)]))
        selectedBtn.classList.add("wrong");
        timeLeft = timeLeft - 10;
    }

    setTimeout(function () {
        if (currentQuestionIndex === questions.length - 1) {
            quizEnd();
        }
        else {
            currentQuestionIndex++
            showQuestion()
        }
    }, 2000)
}

//Timer countdown 
let timerEL = document.getElementById('countdown');//this refers to the timer (NEEDS to be added to the HTML)

let msgInterval = function () {
    console.log(timeLeft)
    timeLeft--;
    if (timeLeft > 1) {
        timerEL.textContent = timeLeft + ' seconds remaining'
    }
    else if (timeLeft === 1) {
        timerEL.textContent = timeLeft + ' second remaining'
    } else {
        timerEL.textContent = 'GAME OVER'
        quizEnd();
    }
};

function quizEnd() {
    clearInterval(countdown);
    window.location.href = "form.html";

}

function countdown() {
    setInterval(msgInterval, 1000);

}

if (timeLeft <= 0) {
    clearInterval(countdown)
}

countdown()
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButton.removeChild(answerButtons.firstChild);
    }
}
