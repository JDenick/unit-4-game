// GLOBAL VARIABLES ****************
var crystal = {
    diamond:
    {
        name: "diamond",
        value: 0
    },
    ruby:
    {
        name: "ruby",
        value: 0
    },
    emerald:
    {
        name: "emerald",
        value: 0
    },
    amber:
    {
        name: "amber",
        value: 0
    }
};

var currentScore = 0;
var targetScore = 0;

var winCount = 0;
var lossCount = 0;


// FUNCTIONS ********************
var startNumber = function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var startGame = function(){
    
    // Reset the Current Score
    currentScore = 0;

    // Set the new Target Score (between 19 - 120)
    targetScore = startNumber(19, 120);

    // Set different values for each of the crystals (between 1 -12)
    crystal.diamond.value = startNumber(1, 12);
    crystal.ruby.value = startNumber(1, 12);
    crystal.emerald.value = startNumber(1, 12);
    crystal.amber.value = startNumber(1, 12);

    // Change the HTML to reflect all of changes
    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);

        // Testing / Debugging
        console.log("------------------");
        console.log("Target Score: " + targetScore);
        console.log("diamond: " + crystal.diamond.value + " | ruby: " + crystal.ruby.value + " | emerald: " + crystal.emerald.value + " | amber: " + crystal.amber.value);
        console.log("------------------");
}

// Respond to clicks on the crystals
var addValues  = function(crystal) {

    // Change currentScore
    currentScore = currentScore + crystal.value;

    // Change the html to reflect changes in current score
    $("#yourScore").html(currentScore);

    // Call the check function
    check();

    // Testing Console
    console.log("Your Score: " + currentScore);
}

// Check if User won or lost and reset the game
var check = function() {
    
    //check if currentScore is larger than targetScore
    if (currentScore > targetScore) {
        alert("Sorry.. You lost");
        console.log("You Lost");

        // add to loss counter
        lossCount++;

        // change loss count
        $('#lossCount').html(lossCount);

        // restart game
        startGame();
    } 

    else if (currentScore === targetScore) {
        alert("WINNER WINNER CHICKEN DINNER! YOU WON!");
        console.log("You Won");

        // add to loss counter
        winCount++;

        // change loss count
        $('#winCount').html(winCount);

        // restart game
        startGame();
    }
}

// MAIN PROCESS ********************
startGame()
$("#diamond").click(function(){
    addValues(crystal.diamond);
});
$("#ruby").click(function(){
    addValues(crystal.ruby);
});
$("#emerald").click(function(){
    addValues(crystal.emerald);
});
$("#amber").click(function(){
    addValues(crystal.amber);
});
