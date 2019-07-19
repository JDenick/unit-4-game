alert("test");

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
var lossCOunt = 0;


// FUNCTIONS ********************
var startNumber = function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var startGame = function(){
    
    // Reset the Current Score
    var currentScore = 0;
    // Set the new Target Score (between 19 - 120)
    targetScore = startNumber(19, 120);
    // Set different values for each of the crystals (between 1 -12)
    crystal.diamond.value = startNumber(1, 12);
    crystal.ruby.value = startNumber(1, 12);
    crystal.emerald.value = startNumber(1, 12);
    crystal.amber.value = startNumber(1, 12);
    // Change the HTML to reflect all of changes


        // Testing / Debugging
        console.log("------------------");
        console.log("Target Score: " + targetScore);
        console.log("diamond: " + crystal.diamond.value + " | ruby: " + crystal.ruby.value + " | emerald: " + crystal.emerald.value + " | amber: " + crystal.amber.value);
        console.log("------------------");
}





// MAIN PROCESS ********************
startGame()
$("#diamond").click(function(){
    alert("diamond");
});
$("#ruby").click(function(){
    alert("ruby");
});
$("#emerald").click(function(){
    alert("emerald");
});
$("#amber").click(function(){
    alert("amber");
});
