

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
        if(this.y < height-this.getBottomBlock()-side){ // lo faccio per evitare che ci siano bug se giri l'item troppo in basso nel bottom
            let newPatt = [[1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
            for(let row=0; row < this.pattern.length; row ++){
                for(let col=0; col < this.pattern[row].length; col ++){
                    newPatt[row][col] = this.pattern[col][3-row]
                }
            }
            this.pattern = newPatt
        }

    }

    move(direction){
        if(direction == 'l' && this.x > 0-this.getLeftBlock()){
            this.x -= side
        }else if(direction == 'r' && this.x < width-this.getRightBlock()){
            this.x += side
        }else if(direction == 'b' && this.y < height-this.getBottomBlock()){
            this.y += side
        }
    }

    getBottomBlock(){
        let block = 0
        for(let row=0; row < this.pattern.length; row ++){
            if(this.pattern[row].indexOf(1) != -1){
                block += side
            }
        }
        return block
    }


    
    getLeftBlock(){
        let block = 0
        if(this.pattern[0][0] || this.pattern[1][0] || this.pattern[2][0] || this.pattern[3][0]){
            block = 0
        }else if(this.pattern[0][1] || this.pattern[1][1] || this.pattern[2][1] || this.pattern[3][1]){
            block += side
        }else if(this.pattern[0][2] || this.pattern[1][2] || this.pattern[2][2] || this.pattern[3][2]){
            block += side
        }else if(this.pattern[0][3] || this.pattern[1][3] || this.pattern[2][3] || this.pattern[3][3]){
            block += side
        }

        return block
    }
    
    getRightBlock(){
        let block = 0
        if(this.pattern[0][0] || this.pattern[1][0] || this.pattern[2][0] || this.pattern[3][0]){
            block = 30
        }
        if(this.pattern[0][1] || this.pattern[1][1] || this.pattern[2][1] || this.pattern[3][1]){
            block = 60
        }
        if(this.pattern[0][2] || this.pattern[1][2] || this.pattern[2][2] || this.pattern[3][2]){
            block = 90
        }
        if(this.pattern[0][3] || this.pattern[1][3] || this.pattern[2][3] || this.pattern[3][3]){
            block = 120
        }
        return block
    }

}