class AllItems{
    constructor(){
        this.items = []
        this.occupati = []

        for(let i=0; i<canvasHeight; i+= side){
            this.occupati.push(Array(parseInt(canvasWidth/side)).fill(0))
        }
    }

    addItem(item){
        this.items.push(item)
    }

    show(){
        for(let x of this.items){
            x.show()
        }
    }



    deleteRow(row){

        

    }




    checkWin(){
      
        for(let it of this.items){
            for(let row=0; row < it.pattern.length; row ++){
                for(let col=0; col < it.pattern[row].length; col ++){
                    if(it.pattern[row][col] == 1){
                        
                        this.occupati[parseInt(it.y+(row*side))/side][parseInt(it.x+(col*side))/side] = 1
                        if(this.occupati[parseInt(it.y+(row*side))/side].indexOf(0) == -1){
                            // return parseInt(it.y+(row*side))/side
                            return it.y+(row*side)
                        }

                    }
                }
            }
        }
        

        return -1
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