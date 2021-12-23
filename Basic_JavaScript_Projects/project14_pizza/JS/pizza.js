function getReceipt() {
    //this initializes our string so it can get passed from
    //function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:</h3>"
    var runningTotal = 0; 
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size"); 
    for (var i = 0; i < sizeArray.length; i++) { //for loop for variable i. if i is less than sizeArray.length then we continue running the loop and increment i by 1 each time
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
         sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    //runningtotal becomes the total of the pizza size
    runningTotal = sizeTotal;
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    //these variables will get passed on to each function
    getTopping(runningTotal,text1);

    //function to add toppings to the pizza
    function getTopping(runningtTotal, text1) {
        //variable to keep track of topping price
        var toppingTotal=0;
        //array to keep track of toppings
        var selectedTopping = [];
        var toppingArray = document.getElementsByClassName("toppings");
        //for loop for variable j = 0. if j is less than toppingArray, then we can keep incrementing it by 1.
        for (var j = 0; j < toppingArray.length; j++) {
            if (toppingArray[j].checked) {
                selectedTopping.push(toppingArray[j].value); //this adds toppings to the Array.
                console.log("selected topping item: ("+toppingArray[j].value+")");
                text1 = text1+toppingArray[j].value+"<br>"; 
            }
        }
        var toppingCount = selectedTopping.length; //the value of topping count becomes the length selectedTopping
        if(toppingCount > 1) { //if the number is greater than one, it -1, because of the deal that we have
            toppingTotal = (toppingCount - 1);
        } else {
            toppingTotal = 0;
        }
        runningTotal = (runningTotal + toppingTotal);
        console.log("total selected topping items: "+toppingCount);
        console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
        console.log("topping text1: "+text1);
        console.log("Purchase Total: "+"$"+runningTotal+".00");
        document.getElementById("showText").innerHTML=text1; //showText now is edited to be text1
        document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+//this now shows the total price in an <h3> element below
            runningTotal+".00"+"</strong></h3>";
    }
}
