const canvasWidth = 601
// const canvasHeight = 601
const canvasHeight = 301
const timeInterval = 900

let item
let press = false

let score = 0


function setup() {
    let canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.position(windowWidth/2-width/2, 100)
    items = new allItems()
    item = new FigureItem(width/2-60, 0)
    items.addItem(item)
    setInterval(() => itemGravityMovement(), timeInterval) // il setInterval esegue un'azione ogni "timer" millisecondi
    score = 0
  }
  
function draw() {
  background(200);
  
  if (items.collide(item)){
    item = new FigureItem(width/2-60, 0)
    items.addItem(item)
  }
  itemXaxisMovement()
  items.show()

}


function windowResized() {
  let canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2-width/2, 100)
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
    if (key == "Shift" && !press) {
      item.rotateItem()
    }
    press = true
  }else{
    press = false
  }

}




let itemGravityMovement = () => {
  if(item.bottomBlock(item.pattern)){
    item.y += side
  }else{
    item = new FigureItem(width/2-60, 0)
    items.addItem(item)
  }

  document.getElementById("score").innerHTML = score

}

