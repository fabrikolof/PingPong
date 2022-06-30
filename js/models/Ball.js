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

    
    collision(bar){
        //Reacciona a la colision con una barra.

        //calcular en angulo con el que se va a mover cuando colisione.
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
    
    move(){
        this.x += this.speedX * this.direction;
        this.y += this.speedY;

        //mejorar
        //Validamos la posicion en y para hacer rebotar la pelota, cambiando la direccion.
        if(this.y + this.radius > this.board.getHeight ||
            this.y + this.radius <= 20 ){

            this.speedY = -this.speedY;
        }

        //Rebota cuando llega al límite del largo de nuestro lienzo.
        // if(this.x + this.radius > this.board.getWidth ||
        //     this.x + this.radius <= 20 ){

        //     this.speedX = -this.speedX;
        // }
    }
}
