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

  // Current question
  // Question text
  // User's answer choice(s)
  // Score? Current Question Number? Quiz Started? Anything else?

/**
 *
 * Your app should include a render() function, that regenerates
 * the view each time the store is updated. See your course
 * material, consult your instructor, and reference the slides
 * for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 */
//**************** TEMPLATE GENERATORS generate html FOR EACH VIEW */

// Template generators
function generateStartPage(){


  return `
    <h1 class = 'quiz-questions'>Math Quiz</h1>
    <form id="quiz-form" >
      <button id='start-quiz' type="submit">Play</button>
    </form>`;

    
}

function generateChoices() {
  //for loop that is going to return all of the choices in a input/label
  const answerChoices = Object.values(store.questions)[store.questionNumber].answers; 

  return store.questions[store.questionNumber].answers.map((answer, idx) => {
      return `
        <input type="radio" id="answer-choice-${idx}" name="answer-choice" value="${answerChoices[idx]}">
        <label for="quiz-value">${answerChoices[idx]}</label>
      `;
  }).join('')

  //using a map

  //returns labels and inputs
}


function generateQuestionPage(){
  
  const allQuestions = store.questions;
  const currentQuestionNumber = store.questionNumber;
  const currentQuestionData = allQuestions[currentQuestionNumber];
  console.log(currentQuestionData);
  const currentQuestion = currentQuestionData.question;
  
  const answerArr = Object.values(allQuestions)[store.questionNumber];
  const answerChoices = answerArr.answers;

  const choicesHTML = generateChoices();

  return `<h1 class = 'quiz-questions'>Question ${currentQuestionNumber +1} out of 5</h1>
  <h3>Score: ${store.score}</h3>
  <form id="question-form" action="">
    <fieldset>
      <legend>${currentQuestion}?</legend>
      ${choicesHTML}
    </fieldset>
    <button id='submit-answer'>Submit Answer</button>
  </form>`;

 
}

  //
//checks if answer is right or wrong
function generateResults(){

  let selected = $('input[type=radio]:checked', '#question-form').val();
  let allQuestions = store.questions;
  let currentQuestionNumber = store.questionNumber;
  let correct = Object.values(allQuestions)[currentQuestionNumber].correctAnswer;
  
  
   if (correct === selected && currentQuestionNumber < store.questions.length) {
    store.score++;
    return generateCorrectPage();
  }else if (correct !== selected && currentQuestionNumber < store.questions.length) {
    return generateWrongPage();
  }
}
//HTML and data for correct answer page when correct answer is selected
function generateCorrectPage(){
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

function generateWrongPage(){
  let correctAnswer = Object.values(store.questions)[store.questionNumber].correctAnswer;
  let selected = $('input[type=radio]:checked', '#question-form').val();
  return `
    <h1>Sorry, you are wrong!</h1>
    <h2>Correct Answer: ${correctAnswer}</h2>
    <h2>Your Answer: ${selected}</h2>
    <button id='next-question' type="submit">Continue</button>`;

}

function generateFinalPage(){
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
    // store.questionNumber++;
    store.quizStarted = true;
    renderQuestionPage();
    // this is event delegation
});

}



function handleAnswerSubmit(){
  $('body').on('click', '#submit-answer', (e) => {
    e.preventDefault();
    let selected = $('input[type=radio]:checked', '#question-form').val();
    
    if(selected) {  
    
    renderResults();
  } else {
      alert('Please select an answer');
    }
  });

  
}


function handleNextQuestionSubmit(){
  $('body').on('click', '#next-question', (e) => {
    e.preventDefault();
    store.questionNumber++;

    if (store.questionNumber === store.questions.length){
      return renderFinalPage();
    }else (renderQuestionPage());
});

  
}

//handles what happens when the try again button is clicked
function handleTryAgain(){
  $('body').on('click', '#try-again', (e) => {
    e.preventDefault();
    // your code here
    // this is event delegation
    store.score = 0;
    store.questionNumber = 0;
    store.quizStarted = false;
    renderStartPage();
});
}



function handleQuizApp(){
  renderStartPage();
  // renderQuestionPage();
  // renderResults();
  // renderFinalPage();
  handleStartQuiz();
  handleAnswerSubmit();
  handleNextQuestionSubmit();
  handleTryAgain();
}

 $(handleQuizApp);
