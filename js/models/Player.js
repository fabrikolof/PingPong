
export default class Player{
    constructor(name){
        this.name = name;
        this.wins = []; //Guardar los wins como objetos para luego mostrar las victorias almacenadas y con el .length sabemos cuantas victorias tiene el usuario
        this.place = true; //true = left and false = right 
    }

    get getName(){
        return this.name;
    }

    get getWins(){
        return this.wins;
    }
    
    get getPlace(){
        return this.place;
    }

    set setPlace(value){
        this.place = value;
    }
}