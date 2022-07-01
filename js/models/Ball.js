import { winner } from "../main.js";

export default class Ball{

    constructor(x,y,radius,board,ui){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.board = board;
        this.ui = ui;
        this.speed = 8;
        this.speedY = 0;
        this.speedX = 5;
        this.kind = "circle";
        this.direction = 1; // Direccion hacia la derecha.
        this.bounce_angle = 0;
        this.max_bounce_angle = Math.PI/12;

        this.scoreLeft = 0;
        this.scoreRight = 0;

        board.ball = this;
    }

    get width(){
        return this.radius*2;
    }

    get height(){
        return this.radius*2;
    }

    
    collision(bar){
        //Reacciona a la colision con una barra.

        //Calcular en angulo con el que se va a mover cuando colisione.
        let relative_intersect_y = ( bar.y + (bar.height / 2) ) - this.y;

        let normalized_intersect_y = relative_intersect_y / (bar.height / 2);

        this.bounce_angle = normalized_intersect_y * this.max_bounce_angle;

        this.speedY = this.speed * -Math.sin(this.bounce_angle);
        this.speedX = this.speed * Math.cos(this.bounce_angle);

        if (this.x > (this.board.width / 2)){
            this.direction = -1;
        }else{
            this.direction = 1;
        }
        
    }
    
    resetBall(){
        this.x = this.board.getWidth/2;
        this.y = this.board.getHeight/2;
        this.speed = 5;
        this.speedX = -this.speedX;
    }

    resetScores(){
        this.scoreLeft = 0;
        this.scoreRight = 0;
        this.ui.cleanScore();
    }
    
    move(){
        let winScore = 5;

        this.x += this.speedX * this.direction;
        this.y += this.speedY;
        
        //Comprobamos la posisicón de nuestro eje "y" para cambiarle de rumbo cuando llega al límite de nuestro tablero.
        //console.log(this.y + this.radius);
        if(this.y + this.radius > this.board.getHeight ||
            this.y + this.radius <= 20 ){
                //console.log(this.y + this.radius);
                
                this.speedY = -this.speedY;
            }
            
            // Rebota cuando llega al límite del largo de nuestro lienzo.
            // if(this.x + this.radius > this.board.getWidth ||
            //     this.x + this.radius <= 20 ){
                //     //console.log(this.x + this.radius);
                //     resetBall();
                //     // this.speedX = -this.speedX;
                // }
                
        if(this.x + this.radius < 0){ //Left
            this.scoreRight++;//point for the player 2 right
            this.ui.showScore(this.scoreLeft, this.scoreRight);

            if(this.scoreRight < winScore){
                this.ui.showScore(this.scoreLeft, this.scoreRight);
                this.ui.showCongratulation(false, this.scoreRight);//false = right player
            }
            
            if(this.scoreRight == winScore){
                    winner(false); 
                    this.resetScores();
                }

                this.resetBall();
                
            }else if(this.x + this.radius > this.board.getWidth){//Right    

                this.scoreLeft++;//point for the player 1 left

                if(this.scoreLeft < winScore){
                    this.ui.showScore(this.scoreLeft, this.scoreRight);
                    this.ui.showCongratulation(true, this.scoreLeft); //true = left player
                }
    
                if(this.scoreLeft == winScore){
                        winner(true);
                        this.resetScores();
                    }
                    
                    this.resetBall();
                }
            }
            
        }
        