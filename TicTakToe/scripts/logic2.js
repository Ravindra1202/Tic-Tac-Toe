console.log("Tic Tac game");

var btn = "";
var checker = "X";
function playerMove(btn) {
  if (btn.value ==" ") {
    document.getElementById('print').innerHTML = "Player X Turn";
    btn.value = checker;
  }
  if (checker == "X") {
    
    checker = "O";
    document.getElementById('print').innerHTML = "Now, Player O Turn";
  }
  else {
    checker = "X";
    document.getElementById('print').innerHTML = "Now, Player X Turn";
  }

  b1 = document.getElementById('buttons1').value;
  b2 = document.getElementById('buttons2').value;
  b3 = document.getElementById('buttons3').value;
  b4 = document.getElementById('buttons4').value;
  b5 = document.getElementById('buttons5').value;
  b6 = document.getElementById('buttons6').value;
  b7 = document.getElementById('buttons7').value;
  b8 = document.getElementById('buttons8').value;
  b9 = document.getElementById('buttons9').value;
  var x_count = parseInt(document.getElementById('playerxid').value);
  var o_count = parseInt(document.getElementById('playeroid').value);


  if (b1 == "X" && b2 == "X" && b3 == "X") {
    x_count = x_count + 1;
    document.getElementById("playerxid").value = x_count;
    document.getElementById('print2').innerHTML = "Congrats !! Player X WON";

    // document.getElementById('buttons1').disabled = true; 
    // document.getElementById('buttons2').disabled = true; 
    // document.getElementById('buttons3').disabled = true;

    alert("win X");

  }
  if (b4 == "X" && b5 == "X" && b6 == "X") {
    x_count = x_count + 1;
    document.getElementById("playerxid").value = x_count;
    document.getElementById('print2').innerHTML = "Congrats !! Player X WON";
    alert("win X");
  }
  if (b7 == "X" && b8 == "X" && b9 == "X") {
    x_count = x_count + 1;
    document.getElementById("playerxid").value = x_count;
    document.getElementById('print2').innerHTML = "Congrats !! Player X WON";
    alert("win X");
  }
  if (b1 == "X" && b5 == "X" && b9 == "X") {
    x_count = x_count + 1;
    document.getElementById("playerxid").value = x_count;
    document.getElementById('print2').innerHTML = "Congrats !! Player X WON";
    alert("win X");
  }
  if (b3 == "X" && b5 == "X" && b7 == "X") {
    x_count = x_count + 1;
    document.getElementById("playerxid").value = x_count;
    document.getElementById('print2').innerHTML = "Congrats !! Player X WON";
    alert("win X");
  }
  if (b3 == "X" && b6 == "X" && b9 == "X") {
    x_count = x_count + 1;
    document.getElementById("playerxid").value = x_count;
    document.getElementById('print2').innerHTML = "Congrats !! Player X WON";
    alert("win X");
  }
  if (b1 == "X" && b4 == "X" && b7 == "X") {
    x_count = x_count + 1;
    document.getElementById("playerxid").value = x_count;
    document.getElementById('print2').innerHTML = "Congrats !! Player X WON";
    alert("win X");
  }
  if (b2 == "X" && b5 == "X" && b8 == "X") {
    x_count = x_count + 1;
    document.getElementById("playerxid").value = x_count;
    document.getElementById('print2').innerHTML = "Congrats !! Player X WON";
    alert("win X");
  }

  // =====================================================

  if (b1 == "O" && b2 == "O" && b3 == "O") {
    o_count = o_count + 1;
    document.getElementById("playeroid").value = o_count;
    document.getElementById('print2').innerHTML = "Congrats !! Player O WON";
    alert("win O");

  }
  if (b4 == "O" && b5 == "O" && b6 == "O") {
    o_count = o_count + 1;
    document.getElementById("playeroid").value = o_count;
    document.getElementById('print2').innerHTML = "Congrats !! Player O WON";
    alert("win O");
  }
  if (b7 == "O" && b8 == "O" && b9 == "O") {
    o_count = o_count + 1;
    document.getElementById("playeroid").value = o_count;
    document.getElementById('print2').innerHTML = "Congrats !! Player O WON";
    alert("win O");
  }
  if (b1 == "O" && b5 == "O" && b9 == "O") {
    o_count = o_count + 1;
    document.getElementById("playeroid").value = o_count;
    document.getElementById('print2').innerHTML = "Congrats !! Player O WON";
    alert("win O");
  }
  if (b3 == "O" && b5 == "O" && b7 == "O") {
    o_count = o_count + 1;
    document.getElementById("playeroid").value = o_count;
    document.getElementById('print2').innerHTML = "Congrats !! Player O WON";
    alert("win O");
  }
  if (b3 == "O" && b6 == "O" && b9 == "O") {
    o_count = o_count + 1;
    document.getElementById("playeroid").value = o_count;
    document.getElementById('print2').innerHTML = "Congrats !! Player O WON";
    alert("win O");
  }
  if (b1 == "O" && b4 == "O" && b7 == "O") {
    o_count = o_count + 1;
    document.getElementById("playeroid").value = o_count;
    document.getElementById('print2').innerHTML = "Congrats !! Player O WON";
    alert("win O");
  }
  if (b2 == "O" && b5 == "O" && b8 == "O") {
    o_count = o_count + 1;
    document.getElementById("playeroid").value = o_count;
    document.getElementById('print2').innerHTML = "Congrats !! Player O WON";
    alert("win O");
  }
  if ((b1 == 'X' || b1 == 'O') && (b2 == 'X'
    || b2 == 'O') && (b3 == 'X' || b3 == 'O') &&
    (b4 == 'X' || b4 == 'O') && (b5 == 'X' ||
      b5 == 'O') && (b6 == 'X' || b6 == 'O') &&
    (b7 == 'X' || b7 == 'O') && (b8 == 'X' ||
      b8 == 'O') && (b9 == 'X' || b9 == 'O')) {
    document.getElementById('print2').innerHTML = "OOPS !! Match Tie";
  }
}

function ResetGame() {

  document.tictactoe.btn1.value = " ";
  document.tictactoe.btn2.value = " ";
  document.tictactoe.btn3.value = " ";
  document.tictactoe.btn4.value = " ";
  document.tictactoe.btn5.value = " ";
  document.tictactoe.btn6.value = " ";
  document.tictactoe.btn7.value = " ";
  document.tictactoe.btn8.value = " ";
  document.tictactoe.btn9.value = " ";
  document.getElementById('print2').textContent = " ";
  alert("Start the new game...");
}
function NewGame() {
  location.reload();
  ResetGame();
}