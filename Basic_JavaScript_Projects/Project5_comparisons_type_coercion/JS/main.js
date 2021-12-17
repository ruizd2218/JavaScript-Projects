var x = "Word";
document.write(typeof x); //displays what type of variable "x" is

document.write(typeof 1521); //displays what type of variable 1521 is

document.write("10" + 5); //coercion of a string and number

function myFunction1() {
    document.getElementById("test1").innerHTML= 2E310; //displays infinity
}

function myFunction2() {
    document.getElementById("test2").innerHTML= -2E310; //displays -infinity
}

document.write(10 < 5); //displays false
document.write(5 < 10); //displays true

console.log(5 < 2); //displays false in the console
console.log(10+25); //displays 35 in the console

document.write(10+5==5); //displays false as 10+5 does not equal 5

var j = 12373;
var f = 15124;

document.write(j===f); //displays false because j is not = to f

document.write("-----------");//spacing
document.write(5 > 2 && 10 > 4); //displays true because 5 is greater than 2 and 10 is greater than 4
document.write(5 > 252 || 1 > 2); //displays false because both are false

function myFunction3() {
    document.getElementById("test3").innerHTML= !(5 > 10); //displays true because 5 is not greater than 10 and i used the ! not equal sign at the beginning
}