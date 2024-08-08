let button = document.getElementById('bttn-1');
let colors = ["green" , "red","pink","black","blue","brown","lightgreen"];
let colorIndex = 0
button.addEventListener("click", function() {
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
});