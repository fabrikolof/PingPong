export default class Bar{

    constructor(x,y,width,height,color,board){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.board = board;
        this.speed = 20;
        this.kind = "rectangle"
        this.board.bars.push(this);
    }

    up(){
        if(0 < this.y){
            this.y -= this.speed;
        }
    }

    down(){
        if(this.board.height-100 > this.y){
            this.y += this.speed;
        }
    }

}