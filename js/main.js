import Board from "./models/Board.js";
import BoardView from "./views/BoardView.js";
import Bar from "./models/Bar.js";
import Ball from "./models/Ball.js";
import Player from "./models/Player.js";
import UI from "./views/UI.js";

let canvas = document.querySelector("#canvas");
let board = new Board(800,400);

let positionMiddleY = board.getHeight/2 - 60;

let barLeft = new Bar(10,positionMiddleY,20,100,"red",board);
let barRight = new Bar(770,positionMiddleY,20,100,"red",board);

let boardView = new BoardView(canvas, board);
let ui = new UI();
let ball = new Ball(board.getWidth/2, board.getHeight/2 , 10, board, ui);

boardView.draw();

//JUGADORES

let jugador1 = new Player("Jugador1");
let jugador2 = new Player("Jugador2");
jugador2.setPlace = false;
//true = izquierda
// console.log(jugador1.getPlace);
//false = derecha
// console.log(jugador2.getPlace);

//Evento para escuchar cuando una tecla es presionada.
document.addEventListener('keydown',(event)=>{

    // console.log(event);
    
    if(event.key=="w"){
        event.preventDefault();
        barLeft.up();
        // console.log(barLeft.y);
    }else if(event.key=="s"){
        event.preventDefault();
        barLeft.down();
        // console.log(barLeft.y);
    }else if(event.key=="ArrowUp"){
        event.preventDefault();
        barRight.up();
    }else if(event.key=="ArrowDown"){
        event.preventDefault();
        barRight.down();
    } else if (event.code == "Space") {
        event.preventDefault();
        board.playing = !board.playing;
    }

})

export function winner(bool){
    ui.showWiner(bool);
    resetPositions();
}

function resetPositions(){
    //reset bars
    barLeft.x = 10;
    barLeft.y = positionMiddleY;
    barRight.x = 770;
    barRight.y = positionMiddleY;

    //reset ball
    ball.x = board.getWidth/2;
    ball.y = board.getHeight/2;
    ball.speed = 8;
    ball.speedY = 0;
    ball.speedX = 5;
    ball.bounce_angle = 0;
    ball.max_bounce_angle = Math.PI/12;

    //pause
    setTimeout(() => {
        board.playing = !board.playing;
    }, 30);

}




//CONTROLADOR
window.requestAnimationFrame(controller);

function controller(){
    boardView.play();
    window.requestAnimationFrame(controller);
}

