// Variables

var newInfo = JSON.parse(localStorage.getItem("newInfo")) || [];
var homePage = document.querySelector("#home_page");
var startBtn = document.querySelector("#start_btn");

var quiz = document.querySelector("#quiz");

var quizQuestion = document.querySelector(".questions");

var optionsElem = document.querySelectorAll(".options");

var ans_1 = document.querySelector("#ans_1");
var ans_2 = document.querySelector("#ans_2");
var ans_3 = document.querySelector("#ans_3");
var ans_4 = document.querySelector("#ans_4");

var rightWrong = document.querySelector("#right_wrong");

var submitResult = document.querySelector("#submit_result");
var score = document.querySelector("#user_score");
var initial = document.querySelector("#initials");
var submitBtn = document.querySelector("#submit_btn");

var highScoreElm = document.querySelector("#highscores");

var timerLeft = document.getElementById("timer_count");
var timeElm = document.getElementsByClassName("timer_count");

// Quiz Questions
var questions = [
  {
    question: "What does HTML stands for?",
    choices: [
      "1. Hyper text markup Linguistics",
      "2. Hyper text markup language",
      "3. High trade marketing logistics",
      "4. Hyper tracing market",
    ],
    answer: 2,
  },
  {
    question: "What does Cascading style sheet stands for?",
    choices: ["1. CSS", "2. CGS", "3. GSC", "4. SCS"],
    answer: 1,
  },
  {
    question: "What coding language provides logic to a webpage?",
    choices: ["1. PHP", "2. PYTHON", "3. HTML", "4. JAVASCRIPT"],
    answer: 4,
  },
  {
    question: "Where is REACT used?",
    choices: ["1. Frontend", "2. Backend", "3. Server side", "4. Api"],
    answer: 1,
  },
  {
    question: "What is a popular database?",
    choices: ["1. HTML", "2. MONGODB", "3. GITHUB", "4. VSC"],
    answer: 2,
  },
];

// Timer variables
var secondsLeft = 60;
var questionNr = 0;
var totalScore = 0;
var questionCount = 1;

function gameOver() {
  quiz.classList.add("hidden");
  submitResult.classList.remove("hidden");

  score.textContent = "Your final score is : " + totalScore;
}

function setTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerLeft.textContent = secondsLeft + " s";
    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      gameOver();
    } else if (questionCount >= questions.length + 1) {
      timerLeft.innerHTML = "0";
      clearInterval(timerInterval);
      gameOver();
    }
  }, 1000);
}

// function to start quiz
function startQuiz() {
  homePage.classList.add("hidden");
  quiz.classList.remove("hidden");

  setTimer();
  showQuestion(questionNr);
}

function showQuestion(n) {
  quizQuestion.textContent = questions[n].question;
  ans_1.textContent = questions[n].choices[0];
  ans_2.textContent = questions[n].choices[1];
  ans_3.textContent = questions[n].choices[2];
  ans_4.textContent = questions[n].choices[3];
  questionNr = n;
}
//  function to check answer
function checkAnswer(e) {
  e.preventDefault();
  rightWrong.style.display = "block";
  setTimeout(function () {
    rightWrong.style.display = "none";
  }, 1000);

  if (questions[questionNr].answer == e.target.value) {
    rightWrong.textContent = "Correct!";
    totalScore = secondsLeft;
  } else {
    secondsLeft = secondsLeft - 10;
    totalScore = secondsLeft;

    rightWrong.textContent = "Wrong!";
  }

  if (questionNr < questions.length - 1) {
    showQuestion(questionNr + 1);
  } else {
    gameOver();
  }
  questionCount++;
}
// function to store user score in local storage
function storeScore(e) {
  e.preventDefault();

  var userInfo = {
    user: initial.value,
    score: totalScore,
  };
  newInfo.push(userInfo);
  localStorage.setItem("newInfo", JSON.stringify(newInfo));
}