import Board from "./models/Board.js";
import BoardView from "./views/BoardView.js";
import Bar from "./models/Bar.js";


//MVC CONTROLADOR

window.addEventListener("load", controller);

function controller(){
    let canvas = document.querySelector("#canvas");
    let board = new Board(800,400);

    let positionMiddleY = board.getHeight/2 - 60;

    let barLeft = new Bar(10,positionMiddleY,20,100,"red",board);
    let barRight = new Bar(770,positionMiddleY,20,100,"red",board)

    let boardView = new BoardView(canvas, board);
    
    boardView.draw();
}