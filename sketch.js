const canvasWidth = side*10 +1
const canvasHeight = side*15 +1
//const canvasHeight = 301
const timeInterval = 900

let item
let press = false

let score = 0

let spawn = (canvasWidth-1)/2 - side





function setup() {
    let canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.position(windowWidth/2-width/2, 100)
    items = new AllItems()
    item = new FigureItem(spawn, 0)
    items.addItem(item)
    gameInterval = setInterval(() => item.gravity(), timeInterval) // il setInterval esegue un'azione ogni "timer" millisecondi
    score = 0
  }
  
function draw() {
  background(200);
  items.show()
  itemXaxisMovement()

  

}
















function itemXaxisMovement(){
  if(keyIsPressed == true){

    if (key == "ArrowLeft" && !press) {
      item.move('l')
    }
    if (key == "ArrowRight" && !press) {
      item.move('r')
    }
    if (key == "ArrowDown" && !press) {
      item.move('b')
    }
    if (key == "ArrowUp" && !press) {
      item.rotateItem()
    }
    press = true
  }else{
    press = false
  }

}






function windowResized() {
  let canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2-width/2, 100)
}

