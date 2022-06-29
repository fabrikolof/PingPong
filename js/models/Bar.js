export default class Bar{

    constructor(x,y,width,height,color,board){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.board = board;
        this.kind = "rectangle"
        this.board.bars.push(this);
    }

}