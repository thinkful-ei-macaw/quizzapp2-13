
'use strict';
/* eslint-disable indent*/
/*
 * Example store structure
 */
let score = 0;
let currentQuestion = 0;

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
$(document).ready(function(){
  $('.start-page a').click(function(e){
    e.preventDefault();
    $('.start-page').hide();
    $('.quiz').show();
  })
});


function startQuiz() {
  console.log(`\`startQuiz ran\``);
}

function showQuestion() {
 

}

function checkAnswer() {

}


function showResults() {

}

function renderApp() {
  startQuiz();
  showQuestion();
  checkAnswer();
  showResults();
}

$(renderApp);