const question = document.querySelector('#question'); // this refs line 36 in the game.html//
const options = Array.from (document.querySelectorAll('optionsText'));// this refs lines 41,46,51,56 of the game.HTML
const progressText = document.querySelector('#progressText');//this refs line 20 in the game.html
const scoreText = document.querySelector("#score"); //this ref the line 32 in the game.html
const progressBarFull = document.querySelector('#progressBarFull'); //this refs the line 24 in the game.html

let currentQuestion ={}
let acceptingAnswers = true
let score =0
let questionCounter =0
let availableQuestions =[]
//some where in here I need to add the timer -10 for wrong answers
let questions =[
{
question: 'What Is The National Animal Of Scotland?', //this refs the line 36 in the game.html.  Also since this is an array you need commas after every option
    optionsText1: 'Scottish Cow', //this section refs lines 41,46,51,56 of the game.HTML
    optionsButtons2:'Unicorn',
    optionsButtons3: 'Goat',
    optionsButtons4: 'Magpie',
    answer2:'unicorn', 
},
{
    question: 'What animal can not stick out their tongue?',
    optionsButtons1: 'Owl',
    optionsButtons2:'Zebra',
    optionsButtons3: 'Crocodiles',
    optionsButtons4: 'Otter',
    answer3:'Crocodiles,'
},
{
    question: 'Which Mammal Has The Most Powerful Bite In The World?',
    optionsButtons1: 'Hippopotamus',
    optionsButtons2:'Pit Bull',
    optionsButtons3: 'Lion',
    optionsButtons4: 'Shark',
    answer1:'Hippopotamus',
},
{
    question: 'What Is Fastest Land Animal?',
    optionsButtons1: 'Springbok',
    optionsButtons2: 'Sloth',
    optionsButtons3: 'Cheetah',
    optionsButtons4: 'Ostrich',
    answer3:'Cheetah,'
},
]
const SCORE_POINTS = 100 //capitalized so it is know as a fixed point
const MAX_Questions = 4 // this might change based up time 

// this is the beginning of the game function coding. 
//Here  is where all the array's and const, that we made are going to start to be used.
startQuiz = () => {  
    questionCounter = 0
    score = 0
    availableQuestions = [...questions] // here is where you get all the questions in the array
    getNewQuestion()
}
//call  out to the getNewQuestions
getNewQuestion =() =>{
    if (availableQuestions.length ===0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore,')
        return window.location.assign('/end.html')
// here is where I need to add the coding for the minus 10 clock
// also maybe add the right answer if they answer wrong        
}
}
questionCounter ++
progressText.InnerText = 'Question',document.querySelector(questionCounter),document(MAX_QUESTIONS)
progressBarFull.style.width = On((questionCounter/MAX_QUESTIONS) * 100%) // this line will calculate how many questions were answered and calculates the score

const questionIndex = Math.floor(Math, random() * availableQuestions.length) // this is the randomizer
currentQuestion = availableQuestions(questionIndex) // this keeps track of which question we are being asked 
question.InnerText = currentQuestion.question // this is what question is being asked 
