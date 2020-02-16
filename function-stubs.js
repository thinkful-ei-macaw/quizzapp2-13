'use strict';
/* eslint-disable indent*/

const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What is 2 + 2?',
      answers: [
        '5',
        '4',
        '9',
        '1'
      ],
      correctAnswer: '4'
    },
    {
      question: 'What is 5 - 3?',
      answers: [
        '2',
        '20',
        '6',
        '32'
      ],
      correctAnswer: '2'
    },
    {
      question: 'What is 3 x 5?',
      answers: [
        '0',
        '49',
        '15',
        '7'
      ],
      correctAnswer: '15'
    },
    {
      question: 'What is 4 + 6?',
      answers: [
        '10',
        '30',
        '2',
        '24'
      ],
      correctAnswer: '10'
    },
    {
      question: 'What is 7 - 3?',
      answers: [
        '5',
        '10',
        '4',
        '32'
      ],
      correctAnswer: '4'
    }
  ],
  questionNumber: 0,
  score: 0,
  quizStarted: false
};

//**************** TEMPLATE GENERATORS generate html FOR EACH VIEW ************/

// Template generators
function generateStartPage(){
  return `
    <h1 class = 'quiz-questions'>Math Quiz</h1>
    <form id="quiz-form" >
      <button id='start-quiz' type="submit">Play</button>
    </form>`; 
}

function generateChoices() {
  //for loop that returns all of the current answer choices
  const answerChoices = Object.values(store.questions)[store.questionNumber].answers; 

  return store.questions[store.questionNumber].answers.map((answer, idNumber) => {
      return `
        <input type="radio" id="answer-choice-${idNumber}" name="answer-choice" value="${answerChoices[idNumber]}">
        <label for="quiz-value">${answerChoices[idNumber]}</label>
      `;
  }).join('');

  //using a map

  //returns labels and inputs
}

//generate HTML for the current question view
function generateQuestionPage(){
  //grabs current question, question number
  const allQuestions = store.questions;
  const currentQuestionNumber = store.questionNumber;
  const currentQuestionData = allQuestions[currentQuestionNumber];
  const currentQuestion = currentQuestionData.question;
  //grabs HTML for the current answer choices
  const choicesHTML = generateChoices();

  return `
    <h1 class = 'quiz-questions'>Question ${currentQuestionNumber +1} out of 5</h1>
    <h3>Score: ${store.score} out of ${currentQuestionNumber}</h3>
    <form id="question-form" action="">
      <fieldset>
        <legend>${currentQuestion}?</legend>
        ${choicesHTML}
      </fieldset>
      <button id='submit-answer'>Submit Answer</button>
    </form>`;
}

  //
//determines if users selected the correct answer, and conditionally selects next view to be generated
function generateResults(){
  //grabs answer user selected, current question number, and correct answer
  let selected = $('input[type=radio]:checked', '#question-form').val();
  let allQuestions = store.questions;
  let currentQuestionNumber = store.questionNumber;
  let correct = Object.values(allQuestions)[currentQuestionNumber].correctAnswer;
  
  //determines  which view to generate based on if users selected the correct answer. if so, increments the score. determines
  if (correct === selected && currentQuestionNumber < store.questions.length) {
    store.score++;
    return generateCorrectPage();
  }
  else if (correct !== selected && currentQuestionNumber < store.questions.length) {
    return generateWrongPage();
  }
}

//HTML and data for correct answer page when correct answer is selected
function generateCorrectPage(){
  //grabs correctAnswer for the question just answered as well as the answer the user selected
  let correctAnswer = Object.values(store.questions)[store.questionNumber].correctAnswer;
  let selected = $('input[type=radio]:checked', '#question-form').val();
  return `
    <h1>Correct!</h1>
    <h2>Correct Answer: ${correctAnswer}</h2>
    <h2>Your Answer: ${selected}</h2>
    <h2>Your current score is: ${store.score} out of ${Object.values(store.questions).length}
    </h2>
    <button id='next-question' type="submit">Continue</button>`;
}

//generate HTML when user selects the wrong answer
function generateWrongPage(){
  //grabs correctAnswer for the question just answered as well as the answer the user selected
  let correctAnswer = Object.values(store.questions)[store.questionNumber].correctAnswer;
  let selected = $('input[type=radio]:checked', '#question-form').val();
  return `
    <h1>Sorry, you are wrong!</h1>
    <h2>Correct Answer: ${correctAnswer}</h2>
    <h2>Your Answer: ${selected}</h2>
    <button id='next-question' type="submit">Continue</button>`;
}

//generate HTML for when user completes the quizz
function generateFinalPage(){
  //grabs current score and number of questions
  return ` <h1 class = 'results'>Congrats you scored ${store.score} out of ${Object.values(store.questions).length} correct!</h1>
  <button id='try-again' type="submit">Continue</button>`;
}

/*************** RENDER FUNCTIONS ***********/

function renderStartPage(){
  $('main').html(generateStartPage());
}

function renderQuestionPage(){
  $('main').html(generateQuestionPage());
}

function renderResults(){
  $('main').html(generateResults());
}

function renderFinalPage(){
  $('main').html(generateFinalPage());
}

//  ************* EVENT HANDLERS ***************

//handles what happens when the "play" button is clicked
function handleStartQuiz(){
  $('body').on('click', '#start-quiz', (e) => {
    e.preventDefault();
    store.quizStarted = true;
    renderQuestionPage();
});
}

//handles what happens when the 'submit-answer' button is clicked 
function handleAnswerSubmit(){
  $('body').on('click', '#submit-answer', (e) => {
    e.preventDefault();
    let selected = $('input[type=radio]:checked', '#question-form').val();
    //checks to make sure user has selected an answer. if not, alerts the user to do so.
    if(selected) {  
      renderResults();
    } 
    else {
      alert('Please select an answer');
    }
    });
}

//handles what happens when the 'next question' button is selected
function handleNextQuestionSubmit(){
  $('body').on('click', '#next-question', (e) => {
    e.preventDefault();
    store.questionNumber++;
    // determines which view to render next. If all questions have been answered, renders final results page, 
    //otherwise, renders the next question.
    if (store.questionNumber === store.questions.length){
      return renderFinalPage();
    }
    else (renderQuestionPage());
});  
}

//handles what happens when the try again button is clicked
function handleTryAgain(){
  $('body').on('click', '#try-again', (e) => {
    e.preventDefault();
    // resets values to original and renders the start quiz page
    store.score = 0;
    store.questionNumber = 0;
    store.quizStarted = false;
    renderStartPage();
});
}

function handleQuizApp(){
  renderStartPage();
  handleStartQuiz();
  handleAnswerSubmit();
  handleNextQuestionSubmit();
  handleTryAgain();
}

 $(handleQuizApp);
