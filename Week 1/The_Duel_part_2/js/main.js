/*
 * Name: Jaimi Wachniak
 * Assignment: The Duel Part 2
 * Date: 03/05/2014
 */

// self executing function
(function(){

    console.log("FIGHT NOW!!!");

    //player names
    var Array = [];
    var multipleValues = Array ();
    var playerOneName [0] = "WonderWoman";
    var playerTwoName [1] = "Supergirl";

    //players damage
    var playerOneDamage [2] = "15";
    var playerTwoDamage [3] = "15";

    //players health
    var playerOneHealth [4] = "100";
    var playerTwoHealth [5] = "100";

Console.log(playerOneName [0] + ',' + playerTwoName [1] + ',' + playerOneDamage [2] + ',' + playerTwoDamage [3] + ',' + playerOneHealth [4] + ',' + playerTwoHealth [5]);
    
    //start rounds
    var round=0;

    function fight(){
        alert(playerOneName+":"+playerOneHealth+"  *START NOW*  "+playerTwoName+":"+playerTwoHealth);
        for (var i = 0; i < 10; i++)
        {
            //Math string code = Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

            //Infected Damage
            playerOneHealth-=f1;
            playerTwoHealth-=f2;

            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);

            //check for Winner
            var result = winnerCheck();
            console.log(result);
            if (result==="no winner")
            {
                round++;
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);

            } else{
                alert(result);
                break;
            };

          };
    };

    function winnerCheck(){
        var result="no winner";
        if (playerOneHealth<1 && playerTwoHealth<1)
        {
            result = "You Both Die";
        } else if(playerOneHealth<1){
            result =playerTwoName+" WINS!!!"
        } else if (playerTwoHealth<1)
        {
            result = playerOneName+" WINS!!!"
        };
       return result;
    };

/*Fight Call */ 
    fight();

})();