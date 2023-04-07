const StartQuiz =document.getElementById('start quiz button')
const QuizContainerElement =document.getElementById ('QuiContainer')

StartQuizButton.addEventListener('click', Start-Quiz-Button)

// start button and hide button feature are not working right now. 
function StartQuiz(){
    console.log('Started')
    StartQuizButton.classList.add('hide')
    optionsButtonCSSElement.classList.remove('hide')
    setNextQuestion()

}
function setNextQuestion(){

}

function selectAnswer(){

}

const questions = [
{
    question: "Commonly used data types DO NOT Include:",
    answers: [
{text: 2.'Boolean', correct: true},
{text: 1. String, correct: false},  
    ]   
}
]
function timer(){

}


