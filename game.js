//Choice List
var choiceList = ["Rock", "Scissors", "Paper"];

// function for rendom choice
const allChoice = () => {
  player1.choise = choiceList[Math.floor(Math.random() * choiceList.length)];
  player2.choise = choiceList[Math.floor(Math.random() * choiceList.length)];
  player3.choise = choiceList[Math.floor(Math.random() * choiceList.length)];
  player4.choise = choiceList[Math.floor(Math.random() * choiceList.length)];
};

//check who is wining in two players
const whoWin = (p1, p2) => {
  if (p1.choise == p2.choise) {
    return [0, 0];
  } else if (p1.choise == choiceList[0] && p2.choise == choiceList[1]) {
    return [1, 0];
  } else if (p1.choise == choiceList[0] && p2.choise == choiceList[2]) {
    return [0, 1];
  } else if (p1.choise == choiceList[1] && p2.choise == choiceList[0]) {
    return [0, 1];
  } else if (p1.choise == choiceList[1] && p2.choise == choiceList[2]) {
    return [1, 0];
  } else if (p1.choise == choiceList[2] && p2.choise == choiceList[0]) {
    return [1, 0];
  } else if (p1.choise == choiceList[2] && p2.choise == choiceList[1]) {
    return [0, 1];
  }
};

//add wining point to both players
const addWin = (p1, p2, result) => {
  p1.win = p1.win + result[0];
  p2.win = p2.win + result[1];

  if (result[0]) {
    p1.winblock.push(p2.name);
  } else if (result[1]) {
    p2.winblock.push(p1.name);
  }
};

// check all players
const poitMaker = (p1, p2, p3, p4) => {
  addWin(p1, p2, whoWin(p1, p2));
  addWin(p1, p3, whoWin(p1, p3));
  addWin(p1, p4, whoWin(p1, p4));
  addWin(p2, p3, whoWin(p2, p3));
  addWin(p2, p4, whoWin(p2, p4));
  addWin(p3, p4, whoWin(p3, p4));
};

const op = (p) => {
  let data = {
    "player 1": p.winblock.filter((v) => v === "player 1").length,
    "player 2": p.winblock.filter((v) => v === "player 2").length,
    "player 3": p.winblock.filter((v) => v === "player 3").length,
    "player 4": p.winblock.filter((v) => v === "player 4").length,
  };
  return data;
};

//====================================================

// class for all platers
class Player {
  constructor(name) {
    this.name = name;
  }
  win = 0;
  winblock = [];
  choise = "";
}

// create a players using class
let player1 = new Player("player 1");
let player2 = new Player("player 2");
let player3 = new Player("player 3");
let player4 = new Player("player 4");

// ==============================================
exports.start = () => {
  player1.win = 0;
  player2.win = 0;
  player3.win = 0;
  player4.win = 0;
  player1.winblock = [];
  player2.winblock = [];
  player3.winblock = [];
  player4.winblock = [];


  for (i = 0; i < 50; i++) {
    allChoice(player1, player2, player3, player4);
    poitMaker(player1, player2, player3, player4);
  }

  let op2 = {
    "player 1": op(player1),
    "player 2": op(player2),
    "player 3": op(player3),
    "player 4": op(player4),
  };

  return (result = {
    "player 1": player1.win,
    "player 2": player2.win,
    "player 3": player3.win,
    "player 4": player4.win,
    op: op2,
  });
};
