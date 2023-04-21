/*
Vamos a armar el juedo de ”Adivinar el número”. El juego consiste de los 
siguiente: Lacomputadora genera un número aleatorio entre 1 y 10. 
Luego nos pide que adivinemos elnúmero. Si el número que ingresamos
 es menor que el que genero la maquina nos muestrael mensaje ”El número es mayor”.
  Si el número que ingresamos es mayor nos muestra elmensaje ”El número es menor”.
   Cuando hayamos acertado el valor nos informa del fin deljuego.•Agregue al juego
    anterior niveles de dificultad.
*/

function adivinaNumero(dificultad){ 
    for(let i = 0; i < dificultad ; i++){
        let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
        let numeroIngresado =  parseInt(prompt('Ingrese un numero entre 1 y 10'))
    if(numeroAleatorio == numeroIngresado){
        alert('Usted ha ganado este nivel!')
    }else{
        alert('Usted ha perdido')
        return
    }
}

}
let niveles =  parseInt(prompt('Determien la cantidad de niveles! Solo puede pasar al siguiente si gana ;)'))
adivinaNumero(niveles)