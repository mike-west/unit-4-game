// these hold references to html elements
// var count;
// var wins;
// var losses;
// var gem0;
// var gem1;
// var gem2;
// var gem3;
// var running_score;
var count = 0;
var wins = 0;
var losses = 0;
var runningScore = 0;
var randomNumber = 0;
var gemValues = [0, 0, 0, 0];

// document must be loaded
function updateHtml() {
    $("#count").text(count);
    $("#wins").text(wins);
    $("losses").text(losses);
    $("running-score").text(running_score);
}

function randomValues() {
    for (i==0; i<gemValues.length; ++i) {
        rnd = Math.random() * (12 - 1) + 1;
    }
}