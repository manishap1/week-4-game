$( document ).ready(function(){
  var Random=Math.floor(Math.random()*101+19)
  
  $('#rnumber').text(Random);
  
  var num1= Math.floor(Math.random()*11+1)
  var num2= Math.floor(Math.random()*11+1)
  var num3= Math.floor(Math.random()*11+1)
  var num4= Math.floor(Math.random()*11+1)
  
  var userTotal= 0; 
  var wins= 0;
  var losses = 0;
 
$('#wins').text("Wins : "+wins);
$('#losses').text("Losses : "+losses);
$('#tot').text("Your total score is : "+userTotal);

function reset(){
      Random=Math.floor(Math.random()*101+10);
      console.log(Random)
      $('#rnumber').text(Random);
      num1= Math.floor(Math.random()*11+1);
      num2= Math.floor(Math.random()*11+1);
      num3= Math.floor(Math.random()*11+1);
      num4= Math.floor(Math.random()*11+1);
      userTotal= 0;
      $('#tot').text("Your total score is :"+userTotal);
      } 

function yay(){
alert("You won!");
  wins++; 
  $('#wins').text("Win :" + wins);
  reset();
}

function loser(){
alert ("You lose!");
  losses++;
  $('#losses').text("Losses : "+losses);
  reset()
}

  $('#button-1').on ('click', function(){
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $('#tot').text(userTotal); 
          
        if (userTotal == Random){
          yay();
        }
        else if ( userTotal > Random){
          loser();
        }   
  })  
  $('#button-2').on ('click', function(){
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $('#tot').text(userTotal); 
        if (userTotal == Random){
          yay();
        }
        else if ( userTotal > Random){
          loser();
        } 
  })  
  $('#button-3').on ('click', function(){
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $('#tot').text(userTotal);

          if (userTotal == Random){
          yay();
        }
        else if ( userTotal > Random){
          loser();
        } 
  })  
  $('#button-4').on ('click', function(){
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $('#tot').text(userTotal); 
      
          if (userTotal == Random){
          yay();
        }
        else if ( userTotal > Random){
          loser();
        }
  });   
}); 
