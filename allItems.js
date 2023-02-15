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

    collide(item){
        let stop = false

        for(let it of this.items){
            for(let row=0; row < it.pattern.length; row ++){
                for(let col=0; col < it.pattern[row].length; col ++){
                    if(it.pattern[row][col] == 1){
                    // let r = new TetrisRect(this.x+(col*side),this.y+(row*side),{r:200,g:0,b:0})
                        // console.log(item.y)
                        // console.log(it.y+(row*side))
                        if(item.y > it.y+(row*side)+side+side){
                            console.log('false')
                        }
                        
                    }
                }
            }
        }
        



        return stop

    }
}