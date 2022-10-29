let addToList = function () {
  let input = document.getElementById("name");
  if (input.value !== "") {
    let list = document.getElementById("name-list");
    let nameInList = document.createElement("div");
    nameInList.classList.add("listed-name");
    nameInList.innerText = input.value;
    list.appendChild(nameInList);
    input.value = "";
  }
};

let numberOfTeams = document.getElementById("number-of-teams");
let teamNumber = 0;

let generateTeams = function () {
  let displayTeams = document.getElementById("teams-display");
  displayTeams.innerHTML = "";
  for (let i = 0; i < teamNumber; i++) {
    let team = document.createElement("div");
    let teamNumber = document.createElement("div");
    let teamCard = document.createElement("div");
    teamNumber.classList.add("team-number");
    teamCard.classList.add("team-card");
    let h2 = document.createElement("h2");
    h2.innerText = "Team " + (i + 1);
    teamNumber.appendChild(h2);
    team.appendChild(teamNumber);
    team.appendChild(teamCard);
    displayTeams.appendChild(team);
  }
};

let add1Team = function () {
  teamNumber++;
  numberOfTeams.innerText = teamNumber;
  generateTeams();
};

let remove1Team = function () {
  if (teamNumber > 0) {
    teamNumber--;
    numberOfTeams.innerText = teamNumber;
  }
  generateTeams();
};

let shuffle = function (array) {
  array.sort(() => Math.random() - 0.5);
  return array;
};

let arrayOfNames = [];

let pushInArray = function () {
  let listedNames = document.getElementsByClassName("listed-name");
  for (let name of listedNames) {
    arrayOfNames.push(name);
  }
};

let assignMember = function () {
  pushInArray();
  shuffle(arrayOfNames);
  if (teamNumber !== 0) {
    let j = 0;
    for (let i = 0; i < arrayOfNames.length; i++) {
      let name = arrayOfNames[i].innerText;
      let teamCard = document.getElementsByClassName("team-card");
      if (j < teamNumber) {
        let div = document.createElement("div");
        div.innerText = name;
        teamCard[j].appendChild(div);
        j++;
      } else {
        j = 0;
        let div = document.createElement("div");
        div.innerText = name;
        teamCard[j].appendChild(div);
        j++;
      }
    }
    let list = document.getElementById("name-list");
    list.innerHTML = "";
  }
  arrayOfNames = [];
};

let reset = function () {
  let displayTeams = document.getElementById("teams-display");
  let list = document.getElementById("name-list");
  teamNumber = 0;
  numberOfTeams.innerText = 0;
  displayTeams.innerHTML = "";
  list.innerHTML = "";
};

let keyDown = function (event) {
  if (event.key === "Enter") {
    addToList();
  }
};
