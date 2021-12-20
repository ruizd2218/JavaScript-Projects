var globalVar = "This is a global Variable";

function myFunction() { //declaring function that displays local variables on the button element
    window.alert("Alert!")
    var LocalVar = "This is a local Variable";
    document.getElementById("button1").innerHTML = LocalVar;
}

function myFunction1() { // same as the last function but displays a different variable
    window.alert("Good Job!")
    var LocalVar = "Well done!"
    document.getElementById("button2").innerHTML = LocalVar;
}

function greetFunction() { //displays greeting
    if (new Date().getHours() < 18) { //using Date().getHours() phrase, that allows us to return the hour in the specified date according to the local time
        document.getElementById("greeting").innerHTML = "How are you today?";
    }
}

function ifStatements() { //if 10 is less than 16, displays a string
    if (10 < 16)
        document.getElementById("numbers").innerHTML = "10 is less than 16.";
}

function ageFunction() { //checks if you are old enough to vote.
    Age = document.getElementById("AgeValue").value;
    if (AgeValue >= 18) {
        Vote = "You are old enough to vote.";
    }
    else {
        Vote = "You are NOT old enough to vote.";
    }
    document.getElementById("AgeBack").innerHTML = Vote;
}

function timeFunction() { //tells you what the time of day is based off of local pc time
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is the morning";
    }
    else if (Time >= 12 == Time < 18) {
        Reply ="It is the afternoon";
    }
    else {
        Reply = "It is the evening";
    }
    document.getElementById("timeofday").innerHTML = Reply;


}