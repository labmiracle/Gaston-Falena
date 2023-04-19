/*Cada dia una planta crece en metros segun su velocidadCrecimiento. Cada noche, dicha planta
decrece en metros en base a su velocidadDecrecimiento debido a la falta de sol.
Cuando nace, mide exactamente 0 metros. Queremos saber los dias que tardara una planta en alcanzar
cierta alturaDeseada. Crear una funcion que reciba velocidadCrecimiento,velocidadDecrecimiento y alturaDeseada
como numeros enteros positivos y devuelva el numero de dias que tardara la planta en medir la 
altura deseada.
function calcularDiasCrecimiento(velocidadCrecimiento,velocidadDecrecimiento ,alturaDesada){

} */

function calcularDiasCrecimiento(velocidadCrecimiento,velocidadDecrecimiento,alturaDeseada){
let alturaActual = 0;
let dias = 0;
if(typeof velocidadCrecimiento !== 'number' || typeof velocidadDecrecimiento !== 'number'|| typeof alturaDeseada !== 'number' ){
    return console.log('Los valores deben ser numeros enteros')
}
if(velocidadCrecimiento < 0 ||  velocidadDecrecimiento < 0|| alturaDeseada < 0 ){
    return console.log('Los valores deben ser mayores a 0')
}
    while(alturaDeseada != alturaActual){
        alturaActual = alturaActual + (velocidadCrecimiento - velocidadDecrecimiento)
        dias ++
}    
return dias;
}

console.log(calcularDiasCrecimiento(6,4,10));