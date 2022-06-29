import Board from "./models/Board.js";
import BoardView from "./views/BoardView.js";


//MVC CONTROLADOR

window.addEventListener("load", controller);

function controller(){
    let canvas = document.querySelector("#canvas");
    let board = new Board(800,400);
    
    let boardView = new BoardView(canvas, board);
}