//Timer //
var time;
var pID = document.getElementById("countDown");
var startCount;
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

var playerX = document.getElementById('player-X');
var playerO = document.getElementById('player-O');

// hide / show board game, timer, winner & button //
var table= document.getElementsByClassName('table');
var winnerSection= document.getElementById("winner");
var startButton = document.getElementById("sbmt");
table[0].style.visibility = "hidden";
winnerSection.style.visibility = "hidden";
pID.style.visibility = "hidden";

function showBoard(){
   if (playerX.value !== ""  && playerO.value !== ""){
      playerX.readOnly= "true";
      playerO.readOnly= "true";   
      table[0].style.visibility = "visible";
      pID.style.visibility = "visible";
      startButton.style.visibility = "hidden";
      currentPlayer.style.background = "rgba(9, 173, 199, 0.5)";
      let pX=document.getElementById("pX");
      let pO=document.getElementById('pO');
      pX.innerText= playerX.value + " : ";
      pO.innerText= playerO.value + " : ";
   }else {
      alert('Please fill in players Names');
   }
}

// Play Game mark cells X O sign //
var currentPlayer = playerX;
function play(cellID){
   var cell= document.getElementById(cellID);
   if (currentPlayer == playerX){
      cell.innerText = 'x';
   } else {   
   cell.innerText = 'o';
   }
   cell.classList.add("disbleCell");
   cell.style.cursor = "default";
   clearInterval(startCount);
   changeTurn();
   didWin(); 
};

//cange turn//
var isX = true;
function changeTurn(){
   currentPlayer.style.background = "";
   isX = !isX;
   currentPlayer = isX === true ? playerX : playerO;
   currentPlayer.style.background = "rgba(9, 173, 199, 0.5)";
   newcount(); 
};

// check win //
var line = document.getElementById("lines");
var Winner = document.getElementById("theWinner");
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
      Winner.innerText =  playerX.value;
      winColor(r1c1, r1c2, r1c3);
      line.classList.add("line-row-1");
      Endgame ();
      return;
   }
   if (r2c1.innerText ==='x' && r2c2.innerText ==='x' && r2c3.innerText ==='x') {
      Winner.innerText =  playerX.value;
      winColor(r2c1, r2c2 ,r2c3);
      line.classList.add("line-row-2");
      Endgame ();
      return;
   }
   if (r3c1.innerText ==='x' && r3c2.innerText ==='x' && r3c3.innerText ==='x') {
      Winner.innerText =  playerX.value;
      winColor(r3c1 , r3c2, r3c3);
      line.classList.add("line-row-3");
      Endgame ();
      return;
   }
   if (r1c1.innerText ==='x' && r2c1.innerText ==='x' && r3c1.innerText ==='x') {
      Winner.innerText =  playerX.value;
      winColor(r1c1, r2c1, r3c1);
      line.classList.add("line-column-1");
      Endgame ();
      return;
   }
   if (r1c2.innerText ==='x' && r2c2.innerText ==='x' && r3c2.innerText ==='x') {
      Winner.innerText =  playerX.value;
      winColor(r1c2, r2c2, r3c2);
      line.classList.add("line-column-2");
      Endgame ();
      return;
   }
   if (r1c3.innerText ==='x' && r2c3.innerText ==='x' && r3c3.innerText ==='x') {
      Winner.innerText = playerX.value;
      winColor(r1c3, r2c3, r3c3);
      line.classList.add("line-column-3");
      Endgame ();
      return;
   }  
   if (r1c1.innerText ==='x' && r2c2.innerText==='x' && r3c3.innerText==='x') {
      Winner.innerText = playerX.value;
      winColor(r1c1, r2c2, r3c3);
      line.classList.add("line-diagonal-1");
      Endgame ();
      return;
   }
   if (r1c3.innerText==='x' && r2c2.innerText==='x' && r3c1.innerText ==='x') {
      Winner.innerText = playerX.value;
      winColor(r1c3, r2c2, r3c1);
      line.classList.add("line-diagonal-2");
      Endgame ();
      return;
   }
   if (r1c1.innerText==='o' && r1c2.innerText==='o' && r1c3.innerText ==='o') {
      Winner.innerText = playerO.value;
      winColor(r1c1, r1c2, r1c3);
      line.classList.add("line-row-1");
      Endgame ();
      return;
   }
   if (r2c1.innerText==='o' && r2c2.innerText==='o' && r2c3.innerText ==='o') {
      Winner.innerText = playerO.value;
      winColor(r2c1, r2c2 ,r2c3);
      line.classList.add("line-row-2");
      Endgame ();
      return;
   }
   if (r3c1.innerText==='o' && r3c2.innerText==='o' && r3c3.innerText ==='o') {
      Winner.innerText =playerO.value;
      winColor(r3c1, r3c2, r3c3);
      line.classList.add("line-row-3");
      Endgame ();
      return;
   } 
   if (r1c1.innerText==='o' && r2c1.innerText==='o' && r3c1.innerText ==='o') {
      Winner.innerText =playerO.value;
      winColor(r1c1, r2c1, r3c1);
      line.classList.add("line-column-1");
      Endgame ();
      return;
   }
   if (r1c2.innerText==='o' && r2c2.innerText==='o' && r3c2.innerText ==='o') {
      Winner.innerText =playerO.value;
      winColor(r1c2, r2c2, r3c2);
      line.classList.add("line-column-2");
      Endgame ();
      return;
   }
   if (r1c3.innerText==='o' && r2c3.innerText==='o' && r3c3.innerText ==='o') {
      Winner.innerText = playerO.value;
      winColor(r1c3, r2c3, r3c3);
      line.classList.add("line-column-3");
      Endgame ();
      return;
   } 
   if (r1c1.innerText==='o' && r2c2.innerText==='o' && r3c3.innerText ==='o') {
      Winner.innerText = playerO.value;
      winColor(r1c1, r2c2, r3c3);
      line.classList.add("line-diagonal-1");
      Endgame ();
      return;
   }
   if (r1c3.innerText==='o' && r2c2.innerText==='o' && r3c1.innerText ==='o') {
      Winner.innerText = playerO.value;
      winColor(r1c3, r2c2, r3c1);
      line.classList.add("line-diagonal-2");
      Endgame ();
      return;
   }
   else if (r1c1.innerText != "" && r2c1.innerText != "" && r3c1.innerText != "" && r1c2.innerText != "" && r2c2.innerText != "" && r3c2.innerText != "" && r1c3.innerText != "" && r2c3.innerText != "" && r3c3.innerText != ""){
      document.getElementsByTagName("h3")[1].style.visibility = "hidden";
      Winner.innerText = "It's a Tie";
      Endgame ();
   }; 
};

// color winner's text line //
function winColor (cellId1, cellId2, cellId3){
   cellId1.style.color="#FF80A7";
   cellId2.style.color="#FF80A7";
   cellId3.style.color="#FF80A7";
};

// End game operations and functions // 
var allCells= document.getElementsByClassName("cellStyle");
var playAgainButton= document.getElementById('playAgain');
function Endgame(){
   currentPlayer.style.background = "";
   clearInterval(startCount);
   for (let i=0; i< allCells.length; i++){
      allCells[i].classList.add("disbleCell");
      allCells[i].style.cursor = "default";
   };
   pID.innerText = "Game Over";
   winnerSection.style.visibility = "visible";
   playAgainButton.style.visibility = "visible";
   score();
};

/// score board functions //
var x=0;
var o=0;
function score() {
   let scoreX= document.getElementById("scoreX");
   let scoreO= document.getElementById("scoreO");
   if (Winner.innerText == playerX.value){
      x++;
      scoreX.innerText= x;
   };
   if (Winner.innerText ==  playerO.value){
      o++;
      scoreO.innerText= o;
   };
 };

 function showScoreBoard() {
   var scoreBoard =document.getElementById("scoreBoard");
   if (scoreBoard.style.visibility == "visible"){
      scoreBoard.style.visibility = "hidden";
   } else {
      scoreBoard.style.visibility= "visible";
   };
};

/// Play again  ///
function playAgain(){
   playAgainButton.style.visibility = "hidden";
   line.classList.remove("line-row-1","line-row-2","line-row-3","line-column-1", "line-column-2","line-column-3","line-diagonal-1","line-diagonal-2" );
   winnerSection.style.visibility = "hidden";
   pID.innerText="Click To Start" ;
   for (let i=0; i< allCells.length; i++){
      allCells[i].innerText= "";
      allCells[i].abled= "true";
      allCells[i].style.cursor = "pointer";
      allCells[i].style.color ="black";
      allCells[i].classList.remove("disbleCell");
   };
   isX = true; 
   currentPlayer= playerX;
   currentPlayer.style.background = "rgba(9, 173, 199, 0.5)";
};
