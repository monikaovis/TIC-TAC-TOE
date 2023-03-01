//Timer //
var time;
var pID = document.getElementById("countDown");
var startCount;// change parameter name to startCount
function newcount(){
   time = 16;
   startCount = setInterval(countdown, 1000);
   countdown();
};
function countdown(){
   time -= 1;
   pID.innerText = "Time over in: " + time;
   if (time <= 0) {
      clearInterval(startCount);
      changeTurn();
   };
}; 

// Play Game mark cells X O sign //
var playerX = document.getElementById('player-X');
var playerO = document.getElementById('player-O');
var currentPlayer = playerX;
function play(cellID){
   var cell= document.getElementById(cellID);
   if (currentPlayer == playerX){
      cell.innerText = 'x';
   } else {   
   cell.innerText = 'o';
   }
   // cell.onclick ="null";
   cell.style.cursor = "default";
   // cell.style.pointer-events="none";
   clearInterval(startCount);
   changeTurn();
   didWin(); 
};

//cange turn//
var isX = true;
currentPlayer.style.background = "rgba(9, 173, 199, 0.5)";
function changeTurn(){
   currentPlayer.style.background = "";
   isX = !isX;
   currentPlayer = isX === true ? playerX : playerO;
   currentPlayer.style.background = "rgba(9, 173, 199, 0.5)";
   newcount(); 
};
var line = document.getElementById("lines");
var Winner = document.getElementById("theWinner");
// check win //
function didWin(){
   var r1c1 = document.getElementById('r1c1');
   var r1c2 = document.getElementById('r1c2');
   var r1c3 = document.getElementById('r1c3');
   var r2c1 = document.getElementById('r2c1');
   var r2c2 = document.getElementById('r2c2');
   var r2c3 = document.getElementById('r2c3');
   var r3c1 = document.getElementById('r3c1');
   var r3c2 = document.getElementById('r3c2');
   var r3c3 = document.getElementById('r3c3');
   if (r1c1.innerText==='x' && r1c2.innerText ==='x' && r1c3.innerText ==='x') {
      Winner.innerText = "X";
      winColor(r1c1, r1c2, r1c3);
      line.classList.add("line-row-1");
      Endgame ();
      return;
   }
   if (r2c1.innerText ==='x' && r2c2.innerText ==='x' && r2c3.innerText ==='x') {
      Winner.innerText = "X";
      winColor(r2c1, r2c2 ,r2c3);
      line.classList.add("line-row-2");
      Endgame ();
      return;
   }
   if (r3c1.innerText ==='x' && r3c2.innerText ==='x' && r3c3.innerText ==='x') {
      Winner.innerText = "X";
      winColor(r3c1 , r3c2, r3c3);
      line.classList.add("line-row-3");
      Endgame ();
      return;
   }
   if (r1c1.innerText ==='x' && r2c1.innerText ==='x' && r3c1.innerText ==='x') {
      Winner.innerText = "X";
      winColor(r1c1, r2c1, r3c1);
      line.classList.add("line-column-1");
      Endgame ();
      return;
   }
   if (r1c2.innerText ==='x' && r2c2.innerText ==='x' && r3c2.innerText ==='x') {
      Winner.innerText = "X";
      winColor(r1c2, r2c2, r3c2);
      line.classList.add("line-column-2");
      Endgame ();
      return;
   }
   if (r1c3.innerText ==='x' && r2c3.innerText ==='x' && r3c3.innerText ==='x') {
      Winner.innerText = "X";
      winColor(r1c3, r2c3, r3c3);
      line.classList.add("line-column-3");
      Endgame ();
      return;
   }  
   if (r1c1.innerText ==='x' && r2c2.innerText==='x' && r3c3.innerText==='x') {
      Winner.innerText = "X";
      winColor(r1c1, r2c2, r3c3);
      line.classList.add("line-diagonal-1");
      Endgame ();
      return;
   }
   if (r1c3.innerText==='x' && r2c2.innerText==='x' && r3c1.innerText ==='x') {
      Winner.innerText = "X";
      winColor(r1c3, r2c2, r3c1);
      line.classList.add("line-diagonal-2");
      Endgame ();
      return;
   }
   if (r1c1.innerText==='o' && r1c2.innerText==='o' && r1c3.innerText ==='o') {
      Winner.innerText = "O";
      winColor(r1c1, r1c2, r1c3);
      line.classList.add("line-row-1");
      Endgame ();
      return;
   }
   if (r2c1.innerText==='o' && r2c2.innerText==='o' && r2c3.innerText ==='o') {
      Winner.innerText = "O";
      winColor(r2c1, r2c2 ,r2c3);
      line.classList.add("line-row-2");
      Endgame ();
      return;
   }
   if (r3c1.innerText==='o' && r3c2.innerText==='o' && r3c3.innerText ==='o') {
      Winner.innerText = "O";
      winColor(r3c1, r3c2, r3c3);
      line.classList.add("line-row-3");
      Endgame ();
      return;
   } 
   if (r1c1.innerText==='o' && r2c1.innerText==='o' && r3c1.innerText ==='o') {
      Winner.innerText = "O";
      winColor(r1c1, r2c1, r3c1);
      line.classList.add("line-column-1");
      Endgame ();
      return;
   }
   if (r1c2.innerText==='o' && r2c2.innerText==='o' && r3c2.innerText ==='o') {
      Winner.innerText = "O";
      winColor(r1c2, r2c2, r3c2);
      line.classList.add("line-column-2");
      Endgame ();
      return;
   }
   if (r1c3.innerText==='o' && r2c3.innerText==='o' && r3c3.innerText ==='o') {
      Winner.innerText = "O";
      winColor(r1c3, r2c3, r3c3);
      line.classList.add("line-column-3");
      Endgame ();
      return;
   } 
   if (r1c1.innerText==='o' && r2c2.innerText==='o' && r3c3.innerText ==='o') {
      Winner.innerText = "O";
      winColor(r1c1, r2c2, r3c3);
      line.classList.add("line-diagonal-1");
      Endgame ();
      return;
   }
   if (r1c3.innerText==='o' && r2c2.innerText==='o' && r3c1.innerText ==='o') {
      Winner.innerText = "O";
      winColor(r1c3, r2c2, r3c1);
      line.classList.add("line-diagonal-2");
      Endgame ();
      return;
   }
   else if (r1c1.innerText != "" && r2c1.innerText != "" && r3c1.innerText != "" && r1c2.innerText != "" && r2c2.innerText != "" && r3c2.innerText != "" && r1c3.innerText != "" && r2c3.innerText != "" && r3c3.innerText != ""){
      Winner.innerText = "It's a Tie";
      Endgame ();
   }; 
};
 
function winColor (cellId1, cellId2, cellId3){
   cellId1.style.color="#FF80A7";
   cellId2.style.color="#FF80A7";
   cellId3.style.color="#FF80A7";
};

var allCells= document.getElementsByClassName("cellStyle");
function Endgame(){
   currentPlayer.style.background = "";
   clearInterval(startCount);
   pID.innerText = "Game Over";
   for (let i=0; i< allCells.length; i++){
      allCells[i].onclick= "null";
      allCells[i].style.cursor = "default";
   };
};

