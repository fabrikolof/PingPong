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

    draw(){
        for(let i =  this.board.elements.length -1 ; i >= 0; i--) {
            let elementOfBoard = this.board.elements[i];
            draw(this.ctx, elementOfBoard);
        }
    }
}