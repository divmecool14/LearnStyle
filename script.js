const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
 currentQuestionIndex++
 setNextQuestion()
})

function startGame() {
 startButton.classList.add('hide')
 shuffledQuestions = questions.sort(() => Math.random() - .5)
 currentQuestionIndex = 0
 questionContainerElement.classList.remove('hide')
 setNextQuestion()
}

function setNextQuestion() {
 resetState()
 showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
 questionElement.innerText = question.question
 question.answers.forEach(answer => {
   const button = document.createElement('button')
   button.innerText = answer.text
   button.classList.add('btn')
   if (answer.correct) {
     button.dataset.correct = answer.correct
   }
   button.addEventListener('click', selectAnswer)
   answerButtonsElement.appendChild(button)
 })
}

function resetState() {
 clearStatusClass(document.body)
 nextButton.classList.add('hide')
 while (answerButtonsElement.firstChild) {
   answerButtonsElement.removeChild(answerButtonsElement.firstChild)
 }
}

function selectAnswer(e) {
 const selectedButton = e.target
 const correct = selectedButton.dataset.correct
 setStatusClass(document.body, correct)
 Array.from(answerButtonsElement.children).forEach(button => {
   setStatusClass(button, button.dataset.correct)
 })
 if (shuffledQuestions.length > currentQuestionIndex + 1) {
   nextButton.classList.remove('hide')
 } else {
   startButton.innerText = 'Restart'
   startButton.classList.remove('hide')
 }
}

function setStatusClass(element, correct) {
 clearStatusClass(element)
 if (correct) {
   element.classList.add('correct')
 } else {
   element.classList.add('wrong')
 }
}

function clearStatusClass(element) {
 element.classList.remove('correct')
 element.classList.remove('wrong')
}

const questions = [
 {
   question: 'English: She ___ goodbye.',
   answers: [
     { text: 'Said', correct: true },
     { text: 'Told', correct: false },
     { text: 'Spoke', correct: false }
   ]
 },
 {
   question: 'English: He ___ a boy.',
   answers: [
     { text: 'am', correct: false },
     { text: 'is', correct: true },
     { text: 'are', correct: false }
   ]
 },
 {
   question: 'Math: 2+2=?',
   answers: [
     { text: '7', correct: false },
     { text: '10', correct: false },
     { text: '4', correct: true }
   ]
 },
 {
   question: 'Math: 10-2=?',
   answers: [
     { text: '6', correct: false },
     { text: '8', correct: true },
     { text: '7', correct: false }
   ]
 },
 {
 question: 'Art: Name 1 primary colors?',
 answers: [
   { text: 'Green', correct: false },
   { text: 'Red', correct: true },
   { text: 'Orange', correct: false }
 ]
},
{
question: 'Art: Who painted the Mona Lisa?',
   answers: [
     { text: 'Banksy', correct: false },
     { text: 'Van Gough', correct: false },
     { text: 'Leonardo Da Vinci', correct: true }
   ]
 },
{
question: 'History: Who was the Queen of England?',
   answers: [
    { text: 'Queen Mary', correct: false },
    { text: 'Queen Anne', correct: false },
    { text: 'Queen Elizabeth', correct: true }
   ]
 },
 {
   question: 'History: The Trojan Horse was used by the Greeks.',
       answers: [
         { text: 'False', correct: false },
         { text: 'True', correct: true }
       ]
     },
{
question: 'Science: How many legs does a spider have?',
    answers: [
      { text: '4', correct: false },
      { text: '8', correct: true },
      { text: '6', correct: false }
      ]
   },
{
question: 'Science: What planet do we live on?',
    answers: [
       { text: 'Jupiter', correct: false },
       { text: 'Mars', correct: false },
       { text: 'Earth', correct: true }
    ]
   }
]