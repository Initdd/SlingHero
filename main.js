// canvas
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d");

// coordinates
let radius = 40
let x = canvas.width/2
let y = canvas.height-radius
let velocity = -5 // how much to go each time
let enable = true

function drawCircle(xCoor, yCoor) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath();
    ctx.arc(xCoor, yCoor, radius, 0, 2 * Math.PI);
    ctx.stroke();
}

function temp() {
    drawCircle(x, y)
    y = y + velocity
}

function goUp() {
    if (enable) {
        setInterval(() => {temp()}, 50)
        enable = false
    }           
}
