/*
    Escribe una función recursiva sum(arr,n) 
    que retorne la suma de los primeros n elementos del arreglo arr
*/

function sum(arr,n){

    if(n > arr.length){
        return 'Error! Debe ingresar una cantidad de elementos menor';
    }
    if(n === 0){
        return 'Error! Debe ingresar una cantidad de elementos mayor';
    }if(n === 1){
       return arr[0]
    }else{
        return arr[n-1] + sum(arr,n-1)
    }
    }
   
    


const numeros = [1,2,3,4,5];
console.log(sum(numeros,3))