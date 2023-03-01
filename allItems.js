class AllItems{
    constructor(){
        this.items = []
    }

    addItem(item){
        this.items.push(item)
    }

    show(){
        for(let x of this.items){
            x.show()
        }
    }

    gameOver(){

        this.show()

        if(this.collide(item)){
            clearInterval(gameInterval)
            alert('Game Over')
            //addClassifica(score)
            this.reset()
        }


    }

    reset(){
        items = new AllItems()
        item = new FigureItem(spawn, 0)
        items.addItem(item)
        gameInterval = setInterval(() => item.gravity(), timeInterval) // il setInterval esegue un'azione ogni "timer" millisecondi
        score = 0
    }




    deleteRow(rowDel){


        for(let it of this.items){
            for(let row=0; row < it.pattern.length; row ++){
                for(let col=0; col < it.pattern[row].length; col ++){
                    if(it.pattern[row][col] == 1){

                        if(it.y+(row*side) == rowDel){
                            it.pattern[row][col] = 0
                        }
                    }
                }
            }
        }

        this.show()
        this.moveRowDown(rowDel)


    }


    moveRowDown(rowDel){ // io faccio andare giu tutto l'item. invece devo far andare giu ogni singolo pezzo


        let patt = [
            [[1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
            [[1, 1, 0, 0], [1, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
            [[1, 0, 0, 0], [1, 0, 0, 0], [1, 1, 0, 0], [0, 0, 0, 0]],
            [[1, 0, 0, 0], [1, 1, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0]],
            [[1, 1, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
        ]

        let noBreakItem = []

        for(let it of this.items){
            let newPatt = it.pattern.slice() // per fare una copia dell'array
            for(let i=0; i < 4; i++){
                let checkPatt = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]

                for(let row=0; row < newPatt.length; row ++){
                    for(let col=0; col < newPatt[row].length; col ++){
                        checkPatt[row][col] = newPatt[col][3-row]
                    }
                }

                for(let p of patt){
                    if (JSON.stringify(p) == JSON.stringify(checkPatt)){
                        noBreakItem.push(it)
                        i = 5
                    }else{
                        newPatt = checkPatt.slice()
                    }
                }
            }
        }

        // move down if item is no break
        let s = 0
        for(let it of noBreakItem){
            s = side
            for(let row=0; row < it.pattern.length; row ++){
                for(let col=0; col < it.pattern[row].length; col ++){
                    if(it.pattern[row][col] == 1){
                        if(it.y+(row*side) <= rowDel-side){
                            it.y += s
                            s = 0
                        }
                    }
                }
            }
        }

        // change pattern of item if it's break

       
        let rowToDel = []
        let breakItems = []
        
        for(let it of this.items){
            let toAdd = true
            for(let noB of noBreakItem){
                if(JSON.stringify(it) == JSON.stringify(noB)){
                    toAdd = false
                }
            }
            if(toAdd){
                breakItems.push(it)
            }
        }


        for(let it of breakItems){
            for(let row=0; row < it.pattern.length; row ++){
                for(let col=0; col < it.pattern[row].length; col ++){
                    if(it.pattern[row][col] == 1){
                        if(it.y+(row*side) <= rowDel-side){
                            // row+1

                            // it.pattern[row+1][col] = it.pattern[row][col]

                            it.pattern.pop(row+1)
                            

                        }
                    }
                }
            }
        }

        

    }




    checkWin(){


        this.occupati = []
        let multipleDel = []

        for(let i=0; i<canvasHeight; i+= side){
            this.occupati.push(Array(parseInt(canvasWidth/side)).fill(0))
        }
      
        for(let it of this.items){
            for(let row=0; row < it.pattern.length; row ++){
                for(let col=0; col < it.pattern[row].length; col ++){
                    if(it.pattern[row][col] == 1){
                        
                        this.occupati[parseInt(it.y+(row*side))/side][parseInt(it.x+(col*side))/side] = 1

                    }
                }
            }
        }

        for(let i=0; i<parseInt(canvasHeight/side); i++){
            if(this.occupati[i].indexOf(0) == -1){
                multipleDel.push(i*side)
                score += 10
            }
        }
        


        if (multipleDel.length != 0){
            for (let i of multipleDel) this.deleteRow(i)
        }
    }


    


    collide(item){

        if (this.items.length == 1){
            return false
        }
        let stop = false
        for(let rowItem=0; rowItem < item.pattern.length; rowItem ++){
            for(let colItem=0; colItem < item.pattern[rowItem].length; colItem ++){
                if(item.pattern[rowItem][colItem] == 1){
                            for(let it of this.items.slice(0, -1)){
                                for(let row=0; row < it.pattern.length; row ++){
                                    for(let col=0; col < it.pattern[row].length; col ++){
                                        if(it.pattern[row][col] == 1){


                                            if(item.y+(rowItem*side)+side > it.y+(row*side) && item.y+(rowItem*side)-side < it.y+(row*side)){ // to bottom chech
                                                if(item.x+(colItem*side)+side > it.x+(col*side) && item.x+(colItem*side)-side < it.x+(col*side)){ // to right chech   
                                                    if(item.x+(colItem*side)-side < it.x+(col*side) && item.x+(colItem*side)+side > it.x+(col*side)){ // to left chech
                                                        return true
                                                    }
                                                }
                                            }


                                        }
                                    }
                                }
                }
            }
        }

        }
        
        return stop

    }
}