
'use strict';
/* eslint-disable indent*/
/*
 * Example store structure
 */
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

 //loads start page
const start = `
  <section class="start">
    <h1>Math Quiz</h1>
    <h2>Are you smarter than a 1st grader?</h2>

    <form id="start-button">
    <input type="submit" value="Submit">
    </form>
  </section>

  <section hidden class="quiz">
    <form>
      <fieldset>
        <legend class="question">Question</legend>
        <input type="radio" name="choice" id="choice-1" value="1">
        <label for="choice-1">choice</label>
        <br>
        <input type="radio" name="choice" id="choice-2" value="2">
        <label for="choice-2">choice</label>
        <br>
        <input type="radio" name="choice" id="choice-3" value="3">
        <label for="choice-3">choice</label>
        <br>
        <input type="radio" name="choice" id="choice-4" value="4">
        <label for="choice-4">choice</label>
        <br>
        <input type="radio" name="choice" id="choice-5" value="5">
        <label for="choice-5">choice</label>
        <br>
      </fieldset>
      <button type="Submit">Submit</button>
    </form>
  </section>

  <section hidden class="results">
    <h2>Summary Screen</h2>
    <p>Congrats you scored x out of y correct!</p>
    <form>
      <input type="submit" value="Restart Quiz">
    </form>
  </section>
  `;


function generateLegend() {
  console.log('cool');
}

function generateChoice() {
  console.log('rad');
}


function generatePageElement(item){

  const legend = generateLegend();
  const choice = generateChoice();

  return `
  <section class="quiz">
        <form>
          <fieldset>
            <legend>${legend}</legend>
            <input type="radio" value="${choice}">
            <br>
          </fieldset>
        </form>
  </section>
    `;
}


function generatePageString(questionAmount) {
  const pages = store.questions.map((page) => generatePageElement(page));

  return pages.join("");
}

//renders Questions
function renderQuestions(){
  console.log('run');
}

function renderFirst(){
  $('main').html(start);
}

//runs entire scheme
function renderStart() {
  //run start
  renderFirst();

  $('main #start-button').click(function(e){
    e.preventDefault();

    $('main .start').attr('hidden', 'hidden');
    $('main .quiz').removeAttr('hidden');

    showQuestion();

    $('.quiz ul').on()
  });
}

function showQuestion() {
  let storeQ = store.questions;
  let qNum = store.questionNumber;
  let theQ = storeQ[qNum];
  $('.quiz legend[class="question"]').html(theQ.question);
  $('.quiz fieldset').html('');

  let numL = Object.values(storeQ)[qNum];
  let numL2 = numL.answers;
  for(let i=0; i < numL2.length; i++) {
    if (i === 0) {
      $('.quiz fieldset').html($('.quiz fieldset').html() + `
    <legend class="question">Question: ${qNum} of ${Object.values(storeQ).length}<br>${theQ.question}</legend>
    <input type="radio" name="choice" id="choice-${i}" value="${numL2[i]}">
    <label for="choice-${i}">${numL2[i]}</label>
    <br>
    `);
    } else {
    $('.quiz fieldset').html($('.quiz fieldset').html() + `
    <input type="radio" name="choice" id="choice-${i}" value="${numL2[i]}">
    <label for="choice-${i}">${numL2[i]}</label>
    <br>
  `)};

  }
}

//handles important functions
function handleQuiz(){
  renderStart();
}

$(handleQuiz);