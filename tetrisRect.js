const side = 30



class TetrisRect{
    constructor(x=0, y=0, color={r:0, g:0, b:0}){
        this.x = x
        this.y = y
        this.color = color
        this.side = side

        

    }

    show() {
        fill(100)
        rect(this.x, this.y, this.side, this.side)
        

    }

}