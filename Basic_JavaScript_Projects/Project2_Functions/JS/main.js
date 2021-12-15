function myFunction() {
    var sentence = "I am learning";//declaring sentence variable
    sentence += " a lot from this book!"//concatenates these words to our original sentence
    document.getElementById("Concatenate").innerHTML = sentence;//allows us to grab our button element from index.html and use it here
    window.alert(sentence);//displays it in an alert.
}
