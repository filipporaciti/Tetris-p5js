const canvasWidth = 600
const canvasHeight = 600

let box



function setup() {
    createCanvas(canvasWidth, canvasHeight);
    box = new TetrisRect(10, 10, 30, {r:110, g:110, b:110})
  }
  
  function draw() {
    background(200);
    box.show()
  }