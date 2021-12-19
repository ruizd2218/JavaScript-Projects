function my_Function() { //declaring function
    var Age, ofAge; //
    Age = document.getElementById("Age").value; //.value after .getElementById allows for us to collect a value from the ID.
    ofAge = (Age < 18) ? "You are not of age":"You are of age"; //if age is less than 18, it displays first option. if anything else it displays the second.
    document.getElementById("Age1").innerHTML = ofAge; //.innerHTML allows us to affect the Age1 value which then displays the ofAge variable (which is the decision of whether or nto they are of age.)
}   

function Vehicle(Make, Model, Year, Color) { //declaring class
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //creating class instances
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() { //declaring new function
    document.getElementById("Keywords_and_constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year; //displays erik's entire vehicle parameters using concatenation
}

var int = int; 
document.write(int); //returns "undefined" because of the use of reserved words

function Parakeet(Type, Color, Age, Name) { //declaring class
    this.Type = type;
    this.Color = color;
    this.Age = age;
    this.Name = name;
}

const myParakeet = new Parakeet("Budgie", "Blue", "2", "Bubbles"); //class instances
const myParakeet2 = new Parakeet("Budgie", "Yellow", "2", "Lemon");

function countFunction() { //declaring count function
    document.getElementById("Counting").innerHTML = NestedFunction(); //displays the result in the "p" text
    function NestedFunction() { //function inside of a function
        var start_point = 9; //declares start point variable
        function NestedFunction2() {
            start_point += 1;//adds one to start point
        }
        NestedFunction2(); //runs function.
        return start_point; //returns the start point variable to the parent function.
    }
}