
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


function generateStart() {
  return `
    <section class="start">
      <h1>Math Quiz</h1>
      <h2>Are you smarter than a 1st grader?</h2>

      <form>
        <input type="submit" value="Submit">
      </form>
    </section>`;
};

function generateQuestion(item) {
  return `
  <section class="quiz">
      <form>
        <fieldset>
          <br>
        </fieldset>
      </form>`;
};

function generateResult() {
  return `
    <section class="results">
      <h2>Summary Screen</h2>
      <p>Congrats you scored x out of y correct!</p>
      <form>
        <input type="submit" value="Restart Quiz">
      </form>
    </section>   
  `;
};


function showResults() {

};

function renderPage() {
  const page = generateStart();
  $('main').html(page);
};

function handleApp() {
  renderPage();
  startQuiz();
  showQuestion();
  checkAnswer();
  showResults();
};

$(handleApp);