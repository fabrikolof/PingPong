export default function hit(a,b){ //Revisa si a colisiona con b
    let hit = false;

    //Colisiones horizontales
    if(b.x + b.width >= a.x && b.x < a.x + a.width){
     //Colisiona verticales
        if (b.y + b.height >= a.y && b.y < a.y + a.height) hit = true;
    }

    //Colisión de a con b
    if(b.x <= a.x && b.x + b.width >= a.x + a.width){

        if (b.y <= a.y && b.y + b.height >= a.y + a.height) hit = true;
    }

    //Colision b con a
    if(a.x <= b.x && a.x + a.width >= b.x + b.width){

     //Colisiona verticales
        if (a.y <= b.y && a.y + a.height >= b.y + b.height) hit = true;
    }

    return hit;
}