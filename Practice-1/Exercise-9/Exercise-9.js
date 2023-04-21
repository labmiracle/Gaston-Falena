// Escriba una función llamadaaddOnlyNumsque pueda aceptar cualquier cantidad de argu-mentos (incluidos números o cadenas) y devuelva la suma de solo los números


function Sumatoria(...vector){ // con el operador ... podemos ingresar todos los elementos que deseamos y estos quedaran en un array llamado vector en este caso.
    return vector.reduce((total,elementoActual)=>{   //la funcion reduce es muy util para realizar por ej sumatorias ya que devuelve un solo valor 
        if(!isNaN(elementoActual)){
            return total + elementoActual
        }else
            return total;
    },0)//Iniciamos el total en 0 
}


console.log(Sumatoria(5,6,7,))