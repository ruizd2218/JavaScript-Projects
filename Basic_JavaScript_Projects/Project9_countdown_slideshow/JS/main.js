var SlideIndex = 1; //sets SlideIndex to 1
showSlides(SlideIndex); //runs the showSlides function with the paramaters of what slide index is

function plusSlides(n) {  
  showSlides(SlideIndex += n); //adds to SlideIndex everytime plusslide is called
}

function currentSlide(n) {
  showSlides(SlideIndex = n); //this function is to set the slide index to whatever n is.
}

function showSlides(n) {
  var i; //declares variable i
  var slides = document.getElementsByClassName("mySlides");  //sets slides to the class element "mySlides"
  var dots = document.getElementsByClassName("dot"); //sets dots to class element "dot"
  if (n > slides.length) {SlideIndex = 1}
  if (n < 1) {SlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[SlideIndex-1].style.display = "block";
  dots[SlideIndex-1].className += " active";
}

function countdownFunction() {
    var seconds = document.getElementById("seconds").value; //takes value from "seconds" input variable
    function tick() { 
        seconds = seconds - 1; //setting seconds to 1 less than it normally is, to start the timer more accurately 
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1) { //when the timer is on 0 for an entire second it will meet the condition of the if statement
            alert("Time's Up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}
    
