//Jaimi Wachniak
//Assignment The Duel Part 2
//11/30/2013

/*
    Name: Jaimi Wachniak
    Date: 11/30/2013
    Assignment Goal: Assignment: Duel1
    */
//self-executing function

(function(){

  console.log("FIGHT!!!");
    //player name
    var fighterOneName = "Spiderman";
    var fighterTwoName = "Superman";

    //player damage
    var fighter1Damage = 25;
    var fighter2Damage = 25;

    //player health
    var fighterOneHealth = 100;
    var fighterTwoHealth = 100;

    //Fighting Rounds
    var round=1;


   function fight(){
       console.log ('in the fight function')

       alert(fighterOneName+":"+fighterOneHealth+" *START* "+fighterTwoName+":"+fighterTwoHealth);

      for (var i=0; i<10; i++){

          var minDamage1 = fighter1Damage * .5;
          var minDamage2 = fighter2Damage * .5;
          var f1 = Math.floor(Math.random()*(fighter1Damage-minDamage1)+minDamage1);
          var f2 = Math.floor(Math.random()*(fighter2Damage-minDamage2)+minDamage2);


          fighterOneHealth -f1
          fighterTwoHealth-=f2

          console.log(fighterOneName+":"+fighterOneHealth+" *START* "+fighterTwoName+":"+fighterTwoHealth);

          var results = winnerCheck();
          console.log(results);

          if (results ==="no winner"){
              round++;
              alert(fighterOneName+":"+fighterOneHealth+" *Round" + round + "Over*"+fighterTwoName+":"+fighterTwoHealth);
              alert(results);
              break;

          };

      };
   };

   function winnerCheck(){
       console.log("in winnerCheck FN");

       var result ="no winner";

       if (fighterOneHealth<1 && fighterTwoHealth<1){
           result ="You Both Die";
       }else if(fighterOneHealth<1){
           result =fighterTwoName+"WINS!!"
       }else if(fighterTwoHealth<1){
           result =fighterOneName+"WINS!!"
       };
       return result;

   };
          /**starts here**/
          console.log('program starts')
          fight();


}   )();