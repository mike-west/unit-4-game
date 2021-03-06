var count = 0;
var wins = 0;
var losses = 0;
var runningScore = 0;
var randomNumber = 0;
var gemValues = [0, 0, 0, 0];


$(document).ready(function () {
    function init() {
        count = 0;
        runningScore = 0;
        randomNumber = 0;
        gemValues = [0, 0, 0, 0];
    }

    function updateHtml() {
        $("#count").text(count);
        $("#wins").text(wins);
        $("#losses").text(losses);
        $("#running-score").text(runningScore);
        $("#rnd-num").text(randomNumber);
    }

    function randomValues() {
        for (var i = 0; i < gemValues.length; ++i) {
            gemValues[i] = Math.floor(Math.random() * (12 - 1) + 1);
        }
        randomNumber = Math.floor(Math.random() * (120 - 19) + 19);
    }

    $(".gem").on("click", function () {
        value = gemValues[$(this).attr('value')];
        runningScore += value;
        updateHtml();

        if (runningScore === randomNumber) {
            alert("You are a winner!");
            ++wins;
            init();
            randomValues();
            updateHtml();
        } else if (runningScore > randomNumber) {
            alert("Sorry you went over.")
            ++losses;
            init();
            randomValues();
            updateHtml();
        }
    });

    randomValues();
    updateHtml();
});