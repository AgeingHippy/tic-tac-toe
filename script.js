let turn = "x";
let turnCount = 0;
let scoreX = 0;
let scoreO = 0;

function playTurn(event) {
  if (event.target.innerText == "" && turnCount != 9) {
    event.target.innerText = turn;
    event.target.classList.add("game-piece-" + turn);
    turnCount++;
    if (checkForWinner(event)) {
      turn == "x" ? scoreX++ : scoreO++;
      displayResult(`${turn.toUpperCase()} Wins!!!!!`);
      displayScore();
      turnCount = 9;
    } else if (turnCount == 9) {
      displayResult(`IT'S A DRAW :-/`);
    }
    turn = turn === "x" ? "o" : "x";
  }
}

function checkForWinner(event) {
  let piece = turn;
  let winner = false;
  switch (event.target.id) {
    case "square-1-1":
      winner ||= checkRow(1, piece);
      winner ||= checkColumn(1, piece);
      winner ||= checkBackwardsDiagonal(piece);
      break;
    case "square-1-2":
      winner ||= checkRow(1, piece);
      winner ||= checkColumn(2, piece);
      break;
    case "square-1-3":
      winner ||= checkRow(1, piece);
      winner ||= checkColumn(3, piece);
      winner ||= checkForwardDiagonal(piece);
      break;
    case "square-2-1":
      winner ||= checkRow(2, piece);
      winner ||= checkColumn(1, piece);
      break;
    case "square-2-2":
      winner ||= checkRow(2, piece);
      winner ||= checkColumn(2, piece);
      winner ||= checkBackwardsDiagonal(piece);
      winner ||= checkForwardDiagonal(piece);
      break;
    case "square-2-3":
      winner ||= checkRow(2, piece);
      winner ||= checkColumn(3, piece);
      break;
    case "square-3-1":
      winner ||= checkRow(3, piece);
      winner ||= checkColumn(1, piece);
      winner ||= checkForwardDiagonal(piece);
      break;
    case "square-3-2":
      winner ||= checkRow(3, piece);
      winner ||= checkColumn(2, piece);
      break;
    case "square-3-3":
      winner ||= checkRow(3, piece);
      winner ||= checkColumn(3, piece);
      winner ||= checkBackwardsDiagonal(piece);
      break;
  }
  return winner;
}

function checkRow(row, piece) {
  if (
    document.getElementById(`square-${row}-1`).innerText === piece &&
    document.getElementById(`square-${row}-2`).innerText === piece &&
    document.getElementById(`square-${row}-3`).innerText === piece
  ) {
    document.getElementById(`square-${row}-1`).classList.add("winner");
    document.getElementById(`square-${row}-2`).classList.add("winner");
    document.getElementById(`square-${row}-3`).classList.add("winner");
    return true;
  } else {
    return false;
  }
}

function checkColumn(column, piece) {
  if (
    document.getElementById(`square-1-${column}`).innerText === piece &&
    document.getElementById(`square-2-${column}`).innerText === piece &&
    document.getElementById(`square-3-${column}`).innerText === piece
  ) {
    document.getElementById(`square-1-${column}`).classList.add("winner");
    document.getElementById(`square-2-${column}`).classList.add("winner");
    document.getElementById(`square-3-${column}`).classList.add("winner");
    return true;
  } else {
    return false;
  }
}

function checkForwardDiagonal(piece) {
  if (
    document.getElementById(`square-3-1`).innerText === piece &&
    document.getElementById(`square-2-2`).innerText === piece &&
    document.getElementById(`square-1-3`).innerText === piece
  ) {
    document.getElementById(`square-3-1`).classList.add("winner");
    document.getElementById(`square-2-2`).classList.add("winner");
    document.getElementById(`square-1-3`).classList.add("winner");
    return true;
  } else {
    return false;
  }
}

function checkBackwardsDiagonal(piece) {
  if (
    document.getElementById(`square-1-1`).innerText === piece &&
    document.getElementById(`square-2-2`).innerText === piece &&
    document.getElementById(`square-3-3`).innerText === piece
  ) {
    document.getElementById(`square-1-1`).classList.add("winner");
    document.getElementById(`square-2-2`).classList.add("winner");
    document.getElementById(`square-3-3`).classList.add("winner");
    return true;
  } else {
    return false;
  }
}

function resetBoard() {
  turn = "x";
  turnCount = 0;
  let squares = Array.from(
    document.getElementsByClassName("board-square")
  );
  squares.forEach((square) => {
    square.classList.remove("game-piece-x");
    square.classList.remove("game-piece-o");
    square.classList.remove("winner");
    square.innerText = "";
  });
  displayResult("");
}

function displayScore() {
  document.getElementById("score-x").value = scoreX;
  document.getElementById("score-o").value = scoreO;
}

function displayResult(result) {
  document.getElementById("result").innerText = result;
}

function resetCompetition() {
  resetBoard();
  scoreX = 0;
  scoreO = 0;
  displayScore();
}