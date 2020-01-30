var playing = false
var score
// if we click on the start/reset 
document.getElementById("startreset").onclick = 
function(){
    //if we are playing
    if (playing == true) {
        location.reload()//reload page
    } else {

      //change mode to playing
      playing = true

      //set score to 0
      score = 0
      document.getElementById('scorevalue').innerHTML = score
      document.getElementById('timeremaining').style.display = "block"

      //change button to reset

      document.getElementById("startreset").innerHTML = "Reset Game"
    }
}

    //reload page
  //if we are not playinh
    //show countdown box
    //reduce time by 1sec in loops
      //check to see if time left?
        //yes -> continue
        //no -> gameover
    //change button to reset
    //generate new Q&A
  

    //if we click on answer box
      //if we are playing
        //correct?
          //yes
            //increase score
            //show correct box for 1 sec
            //generate new Q&A
            //if wrong, show try again for 1 sec
