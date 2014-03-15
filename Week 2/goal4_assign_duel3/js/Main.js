/*
 * Name: Jaimi Wachniak
 * Assignment: The Duel Part 3
 * Date: 03/12/2014
 */

// self executing function
('function'(){

    console.log ('FIGHT NOW!');

fighter1 = {name: "Hurcules", damage:20, health:100};
fighter2 = {name: "Superman", damage:20, health:100};
  
   //start rounds
    var round=0;

    function fight(){
        
        for (var i = 0; i < 10; i++)
        {
            //Math string code = Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = fighter1.damage * .5;
            var minDamage2 = fighter2.damage * .5;
            var f1 = Math.floor(Math.random()*(fighter1.damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(fighter2.damage-minDamage2)+minDamage2);

            //Infected Damage
            fighter1.Health-=f1;
            fighter2.Health-=f2;

            console.log(fighter1.Name+": "+fighter1.Health + " " + fighter2.Name+":"fighter2.Health);

            //check for Winner
            var result = winnerCheck();
            console.log(result);
            if (result==="no winner")
            {
                round++;
                alert(fighter1.Name+":"+fighter1.Health+"  *ROUND "+round+" OVER"+"*  "+fighter2.Name+":"+fighter2.Health);

            } else{
                alert(result);
                break;
            };

          };
    };

    function winnerCheck(){
        var result="no winner";
        if (fighter1.Health<1 && fighter2.Health<1)
        {
            result = "You Both Die";
        } else if(fighter1.Health<1){
            result =fighter2.Name+" WINS!!!"
        } else if (fighter2.Health<1)
        {
            result = fighter1.Name+" WINS!!!"
        };
       return result;
    };

/*Fight Call */ 
    fight();

})();