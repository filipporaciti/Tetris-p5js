let canvasWidth = side*10 +1 // 10
let canvasHeight = side*15 +1 // 15

const timeInterval = 800

var canvasY = 120

let item
let press = false

let score = 0

let spawn = (canvasWidth-1)/2 - side

// touch
let startX = 0
let startY = 0
let touchMov = ''



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




function touchStarted() {
  touchMov = ''
  startX = mouseX
  startY = mouseY
  
}

function touchEnded() {

  if(startX < mouseX && ((mouseX-startX) > Math.pow(Math.pow(mouseY-startY, 2), 0.5))){
    touchMov = 'r'
  }else if(startX >= mouseX && ((startX-mouseX) > Math.pow(Math.pow(mouseY-startY, 2), 0.5))){
    touchMov = 'l'
  }else if(startY < mouseY && ((mouseY-startY) > Math.pow(Math.pow(mouseX-startX, 2), 0.5))){
    touchMov = 'b'
  }else if(startY >= mouseY && ((startY-mouseY) > Math.pow(Math.pow(mouseX-startX, 2), 0.5))){
    touchMov = 'u'
  }
  itemXaxisMovement()
}





function itemXaxisMovement(){
  if(keyIsPressed == true || touchMov != ''){

    if ((key == "ArrowLeft" || key == "a" || touchMov == 'l') && !press) {
      item.move('l')
    }
    if ((key == "ArrowRight" || key == "d" || touchMov == 'r') && !press) {
      item.move('r')
    }
    if ((key == "ArrowDown" || key == "s" || touchMov == 'b') && !press) {
      item.move('b')
    }
    if ((key == "ArrowUp" || key == "w" || touchMov == 'u') && !press) {
      item.rotateItem()
    }
    press = true
    touchMov = ''
  }else{
    press = false
  }

}






function windowResized() {
  let canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2-width/2, canvasY)

}

