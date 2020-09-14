/* ====== Declare and initialize our variables ====== */
var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var header = document.querySelector("header");
var resetButton = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");

// Set our winning color.
colorDisplay.textContent = pickedColor;

runColors();

/* ====== Set our initial game state ====== */
function runColors() {
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
}

/* ====== Function to change the squares' background colors ====== */
function changeColors(color){
    // loop through all squares
    // change each color to change given color
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
};


/* ====== Function to pick a random winning color ====== */
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
  };
  
  /* ====== Generate an array of our random colors ====== */
  function generateRandomColors(num){
      // Make an array
      var arr = [];
      // add num random colors to array
      for(var i = 0; i < num; i++){
          // Call randomColor() to pull formatted RGB strings.
          arr.push(randomColor());
      }
      // return the array
      return arr;
  }
  
  /* ====== Generate and format our random RGB values ====== */
  function randomColor(){
      // Define three random values between 1-255.
     var r = Math.floor(Math.random() * 256);
     var g = Math.floor(Math.random() * 256);
     var b = Math.floor(Math.random() * 256);
  
     // Return a string of properly formatted RGB codes
      return "rgb(" + r + ", " + g + ", " + b + ")";
     
  };

/* ====== Determine our button's functions ====== */

// Loop through our array of buttons
for(var i = 0; i < modeBtns.length; i++){
    // Add an event listener to our buttons based on loop position
    modeBtns[i].addEventListener("click", function(){
        // Control for predetermined "selected" class.
        modeBtns[0].classList.remove("selected");
        modeBtns[1].classList.remove("selected");

        // Add the selected class to the button clicked, determined by "this" keyword.
        this.classList.add("selected");
        
        // If the clicked button is easy, set numSquares = 3, else 6.
        this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;

        // Call our custom reset function
        reset();
    });
}

/* ====== Set our reset function properties ====== */
function reset(){
    
    console.log(numSquares);
    // Generate new random colors based on how many squares we need.
    colors = generateRandomColors(numSquares);
    // Set our winning color.
    pickedColor = pickColor();
    // Display our winning color.
    colorDisplay.textContent = pickedColor;
    // Stylize our background color.
    h1.style.backgroundColor = "#3498db";

    // Loop through our squares and set their color programmatically.
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }

    // Change our reset button text depending on when it is clicked.
    resetButton.textContent = "New Colors";
    
    // Wipe out our message content.
    message.textContent = " ";
}

/* ====== Set our resetButton function ====== */
resetButton.addEventListener("click", function(){
    reset();
});



