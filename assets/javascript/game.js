/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var random_number = getRandomInt(19, 120);
var crystal1 = getRandomInt(1, 12);
var crystal2 = getRandomInt(1, 12);
var crystal3 = getRandomInt(1, 12);
var crystal4 = getRandomInt(1, 12);
var score = 0
var wins_counter = 0
var loses_counter = 0

$("#random_num").html("<h6>Number to hit: " + random_number + "</h6>")

function testscore(score,random_number) {
    if (score == random_number) {
        this.wins_counter += 1
        $("#message").html("<h6>You hit the number, YOU <b><font color='green'>WON</font></b>!</h6>");
        $("#wins").html("<h6>Wins: " + wins_counter + "</h6>");
        this.score = 0;
        this.random_number = Math.floor(Math.random() * 120) + 19;
        $("#keys").html("<h5>Your total score so far is: <input id='whichkey' maxlength='3' size=2 value=''></input></h5>");
        crystal1 = getRandomInt(1, 12);
        crystal2 = getRandomInt(1, 12);
        crystal3 = getRandomInt(1, 12);
        crystal4 = getRandomInt(1, 12);
    };
    if (score > random_number) {
        this.loses_counter += 1
        $("#message").html("<h6>You missed the number, YOU <b><font color='red'>LOST</font></b>!</h6>");
        $("#loses").html("<h6>Loses: " + loses_counter + "</h6>");
        this.score = 0;
        this.random_number = Math.floor(Math.random() * 120) + 19;
        $("#keys").html("<h5>Your total score so far is: <input id='whichkey' maxlength='3' size=2 value=''></input></h5>");
        crystal1 = getRandomInt(1, 12);
        crystal2 = getRandomInt(1, 12);
        crystal3 = getRandomInt(1, 12);
        crystal4 = getRandomInt(1, 12);
    };  
};

$("#button1").click("keydown", function( event ) {
    score += crystal1;
    $("#keys").html("<h5>Your total score so far is: <input id='whichkey' maxlength='3' size=2 value='" + score + "'></input></h5>");
    testscore(score,random_number);
    $("#random_num").html("<h6>Number to hit: " + random_number + "</h6>");
});

$("#button2").click("keydown", function( event ) {
    score += crystal2;
    $("#keys").html("<h5>Your total score so far is: <input id='whichkey' maxlength='3' size=2 value='" + score + "'></input></h5>");
    testscore(score,random_number);
    $("#random_num").html("<h6>Number to hit: " + random_number + "</h6>");
});

$("#button3").click("keydown", function( event ) {
    score += crystal3;
    $("#keys").html("<h5>Your total score so far is: <input id='whichkey' maxlength='3' size=2 value='" + score + "'></input></h5>");
    testscore(score,random_number);
    $("#random_num").html("<h6>Number to hit: " + random_number + "</h6>");
});

$("#button4").click("keydown", function( event ) {
    score += crystal4;
    $("#keys").html("<h5>Your total score so far is: <input id='whichkey' maxlength='3' size=2 value='" + score + "'></input></h5>");
    testscore(score,random_number);
    $("#random_num").html("<h6>Number to hit: " + random_number + "</h6>");
});
