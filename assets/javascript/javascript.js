

// Start function 
$( document ).ready(function(){

  //Set Vars
  var userTotal= 0; 
  var wins= 0;
  var losses = 0;

      // Selects a random number to be shown 
        var Random = Math.floor(Math.random()*101+19)

      // Appending random number to the randomNumber
        $('#randomNumber').text(Random);       

    //  Decaring variables for tallies
      $('#numberWins').text(wins);
      $('#numberLosses').text(losses);

    //resets the game
      function reset(){

            Random = Math.floor(Math.random()*101+19);
            console.log(Random)
            $('#randomNumber').text(Random);
            num1= Math.floor(Math.random()*11+1);
            num2= Math.floor(Math.random()*11+1);
            num3= Math.floor(Math.random()*11+1);
            num4= Math.floor(Math.random()*11+1);
            userTotal= 0;
            $('#finalTotal').text(userTotal);

            } 

    //adds the wins to the userTotal
    function addWins(){
        alert("You won!");
          wins++; 
        $('#numberWins').text(wins);
      reset();
    }

    //addes the losses to the userTotal
    function loser(){
        alert ("You lose!");
          losses++;
        $('#numberLosses').text(losses);
      reset()
    }

     // Setting up random numbers for each one and Random number 
      var num1= Math.floor(Math.random()*11+1)
      var num2= Math.floor(Math.random()*11+1)
      var num3= Math.floor(Math.random()*11+1)
      var num4= Math.floor(Math.random()*11+1)

    //sets up click for jewels and sets win/lose conditions
      $('#blue').on ('click', function(){
        userTotal = userTotal + num1;

        $('#finalTotal').text(userTotal); 

            if (userTotal == Random){
              addWins();
            }
            else if ( userTotal > Random){
              loser();
            }   
      })  


      $('#green').on ('click', function(){
        userTotal = userTotal + num2;

        $('#finalTotal').text(userTotal); 
            if (userTotal == Random){
              addWins();
            }
            else if ( userTotal > Random){
              loser();
            } 
      })  


      $('#red').on ('click', function(){
        userTotal = userTotal + num3;

        $('#finalTotal').text(userTotal);

              if (userTotal == Random){
              addWins();
            }
              else if ( userTotal > Random){
                loser();
            } 
      })  


      $('#yellow').on ('click', function(){
        userTotal = userTotal + num4;

        $('#finalTotal').text(userTotal); 
          
              if (userTotal == Random){
              addWins();
            }
            else if ( userTotal > Random){
              loser();
            }
      });   
    }); 