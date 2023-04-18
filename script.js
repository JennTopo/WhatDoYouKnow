console.log("helloWorld");

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
    }
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

let timeLeft = 60;

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
// function container()
//     container = (currentQuestionIndex,buttons)
// container.addEventListener("click", buttons);

showQuestion();




//function resetState() {
//     nextButton.style.display = "none";
//     while (answerButtons.firstChild) {
//         answerButton.removeChild(answerButtons.firstChild);
//     }
//}
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
        // debugger;
    } else {
        console.log(questions[currentQuestionIndex].answers[+(e.target.dataset.position)].correct)
        console.log(console.log(questions[currentQuestionIndex].answers[+(e.target.dataset.position)]))
        selectedBtn.classList.add("wrong");
        timeLeft-10;
    }
// debugger;
    setTimeout(function(){
        currentQuestionIndex++
        showQuestion()
    },2000)
  
    //     nextButton.style.display = "block";
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
        clearInterval(countdown);
        clearInterval("answerButton");
        startQuiz();
    }
}

function countdown() {
    setInterval(msgInterval, 1000);
   
}

if(timeLeft <= 0){
    clearInterval(countdown)
}

countdown()

