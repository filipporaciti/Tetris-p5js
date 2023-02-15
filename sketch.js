const canvasWidth = 600
const canvasHeight = 600
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
  items.show()
  itemXaxisMovement()
}


function windowResized() {
  let canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2-width/2, 100)
}




function itemXaxisMovement(){
  if(keyIsPressed == true){
    console.log(key)
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
  if(item.y < height-item.getBottomBlock()){
    item.y += side
  }else{
    item = new FigureItem(width/2-60, 0)
    items.addItem(item)
  }

  document.getElementById("score").innerHTML = score
  
}


