var colors = generateRandomColors(6);
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var message = document.querySelector(".message");
var pickedColor = pickColor();
var rgb = document.getElementById("rgb");
    rgb.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function() {
       if(this.style.backgroundColor===pickedColor){
            changedColor(pickedColor);
            message.textContent = "Correct!!";
            h1.style.backgroundColor = pickedColor;
       }
        else{
            this.style.backgroundColor = "#232323"; 
            message.textContent = "Wrong!!";
        }
    });
}

function changedColor(color) {
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];
    for(var i = 0; i<num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r +", "+ g + ", " +b +")";
}