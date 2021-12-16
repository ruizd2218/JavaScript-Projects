function my_Dictionary() { //declaring function
    var Animal = {
        species:"Dog", //setting KVP's
        color:"Black",
        breed:"Labrador",
        age:5,
        sound:"Bark!"
    };
    delete Animal.sound; //deleting the "sound" key before it can be displayed.
    document.getElementById("Dictionary").innerHTML = Animal.sound;
}

