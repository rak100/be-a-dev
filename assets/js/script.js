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