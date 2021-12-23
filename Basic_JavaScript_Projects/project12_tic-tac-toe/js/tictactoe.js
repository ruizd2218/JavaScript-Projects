//this variable keeps track of whose turn it is.
let activePlayer = 'X'; //they are always either X or O
//this array stores the past moves, we use this to determine win conditions
let selectedSquares = [];

//this function is for placing an x or o in a square
function placeXOrO(squareNumber) {
    //this condition ensures a square hasnt been selected already.
    //the .some() method is used to check each element selectedSquares array
    //to see if it contains the square number click on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //this variable retrieves the html element id that was clicked.
        let select = document.getElementById(squareNumber);
        //this condition checks whos turn it is.
        if (activePlayer === 'X') {
            //if activePlayer is = to X, the x.png is placed in HTML
            select.style.backgroundImage = 'url("./assets/images/x.png")';
            //Active player may only be 'X' or 'O' so if not X it must be O
        } else {
            //if activePlayer is = to O, the o.png is placed in HTML
            select.style.backgroundImage = 'url("./assets/images/o.png")'
        }
        //squareNumber and activePlayer are concatenated together and added to array
        selectedSquares.push(squareNumber + activePlayer);
        //this calls a function to check for win con
        checkWinCon();
        //this condition is for changing the active player
        if (activePlayer ==='X') {
            //if active player is 'X' change it to 'O'
            activePlayer = 'O';
        //if active player is anything other than 'X'/
        } else {
            //change the activePlayer to 'X'
            activePlayer = 'X';
        }
        
        //this function plays the placement sound
        audio('./assets/media/place.mp3');
        //this condition checks to see if it is computers turn
        if(activePlayer === 'O'){
            //this function disables clicking for computer choice
            disableClick();
            //this function waits 1 second before computer places image and enables click
            setTimeout(function (){ computersTurn(); }, 1000)
        }
        //returning true is needed for out computersTurn() function to work
        return true;
    }
    //this function results in a random square being selected
    function computersTurn() {
        //this boolean is needed for our while loop
        let success = false;
        let pickASquare;
        //this condition allows our while loop to keep trying if a square is selected already
        while(!success) {
            //a random number between 0 and 8 is selected
            pickASquare = String(Math.floor(Math.random() * 9));
            //if the random number evaluated returns true, the square hasnt been selected yet
            if (placeXOrO(pickASquare)) {
                //this line calls the function
                placeXOrO(pickASquare);
                //this changes our boolean and ends the loop
                success = true;
                };
            }
        }
    }

//this function parses the selectedSquares array to search
//for win conditions, drawWinLine function is called to draw line
//if condition is met.
function checkWinCon() {
    if      (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50,100,558, 100) }
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50,304,558, 304) }
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50,508,558, 508) }
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100,50,100, 558) }
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304,50,304, 558) }
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508,50,508, 558) }
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100,508,510, 90) }
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100,100,520,520) }
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50,100,558, 100) }
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50,304,558, 304) }
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50,580,558, 508) }
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100,50,100, 558) }
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304,50,304, 558) }
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508,50,508, 558) }
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100,508,510, 90) }
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100,100,520,520) }
    //this con checks for a tie if none of the above conditions reg and 9
    //squares are selecteed the code executes
    else if (selectedSquares.length >= 9) {
        audio('./assets/media/tie.mp3');
        setTimeout(function () { resetGame(); }, 1000);
    }

    //this function checks if an array includes 3 strings it is used to check for
    //each win con
    function arrayIncludes(squareA, squareB, squareC) {
        //these 3 variables will be used to check for 3 in a row
        const a = selectedSquares.includes(squareA)
        const b = selectedSquares.includes(squareB)
        const c = selectedSquares.includes(squareC)
        // if the 3 varaiables we pass are all included in our array true
        //is returned and our else if condition executes the drawWinLine function
        if (a === true && b === true && c === true) { return true }
    }
}


function disableClick() {
    //this makes the body unclickable
    body.style.pointerEvents = "none";
    //this makes our body clickable again after 1 second
    setTimeout(function() {body.style.pointerEvents="auto";}, 1000);
}

//this function takes a string parameter of a file path
function audio(audioURL) {
    //we creaate a new audio object and we pass the path as a parameter
    let audio = new Audio(audioURL);
    //play method plays the audio
    audio.play();
}
//this function utilizes html canvas to draw win lines
function drawWinLine (coordx1, coordy1, coordx2, coordy2) {
    //this line accesses our HTML canvas
    const canvas = document.getElementById("win-lines")
    //this line gives us access to methods and properties to use on canvas
    const c = canvas.getContext("2d")
    //this line indicaes where the start of a lines x axis is
    let x1 = coordx1,
        //this line indicates where the start of a lines y axis is 
        y1 = coordy1,
        //this line indicates where the start of a lines x axis is 
        x2 = coordx2,
        //this line indicates where the start of a lines x axis is 
        y2 = coordy2,
        //this variable stores temp x axis data we update in our animation loop
        x = x1,
        //this variable stores temp x axis data we update in our animation loop
        y = y1;

    function animateLineDrawing() {
        //this variable creates a loop
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //this method clears content from last loop iteration
        c.clearRect(0,0,608,608)
        //this method starts a new path
        c.beginPath();
        //this method moves us to a starting point for our line
        c.moveTo(x1, y1)
        //this method indicates the end point 
        c.lineTo(x, y)
        //this method sets the width of our line
        c.lineWidth = 10;
        //this method sets the color of our line
        c.strokeStyle = "rgba(70,255,33,.8)";
        //this method draws everything we laid out above
        c.stroke();
        //this condition checks if we've reached the endpoint
        if (x1 <= x2 && y1 <= y2) {
            //this condition adds 10 to the previous end x point
            if (x < x2) { x += 10; }
                //this condition adds 10 to the previous end x point
            if (y < y2) { y += 10; }
            //this condition cancels our animation loop
            //if we've reach the end points
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
            }
            if (x1 <= x2 && y1 >= y2) {
                if (x < x2) { x += 10;}
                if (y > y2) { y -= 10;}
                if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
            }
        }
    
    //this function clears our canvas after our win line is frawn
    function clear() {
        //this line starts our animation loop
        const animationLoop = requestAnimationFrame(clear);
        //this line clears our canvas
        c.clearRect(0,0,608,608);
        //this line stops our animation loop
        cancelAnimationFrame(animationLoop);
    }
    //this line disallows clicking while the win sound is playing
    disableClick();
    //this line plays the win sounds
    audio("assets/media/winGame.mp3");
    //this line calls our main animation loop
    animateLineDrawing();
    //this line waits 1 second then clears canvas, resets game, and allows clicking again
    setTimeout(function () { clear(); resetGame(); }, 1000);
}

function resetGame() {
    for (let i = 0; i<9; i++) {
        let square = document.getElementById(String(i))
        square.style.backgroundImage = ''
    }
    selectedSquares=[];
}