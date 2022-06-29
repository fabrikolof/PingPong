export default class Ball{

    constructor(x,y,radius,board){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.board = board;
        this.speed = 8;
        this.speedY = 0;
        this.speedX = 5;
        this.kind = "circle";
        this.direction = 1; // Direccion hacia la derecha.
        this.bounce_angle = 0;
        this.max_bounce_angle = Math.PI/12;

        board.ball = this;
    }

    get width(){
        return this.radius*2;
    }

    get height(){
        return this.radius*2;
    }

}
