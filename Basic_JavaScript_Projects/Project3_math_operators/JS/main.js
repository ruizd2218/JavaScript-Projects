function myFunction1(x) { //decrements by 2
    x--;
    x--;
    document.getElementById("demo").innerHTML = "x";
    window.alert(x);
}

function myFunction2(x) { //increments by 1, adds 4 increments by 1 again, then subtracts 4.
    x++;
    var x = x+4;
    x++;
    var x = x-4;
    document.getElementById("demo").innerHTML = "x";
    window.alert(x);
}

function myFunction3(x) { //multiplies x by itself
    var result = x*x;
    document.getElementById("demo").innerHTML = "x";
    window.alert(result);
}

function myFunction4(x) { //decrements 2 times
    x--;
    x--;
    document.getElementById("demo").innerHTML = "x";
    window.alert(x);
}

function myFunction5(x) { //returns remainer of 13/x
    var x = 13%x;
    x--;
    document.getElementById("demo").innerHTML = "x";
    window.alert(x);
}

