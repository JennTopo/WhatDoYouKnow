//All of these statements are const because they are not going to change their value. 
const question = document.querySelector('#question'); // this refs line 36 in the game.html//
const options = Array.from (document.querySelectorAll('optionsText'));// this refs lines 41,46,51,56 of the game.HTML
const scoreText = document.querySelector("#score"); //this ref the line 32 in the game.html
const timerEL = document.getElementById('countdown');//this refers to the timer (NEEDS to be added to the HTML)

//these are let statements they allow the element to given a value. ie: boolean, string, number
let currentQuestion ={}
let acceptingAnswers = true
let timer = ('100ms')
let wrongAnswer = ('- 10ms')
let name = ('input[name=]')
let score =0
let questionCounter =0
let availableQuestions =[]

//Timer countdown 
function countdown() {
    timerEL = 30
}
let msgInterval = setInterval ('30')
if (timeLeft > 1) {
    timerEL.textContent = timeLeft + 'seconds remaining' >timeLeft
} 
else 
{ if (timeLeft === 1) 
    {
    timerEL.textContent = timeLeft + ' second remaining'>timeLeft
  } else { 
    timerEL.textContent = 'GAME OVER'
    clearInterval(timeInterval)
}
}

//some where in here I need to add the timer -10 for wrong answers
// here all all the questions and answers w/o  any action yet
let questions =[
{
question: 'What Is The National Animal Of Scotland?', //this refs the line 36 in the game.html.  Also since this is an array you need commas after every option
    optionsText1: 'Scottish Cow', //this section refs lines 41,46,51,56 of the game.HTML
    optionsText2:'Unicorn',
    optionsText3: 'Goat',
    optionsText4: 'Magpie',
    answer2:'unicorn', 
},
{
    question: 'What animal can not stick out their tongue?',
    optionsText1: 'Owl',
    optionsText2:'Zebra',
    optionsText3: 'Crocodiles',
    optionsText4: 'Otter',
    answer3:'Crocodiles,'
},
{
    question: 'Which Mammal Has The Most Powerful Bite In The World?',
    optionsText: 'Hippopotamus',
    optionsText2:'Pit Bull',
    optionsText3: 'Lion',
    optionsText4: 'Shark',
    answer1:'Hippopotamus',
},
{
    question: 'What Is Fastest Land Animal?',
    optionsText1: 'Springbok',
    optionsText2: 'Sloth',
    optionsText3: 'Cheetah',
    optionsText4: 'Ostrich',
    answer3:'Cheetah,'
},
]
//const SCORE_POINTS = 100 //capitalized so it is know as a fixed point
//const MAX_Questions = 4 // this might change based up time 

/*this is the beginning of the game function coding. 
Here is where all the array's and const, that we made are going to start to be used.*/
startQuiz = () => {  
    questionCounter = 0 // here is where all the elements on the screen are visible
//    score = 0
    availableQuestions = [...questions] // here is where you get all the questions in the array
    getNewQuestion()
}
//call out to the getNewQuestions
getNewQuestion =() =>{
    if (availableQuestions.length ===0 || questionCounter > MAX_QUESTIONS) 
{
        localStorage.setItem('mostRecentScore,')
        return window.location.assign('/end.html')
// here is where I need to add the coding for the minus 10 clock also maybe add the right answer if they answer wrong        
}
}
questionCounter++
const questionIndex = Math.floor(Math, random() * availableQuestions.length) // this is the randomizer (same on I used in my FingerPrintDynamo Repo)
console.log(options[questionIndex]);
console.log(question);
currentQuestion = availableQuestions(questionIndex) // this keeps track of which question we are being asked 
question.InnerText = currentQuestion.question // this is what question is being asked 

// I do not know what this is linking to had to stop here for now 
options.fourEach(options) =>
    const number = options.dataset[number] // here is where the quiz knows which option button you selected. Refers to lines 41,46,51,56 of the game.HTML
    console.log(optionsButtons)[number]
    options.InnerText = currentQuestion ['option' + number] // this statement calls out to line 74 in script.js 

/*below here are the if / else statements. I have been trying to look up how to replace an element with out fully removing it and the other day in class a student mentioned splicing. Didn't know 
what that was so I looked it up*/
availableQuestions.splice(questionIndex, 1) // by splicing we are Removing elements from an array and, replacing them with new elements in their place, returning the deleted elements.
// also above line to code calls out to line 
acceptingAnswers = true /* this is a boolean. which is showing if all coding is correct the choose 
answer */

/*below is now calling out to the actual action of what happens after you GetOptions 
this selection calls out to the Answer portion of the coding in lines 26,34,42,50 of the script.js 
Wrong answers*/
options.fourEach(options =>{ 
options.addEventListener('click'e=>{ // to get it to do a function we have to addEventListener
        if (!acceptingAnswers) // this statement says if NOT"(!)"" the right answer then ... The "(!)" we learned in class which means NOT  
      return

       acceptingAnswers = false
       const selectedOptions = e.target
       const selectedAnswer = selectedOptions.dataset['number']
   //    alert("not correct Try agin You have just lost -10 seconds.Please try again Thank you.");

       //here is the score board / timer replacement
       let classToApply = selectedAnswer===currentQuestion.answer ?'correct' : 'incorrect'
      
       if (classToApply ==='correct'){
//        incrementScore(SCORE_POINTS)
}

selectedOptions.parentElement.classList.add(classToApply)

setTimeOut{() => {
    selectedOptions.parentElement.classList.remove(classToApply)
    getNewQuestion()
    
        }, 1000}
    })
})
incrementScore = num => { 
    score += numscoreTExt = score
}
startGame()
