
export default class Board{

    constructor(width,height){
        this.width = width;
        this.height = height;
        this.playing = false;
        this.game_over = false;
        this.bars = [];
        this.ball = null;
    }

    get getWidth(){
        return this.width;
    }

    get getHeight(){
        return this.height;
    }

    get elements(){

        let elements = this.bars.map((element)=>element); // Envio una copia para resguardar la referencia.
        return elements;

    }

}