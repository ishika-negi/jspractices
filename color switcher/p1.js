const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

// Create a map from button id to color value
const colorMap = {
  blue: "rgb(136, 219, 249)",
  pink: "pink",
  orange: "rgb(250, 214, 147)",
  green: "rgb(142, 245, 142)"
};

buttons.forEach(function(button) {
  button.addEventListener('click', function(e) {
    const color = colorMap[e.target.id];  // get the actual color value
    if(color) {
      body.style.backgroundColor = color;  // set it to the body background
    }
  });
});
