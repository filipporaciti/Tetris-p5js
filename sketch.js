const canvasWidth = side*10 +1 // 10
const canvasHeight = side*15 +1 // 15

const timeInterval = 800

var canvasY = 100

let item
let press = false

let score = 0

let spawn = (canvasWidth-1)/2 - side





function setup() {
    let canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.position(windowWidth/2-width/2, canvasY)
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

    if ((key == "ArrowLeft" || key == "a") && !press) {
      item.move('l')
    }
    if ((key == "ArrowRight" || key == "d") && !press) {
      item.move('r')
    }
    if ((key == "ArrowDown" || key == "s") && !press) {
      item.move('b')
    }
    if ((key == "ArrowUp" || key == "w") && !press) {
      item.rotateItem()
    }
    press = true
  }else{
    press = false
  }

}






function windowResized() {
  let canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2-width/2, canvasY)
}

