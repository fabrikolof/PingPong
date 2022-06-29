import draw from "../utils/draw.js";

      //Vista del tablero
export default class BoardView{ 

    constructor(canvas, board){
        this.canvas = canvas;
        this.board = board;
        this.canvas.width = board.width;
        this.canvas.height = board.height;
        this.ctx = canvas.getContext("2d");
    }

    clean(){
        this.ctx.clearRect(0,0,this.board.width, this.board.height);
    }

    draw(){
        //console.log(this.board.elements);
        for(let i =  this.board.elements.length -1 ; i >= 0; i--) {
            let elementOfBoard = this.board.elements[i];
            draw(this.ctx, elementOfBoard);
        }
    }

    play(){
        this.clean();
        this.draw();
    }


}