/* Ejercicio 1
Escribe una función que reciba los argumentos par y strokes y devuelve la cadena correcta de acuerdo a la siguiente tabla que enumera los golpes en orden de prioridad,arriba(más alto) a abajo (más bajo):
Strokes   return
1         "Hole-in-one!"
<= par - 2 "Eagle"
par - 1    "Birdie"
par         "Par"
par + 1     "Bogey"
par + 2     "Double Bogey"
>= par + 3 "Go Home!" */

const names = [
    "Hole-in-one!",
    "Eagle",
    "Birdie",
    "Par",
    "Bogey",
    "Double Bogey",
    "Go Home!",
];

function golfScore(par,strokes) {
    if(strokes == 1){
        return console.log(names[0])
    }if(strokes <= (par - 2)){
        return console.log(names[1])
    }
    if(strokes == (par - 1)){
        return console.log(names[2])
    }
    if(strokes == (par)){
        return console.log(names[3])
    }
    if(strokes == (par + 1)){
        return console.log(names[4])
    }
    if(strokes == (par + 2)){
        return console.log(names[5])
    }else{
        return console.log(names[6])
    }
}
 

golfScore(5,4);
