

class FigureItem{
    constructor(x, y){
        this.pattern = [[1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
        this.x = x
        this.y = y
        this.color = {r:200,g:0,b:0}
        this.randomPattern()

    }

    show(){
        for(let row=0; row < this.pattern.length; row ++){
            for(let col=0; col < this.pattern[row].length; col ++){
                if(this.pattern[row][col] == 1){
                    let r = new TetrisRect(this.x+(col*side),this.y+(row*side),this.color)
                    r.show()
                }
            }
        }
    }

    randomPattern(){
        let patt = [
            [[[1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]], {r:0, g:0, b:255}],
            [[[1, 1, 0, 0], [1, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]], {r:255, g:255, b:0}],
            [[[1, 0, 0, 0], [1, 0, 0, 0], [1, 1, 0, 0], [0, 0, 0, 0]], {r:0, g:255, b:0}],
            [[[1, 0, 0, 0], [1, 1, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0]], {r:0, g:255, b:230}],
            [[[1, 1, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]], {r:255, g:165, b:0}]
        ]
        let randomItem = random(patt)
        this.pattern = randomItem[0]
        this.color = randomItem[1]
    }

    rotateItem(){
        let newPatt = [[1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
        for(let row=0; row < this.pattern.length; row ++){
            for(let col=0; col < this.pattern[row].length; col ++){
                newPatt[row][col] = this.pattern[col][3-row]
            }
        }

        let oldPatt = this.pattern // tutto questo solo per il collide
        this.pattern = newPatt // tutto questo solo per il collide

        if(this.bottomBlock(newPatt) && this.leftBlock(newPatt, 0) && this.rightBlock(newPatt, 0) && !items.collide(item)){ // lo faccio per evitare che ci siano bug se giri l'item troppo in basso nel bottom
            this.pattern = newPatt
        }else{
            this.pattern = oldPatt
        }
        

    }

    move(direction){    
        if(direction == 'l' && this.leftBlock(this.pattern, side)){
            // this.x -= side
            // if(items.collide(item)){
            //     this.x += side
            // }
            this.x -= side
            if(items.collide(item)){
                this.x += side
                
            }
            return true
        }else if(direction == 'r' && this.rightBlock(this.pattern, side)){
            // this.x += side
            // if(items.collide(item)){
            //     this.x -= side
            // }
            this.x += side
            if(items.collide(item)){
                this.x -= side
                
            }
            return true
        // }else if(direction == 'b' && this.bottomBlock(this.pattern) && !items.collide(item)){
        }else if(direction == 'b' && this.bottomBlock(this.pattern)){
            this.y += side
            if(items.collide(item)){
                this.y -= side
                return false
            }
            return true
        }
        return false
    }

    rightBlock(p, controllo){ 
        for(let row=0; row < p.length; row ++){
            for(let col=0; col < p[row].length; col ++){
                if(p[row][col] == 1){
                    if (this.x+(col*side)+controllo > width-2){ // il -2 è pk la larghezza del canvas è un pizel piu lungo
                        return false
                    }
                }
            }
        }
        return true
    }


    leftBlock(p, controllo){ 
        for(let row=0; row < p.length; row ++){
            for(let col=0; col < p[row].length; col ++){
                if(p[row][col] == 1){
                    if (this.x+(col*side)-controllo < 0){
                        return false
                    }
                }
            }
        }
        return true
    }
    

    bottomBlock(p){
        for(let row=0; row < p.length; row ++){
                if(p[row].indexOf(1) != -1){
                    if (this.y+(row*side)+side+side > height){
                        return false
                    }
                }
            }
        return true
    }

    gravity(){
        if(!this.move('b')){
            item = new FigureItem(width/2-60, 0)
            items.addItem(item)
          }
          document.getElementById("score").innerHTML = score

          console.log(items.collide(item))
    }
}