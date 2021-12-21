function Call_Loop() {
    var x = 1;
    var y = "X is equal to 1!";
    var counter = 0
    counter = 0;
    while(x = 1) {
        document.write(y);
        counter++;
        if (counter == 8) { // if the counter reaches 8, break the loop
            break;
        }
    }  
    
}

function strLength() {
    var str1 = "How many characters does this sentence have? Answer:";
    document.getElementById("lenofstr").innerHTML = str1 +" "+ str1.length; //displays str1 + str1.length - which displays the length of the string. 
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass"] //array of instruments
Instruments[4] = "Violin";
Instruments[5] = "Flute"; //appends an object to the array at the desired index
Instruments[8] = "Bongos"; //skips two index spaces and will return "undefined" in each space until the index is reached
var Content = ""; //variable that will change to each instrument each time an instrument is listed
let y; //variable for the index number of the array that will be displayed at a given moment
function for_Loop() { //declaring loop
    for (y = 0; y < Instruments.length; y++) { //sets y to 0, and for each time y is less than the length of the instruments array, it will increment y by 1 
        Content += Instruments[y] + "<br>"; //creates the string that will be displayed. content is equal to an instrument + a word break to space out the instruments
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

const c = "This is a constant token.";
function constant_function() {
    const bird = {type: "macaw", color: "blue", secondColor: "yellow"}
    bird.color = "red";
    const bird1 = {type: "cockatiel", color: "grey", secondColor: "yellow"}
    document.getElementById("Constant").innerHTML = "The bird is a " + bird1.type + " and it is " + bird1.color + " and " + bird1.secondColor;
}

function returnFunction(name) {
    return "Hello " + name;
}
document.getElementById("demo").innerHTML = returnFunction("Human");

let car = {
    make: "Honda ",
    model: "Accord ",
    year: "2003 ",
    color: "red ",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();
