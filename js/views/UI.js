export default class UI {
    constructor() {}

    showScore(scoreL, scoreR) {
        const scoreLeft = document.querySelector("#scoreLeft");
        const scoreRight = document.querySelector("#scoreRight");
        scoreLeft.innerHTML = scoreL;
        scoreRight.innerHTML = scoreR;
    }

    cleanScore() {
        const scoreLeft = document.querySelector("#scoreLeft");
        const scoreRight = document.querySelector("#scoreRight");
        scoreLeft.innerHTML = 0;
        scoreRight.innerHTML = 0;
    }

    showCongratulation(bool, points){
        let player = "";
        let score = points;
        if(bool){ //Point fo the left
            const playerLeft = document.querySelector("#player1").innerHTML;
            player = playerLeft;
            //console.log("punto para el de la izquierda!");
        } else { //Point for the right
            const playerRight = document.querySelector("#player2").innerHTML;
            player = playerRight;
            //console.log("punto para el de la derecha!");
        }

        if(score == 1) {
            swal({
                title: "Felicitaciones "+player+"! Llevas "+score+" punto.",
                text: "Anotaste un punto!!!!",
                icon: "success",
                timer: 500,
                button: false
             });
        } else {
            swal({
                title: "Felicitaciones "+player+"! Llevas "+score+" puntos.",
                text: "Anotaste un punto!!!!",
                icon: "success",
                timer: 500,
                button: false
             });
        }
    }

    showWiner(bool){
        let player = "";
        if(bool){ //Point fo the left
            const playerLeft = document.querySelector("#player1").innerHTML;
            player = playerLeft;
            console.log("el ganador es "+player)
        } else { //Point for the right
            const playerRight = document.querySelector("#player2").innerHTML;
            player = playerRight;
            console.log("el ganador es "+player)
        }

        swal({
            title: "Felicitaciones "+player+" ganaste!",
            icon: "success"
         });
    }

    

}