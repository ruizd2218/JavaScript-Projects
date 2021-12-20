var x = "This is the first part of the string, "; // declaring variables for concat strings
var y = "and this is the second part.";
var z = x.concat(y); //x.concat(y) concatenates x and y variables
function Concatenate() { //displays concatenated sentences
    document.getElementById("demo").innerHTML = z;
}

function SliceMethod() { //slice method slices a certain range from a string
    var Sentence = "This is a long sentence, but it will be sliced using my slice function.";
    var section = Sentence.slice(24,75); //slices from character 24 - 75, using 75 as a high number to ensure the entire end of string is cut
    document.getElementById("slice").innerHTML = section;
}

function UpperMethod() { //uppercases whole string
    var sentence = "this sentence is lowercased originally, in the code, but using the toUpperCase(), it displays as uppercase.";
    var UpSentence = sentence.toUpperCase();
    document.getElementById("upper").innerHTML = UpSentence;
}

function toString() { //converts number to string
    var a = 256;
    document.getElementById("tostring").innerHTML = a.toString();
}

function precisionMethod() { //precisely targets a certain range of a number chosen, i chose 18 characters out of the number.
    var a = 11243.1251231127965834;
    document.getElementById("precision").innerHTML = a.toPrecision(18);
}

function toFixed() { //rounds the number to a specified number of decimals
    var num = 5.56789;
    var n = num.toFixed(2);
    document.getElementById("fixed").innerHTML = n;
}