class allItems{
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

    checkWin(item){

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


                                            // if(item.y+(rowItem*side)+side == it.y+(row*side)){ // to bottom chech
                                            //     if(item.x+(colItem*side) == it.x+(col*side)){ // to right chech
                                            //         if(item.x+(colItem*side) == it.x+(col*side)){ // to left chech
                                            //             return true
                                            //         }
                                            //     }
                                            // }


                                            // if(item.y+(rowItem*side)+side+side > it.y+(row*side) && item.y+(rowItem*side) < it.y+(row*side)){ // to bottom chech
                                            //     if(item.x+(colItem*side)+side > it.x+(col*side) && item.x+(colItem*side)-side < it.x+(col*side)){ // to right chech
                                            //         console.log('2222')
                                            //         if(item.x+(colItem*side)-side < it.x+(col*side) && item.x+(colItem*side)+side > it.x+(col*side)){ // to left chech
                                            //             return true
                                            //         }
                                            //     }
                                            // }
                                            
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