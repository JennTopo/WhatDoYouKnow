// Need to set up some constants so that we can 
// easily reference and code the JAva Script.
const startButton = document.getElementById('startQuizButton')
const StartQuiz= document.getElementById('start quiz button') //const QuizContainerElement= document.getElementById ('QuizContainer')
const addButton= document.getElementById('add quiz button') //here is where teh next or add button command comes from
const answerButtonsElement= document.getElementById('answerButton')

//this is the control to click the start button
startQuizButton.addEventListener('click', startQuizButton)

let shuffledOption, currentOptionIndex


//to start the game.this function is related to the START BUTTON// 
function StartQuiz(){
//console.log('Started')  //THis is to test if working... it isn't right now
startQuizButton.classList.add('hide')
shuffledOption = option.sort(()=> Math.random() -.5) // this shuffles the questions
currentOptionIndex = 0 // this is where the questions start from 
optionsButtonElement.classList.remove('hide') // this shows the hidden buttons
}

//to setup the next question/options//
function setNextOption(){
    resetState() //this sets everything back to its default settings
showOption(shuffledOption[currentOptionIndex])
}
// this shows our shuffled questions at the begin of the array
function showOption(option){
optionElement.innerText = option.option
questionElement.forEach(answer => {
const button = document.createElement('button')
button.innerText= answer.text
button.classList.add('button')
    //this step is to establish a boolean instead of a string when shuffled.
    if (answer.correct) {
button.dataset.correct = answer.correct
    }

    button.addEventListener('click')
    answerButtonsElement.appendChild(button)
})
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while( answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild
    (answerButtonsElement.firstChild)
}
}

//to setup the answers//
function selectAnswers (e){
    const selectButtons = e.target
    const correct = selectButtons.dataset.correct
    setStatusClass(document.body.correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button,button.data)
    })
}
if (shuffledOption.length> currentOptionIndex +1) {
} else{ 
    startButton.innerText = 'restart'
    startButton.classList.remove('hide')
}

 function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct) {
    element.classList.add('correct')
    } else {
    element.classList.add('wrong') 
    }
}

function clearStatusClass(element, correct){
    clearStatusClass(element)
    if (correct) {
    element.classList.remove('correct')
    } else {
    element.classList.remove('wrong')
    }
}
 
const options = [
{
    option: 'abcde',
        Answers: [
        {text: 'option1', correct: true},
        {text: 'option2', correct: false }
            ]
        }
    ]
//questions list
const response =confirm("Would you like lowercase letters in your password?");
if (response){
correctAnswer = correctAnswer();
}
