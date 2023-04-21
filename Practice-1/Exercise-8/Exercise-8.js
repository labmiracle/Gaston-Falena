/*Escriba una función que pueda tomar cualquier número 
de argumentos y devuelva la suma de todos los argumentos */

function sumatoria(...vector){ // con el operador ... podemos ingresar todos los elementos que deseamos y estos quedaran en un array llamado vector en este caso.
    return vector.reduce((total,elementoActual)=>{   //la funcion reduce es muy util para realizar por ej sumatorias ya que devuelve un solo valor 
        return total + elementoActual
    },0)//Iniciamos el total en 0 
}


console.log(sumatoria(5,6,7,))