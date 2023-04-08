const StartQuiz= document.getElementById('start quiz button')
const QuizContainerElement= document.getElementById ('QuizContainer')
const questionElement= document.getElementById ('question')
const answerButtonsElement= document.getElementById('answerButton')
StartQuizButton.addEventListener('click', Start-Quiz-Button)

let shuffledQuestions, currentQuestionIndex

// start button and hide button feature are not working right now. 
function StartQuiz(){
    console.log('Started')
    StartQuizButton.classList.add('hide')
    shuffledQuestions = questions.sort(()=> Math.random() -.5)
    currentQuestionIndex = 0
    optionsButtonCSSElement.classList.remove('hide')
    setNextQuestion()

setNextQuestion()
}
function setNextQuestion(){
showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion()
questionElement.innerText = question.question

function selectAnswer(){

}

const questions = [
{
    question: "Commonly used data types DO NOT Include?",
    answers: [
{text: 2.'Boolean', correct: true},
{text: 1. String, correct: false},  
    ]   
}]
function timer(){

}


