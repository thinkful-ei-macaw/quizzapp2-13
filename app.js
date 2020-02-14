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
        '21'
      ],
      correctAnswer: '4'
    }
  ],
  questionNumber: 0,
  score: 0
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

 //renders sequence of events
 //renders intro page
function renderQuizApp(){
const introPage = `
<h1 class = 'quiz-questions'>Math Quiz</h1>
<form id="quiz-form" >
  <button class = 'start-quiz'>Play</button>
</form>`;
$('main').html(introPage);
}

// Template generators
function generateAnswerList(answers) {

}

function generateQuestion(question){

}


//render questions page
function renderQuestionPage(){
  store.questionNumber++;
  
  const questionPage = `
    <h1 class = 'quiz-questions'>Question:  ?</h1>
    <h2>Question: currentQuestion ${store.questionNumber} out of 5</h2>
    <h3>Score: ${store.score}</h3>
    <form id="question-form" action="">
      <input type="radio" id="answer-choice-1" name="answer-choice-1" value="quiz-value">
      <label for="quiz-value">answers[0] will go here</label><br>
      <input type="radio" id="answer-choice-2" name="answer-choice-2" value="quiz-value">
      <label for="quiz-value">answers[1] will go here</label><br>
      <input type="radio" id="answer-choice-3" name="answer-choice-3" value="quiz-value">
      <label for="quiz-value">answers[2] will go here</label><br>
      <input type="radio" id="answer-choice-4" name="answer-choice-4" value="quiz-value">
      <label for="quiz-value">answers[3] will go here</label><br>
      <button class ='submit-answer'>Submit Answer</button>
      </form>`;

  $('main').html(generateQuestionPage());
  //find current question id
  //render page with data from appropriate question

  // Reads STORE, calls generators, then adds HTML to DOM
  //const currentAnswerList = generateAnswerList(currentAnswerList);
  //const currentQuestion = generateQuestion(currentQuestion);


  //
}

//handles what happens when the "play" button is clicked
function handleStartQuiz(){
  $('button.start-quiz').on('click',function(event) {
    event.preventDefault();
    renderQuestionPage();
    
});
}



function handleAnswerSubmit(){
  $('button.submit-answer').on('click',function(event) {
    event.preventDefault();
    console.log('click');
    renderCorrectPage();
    
    
  //let selected =
  //const correctAnswer =
  // if( selected === correctAnswer){
  //   store.score++;
  //renderCorrectPage();
  //update store
  // }
  // else if(selected !== correctAnswer){
  //   renderWrongPage();
  //update store
  //update STORE with current score
});
}




//render correct answer page when correct answer is selected
function renderCorrectPage(){
  //this updates the html
  const correctPage = `   
    <h1 class = 'quiz-questions'>Wrong!</h1>
    <h2>Question: 3 out of 5</h2>
    <h2>Score: ${store.score}</h2>
    <ul>
        <li>Answer:</li>
        <li>Your Answer:</li>
    </ul>
    <ul>
        <li>Right: 2</li>
        <li>Wrong: 1</li>
    </ul>
    <button class="next-question">Continue</button>
    `;
  $('main').html(correctPage);

 
}

//render wrong answer page when correct answer is selected
function renderWrongPage(){
  //this updates the html
  const wrongPage = `
  `;
  $('main').html(' ');

}

function handleNextQuestionSubmit(){
  $('button.next-question').submit(function(event) {
    event.preventDefault();
  
  //if there is another question to answer
  //renderQuestionsPage();

  //if last question was the final question
  renderFinalResultsPage();
});
}
//when last question is submitted render this page
function renderFinalResultsPage(){
 const finalPage = `
 `
  //this updates the html
 // $('main').html(' ');

  //give final score
}

//handles what happens when the try again button is clicked
function handleTryAgain(){
  //go back to intro page
}

function handleQuizApp(){
  renderQuizApp();
  handleStartQuiz();
  handleAnswerSubmit();
  handleNextQuestionSubmit();
  handleTryAgain();
}

 $(handleQuizApp);