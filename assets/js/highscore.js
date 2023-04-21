var clearAllScores = document.querySelector("#clearallscores");
var highscoreListElm = document.querySelector("#highscore_list");

function checkList() {
  var newInfo = JSON.parse(localStorage.getItem("newInfo")) || [];

  newInfo = newInfo.splice(0, 5);
  newInfo = newInfo.sort((a, b) => b.score - a.score);

  for (let i = 0; i < newInfo.length; i++) {
    var newLi = document.createElement("li");
    newLi.textContent = newInfo[i].user + " - " + newInfo[i].score;
    highscoreListElm.append(newLi);
  }
}

checkList();

function clearLocalStorage() {
  localStorage.clear();
  newInfo = [];
  highscoreListElm.innerHTML = "";
}

clearAllScores.addEventListener("click", clearLocalStorage);
