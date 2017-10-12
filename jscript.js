//if it is a weekend or a vacation day the function should return sleepIn = false
function sleep_in(isWeekday,isVacation){
    if (isWeekday == false || isVacation == true) {
        return true;
    } else {
        return false;
    }
}
//monkeyTrouble takes in two boolean expressions to tell us which
//monkeys are smiling. if both are, or if both aren't, the function should tell us we're in trouble
function monkey_trouble(a_smile, b_smile){
    var inTrouble = true;
    if (a_smile && b_smile){
        return inTrouble === true;
    }else{
        if (a_smile === false && b_smile === false){
            return inTrouble === true;
        }else{
            return inTrouble === false;
        }
    }
}

//this function returns a string printed however many times you want it to
function string_times(string,n){
    var result = "";
    for (var i=0; i<n; i++) {
        result += string;
    }
    return result;
}

//this function allows you to repeat the first 3 characters of a string n times
function front_times(str,n){
    if (str.length >= 3) {
        var result = "";
        var first3 = str[0] + str[1] + str[2];
        for (var i = 0; i < n; i++) {
            result += first3;
        }
        return result;
    }else{
        var result = "";
        for (var i = 0; i<n; i++){
            result += str;
        }
        return result;
    }
}

//this function returns every other character in a string
function string_bits(str){
    var result = "";
    var numCharacters = str.length;
    for (var i = 0; i < (numCharacters); i = i+2){
        result += str[i];
    }
    return result;
}

//this function predicts whether a cop will give you a
//speeding ticket and its severity based on your speed and if it's your birthday
function caughtSpeeding(speed,bday){
    if (bday === true){
        if (speed <= 65){
            return 0
        }
        if (66<=speed && speed<=85){
            return 1;
        }
        if (speed >= 86){
            return 2;
        }
    }else{
        if (speed <= 60){
            return 0
        }
        if (61<=speed && speed<=80){
            return 1;
        }
        if (speed >= 81){
            return 2;
        }
    }
}

//this function plays the game FizzBuzz for you so that you don't need to play this boring game yourself
function fizz_buzz(int){
    if (int % 3 == 0 && int % 5 == 0){
        return "FizzBuzz" ;
    }
    if (int % 3 != 0 && int % 5 == 0){
        return "Buzz" ;
    }
    if (int % 3 == 0 && int % 5 != 0){
        return "Fizz";
    }else{
        return int +"!"
    }
}

//this judgemental function rates your party from 0-2  solely based on the amount of tea and candy you have
function teaParty(tea,candy){
    if (tea < 5 || candy < 5){
        return 0;
    }
    if (tea >= 2 * candy || candy >= 2 * tea){
        return 2;
    }else{
        return 1;
    }
}

//this function will tell you who won a round of backjack
function blackjack(p1,p2){
    var d1 = 21 - p1;
    var d2 = 21 - p2;
    if (p1 > 21 && p2 > 21){
        return 0;
    }else{
        if (p1 <= 21 && p2 <= 21){
            if (d1 == d2){
                return p1;
            }else{
                return Math.max(p1,p2);
            }
        }else{
            return Math.min(p1,p2);
        }
    }
}

//this function will find the sum of all non redundant integers within the parameters
function loneSum(a,b,c){
    if (a !== b && b !== c && c !== a){
        return a+b+c;
    }
    if (a === b && c !== a){
        return c;
    }
    if (a === c && b !== a){
        return b;
    }
    if (b === c && a !== b){
        return a;
    }
    if (a===b && b===c){
        return 0;
    }
}

function tester(){

    document.getElementById("output").innerHTML = sleep_in(true, true);
    document.getElementById("output2").innerHTML = monkey_trouble(true, true);
    document.getElementById("output3").innerHTML = string_times("monday. ", 5);
    document.getElementById("output4").innerHTML = front_times("friday", 4);
    document.getElementById("output5").innerHTML = string_bits("Every Other Character is to be Returned",9);
    document.getElementById("output6").innerHTML = caughtSpeeding(87,false);
    document.getElementById("output7").innerHTML = fizz_buzz(13);
    document.getElementById("output8").innerHTML = teaParty(20,6);
    document.getElementById("output9").innerHTML = blackjack(22,20);
    document.getElementById("output10").innerHTML = loneSum(1,1,1);



}

//test third method, etc
/**
 * Created by h205p3 on 9/28/17.
 */
