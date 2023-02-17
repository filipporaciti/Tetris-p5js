const canvasWidth = 181
const canvasHeight = 421
//const canvasHeight = 301
const timeInterval = 900

let item
let press = false

let score = 0






function setup() {
    let canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.position(windowWidth/2-width/2, 100)
    items = new AllItems()
    item = new FigureItem(width/2-60, 0)
    items.addItem(item)
    gameInterval = setInterval(() => item.gravity(), timeInterval) // il setInterval esegue un'azione ogni "timer" millisecondi
    score = 0
  }
  
function draw() {
  background(200);
  items.show()
  itemXaxisMovement()

  let r = items.checkWin(item)
  if(r != -1){
      items.deleteRow(r)
  }

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

