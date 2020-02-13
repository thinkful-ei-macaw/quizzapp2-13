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

function renderQuizApp(){

};
// Template generators
function generateAnswerList(answers) {

}

function generateQuestion(question){

}


//When play button on intro page is clicked, render questions page
function renderQuestionsPage(){
  //find current question id
  //render page with data from appropriate question

  // Reads STORE, calls generators, then adds HTML to DOM
  //const currentAnswerList = generateAnswerList(currentAnswerList);
  //const currentQuestion = generateQuestion(currentQuestion);


  //
}

//handles what happens when the "play" button is clicked
function handleStartQuiz(){
  $('#quiz-form').submit(function(event) {
    event.preventDefault();
    renderQuestionsPage();
});
}



function handleAnswerSubmit(){
  $('#quiz-form').submit(function(event) {
    event.preventDefault();

   
  //let selected =
  //const correctAnswer =
  // if( selected === correctAnswer){
  //   renderCorrectPage();
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
  $('main').html(' ');

 
}

//render wrong answer page when correct answer is selected
function renderWrongPage(){
  //this updates the html
  $('main').html(' ');

}

function handleNextQuestionSubmit(){
  //if there is another question to answer
  renderQuestionsPage();

  //if last question was the final question
  renderFinalResultsPage();
}

//when last question is submitted render this page
function renderFinalResultsPage(){
  //this updates the html
  $('main').html(' ');

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