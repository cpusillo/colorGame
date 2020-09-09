var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
});

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
});


colorDisplay.textContent = pickedColor;


for(var i = 0; i < squares.length; i++){
    // Add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // Add click listeners to squares
    squares[i].addEventListener("click", function(){
        // Grab color of picked square
        var clickedColor = this.style.backgroundColor;
        // Compare color to pickedColor
        if (clickedColor === pickedColor){
            message.textContent = "Correct";
            resetButton.textContent = "Play again?";

            changeColors(clickedColor);
            h1.style.background = clickedColor;
        } 
        else { 
            this.style.backgroundColor = "#232323";
            message.textContent = "Try again";
        }
    });
}


function changeColors(color){
    // loop through all squares
    // change each color to change given color
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
    // Make an array
    var arr = [];
    // add num random colors to array
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    // return the array
    return arr;
}

function randomColor(){

   var r = Math.floor(Math.random() * 256);
   var g = Math.floor(Math.random() * 256);
   var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
   
}

resetButton.addEventListener("click", function(){
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    resetButton.textContent = "New Colors";

    h1.style.background = "#232323";
});