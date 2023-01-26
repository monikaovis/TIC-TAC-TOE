   // Timer //
   var time = 15;
   var pID = document.getElementById("countDown");
   var startcount = setInterval(countdown, 1000);
   function countdown(){ 
       time -= 1;
       pID.innerText= "Time over in: "+ time ;
       if (time<=0) {
       clearInterval(startcount);
       pID.innerText = "Time Over";
       }
   }
   ///******///
