import Board from "./models/Board.js";
import BoardView from "./views/BoardView.js";
import Bar from "./models/Bar.js";
import Ball from "./models/Ball.js";

let canvas = document.querySelector("#canvas");
let board = new Board(800,400);

let positionMiddleY = board.getHeight/2 - 60;

let barLeft = new Bar(10,positionMiddleY,20,100,"red",board)
let barRight = new Bar(770,positionMiddleY,20,100,"red",board)

let boardView = new BoardView(canvas, board);
let ball = new Ball(board.getWidth/2, board.getHeight/2 , 10, board);

boardView.draw();








//Evento para escuchar cuando una tecla es presionada.
document.addEventListener('keydown',(event)=>{

    event.preventDefault();

    //console.log(event.key);
    
    if(event.key=="w"){
        barLeft.up();
        // console.log(barLeft.y);
    }else if(event.key=="s"){
        barLeft.down();
        // console.log(barLeft.y);
    }else if(event.key=="ArrowUp"){
        barRight.up();
    }else if(event.key=="ArrowDown"){
        barRight.down();
    }

})





//MVC CONTROLADOR

window.requestAnimationFrame(controller);

function controller(){
    boardView.play();
    window.requestAnimationFrame(controller);
}

