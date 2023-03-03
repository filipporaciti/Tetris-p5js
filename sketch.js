const canvasWidth = side*10 +1 // 10
const canvasHeight = side*15 +1 // 15

const timeInterval = 800

var canvasY = 100

let item
let press = false

let score = 0

let spawn = (canvasWidth-1)/2 - side

// touch
let startX = 0
let startY = 0
let touchMov = ''
let bodyIsBlock = true



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

  if(startX < mouseX && ((mouseX-startX) > Math.pow(Math.pow(mouseY-startY, 2), 0.5)) && bodyIsBlock){
    touchMov = 'r'
  }else if(startX >= mouseX && ((startX-mouseX) > Math.pow(Math.pow(mouseY-startY, 2), 0.5)) && bodyIsBlock){
    touchMov = 'l'
  }else if(startY < mouseY && ((mouseY-startY) > Math.pow(Math.pow(mouseX-startX, 2), 0.5)) && bodyIsBlock){
    touchMov = 'b'
  }else if(startY >= mouseY && ((startY-mouseY) > Math.pow(Math.pow(mouseX-startX, 2), 0.5)) && bodyIsBlock){
    touchMov = 'u'
  }else{
    blockGame()
  }
  itemXaxisMovement()
}

function blockGame(){
  if((startX > 0 && startX < canvasWidth && startY > 0 && startY < canvasHeight) && (mouseX > 0 && mouseX < canvasWidth && mouseY > 0 && mouseY < canvasHeight)){
    document.getElementById('id-body').className = 'body-block';
    bodyIsBlock = true
  }else{
    document.getElementById('id-body').className = '';
    bodyIsBlock = false
  }
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

