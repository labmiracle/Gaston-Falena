/*
Vamos a calcular el precio de un carrito de compra. Un acrrito de compra tiene unas propiedad productos que es una lista de los productos. Cada producto tiene las siguientes propiedades:
-nombre: Nombre del producto(Papel higienico,leche,...)
-unidades: Numero de elementos que se van a acomrpar de dicho producto
-precio: Precio unitario del producto
Ademas, tiene una propiedad precioTotal donde se va actualizando automaticamente el precio del producto. Crear el codigo necesario para soprotar esta funcionalidad
Datos de prueba:
const carrito = {
    productos: [{
        nombre: 'papel higienico',
        unidades:4,
        precio:5
    },
    {
        nombre: 'chocolate',
        unidades:2,
        precio:1.5
    }],
    get precioTotal(){

    }
}
*/
const carrito = {
    productos: [{
        nombre: 'papel higienico',
        unidades:4,
        precio:5
    },
    {
        nombre: 'chocolate',
        unidades:2,
        precio:1.5
    }],
    get precioTotal(){
        total = 0;
        const {productos} = this;
        for(let producto in productos){
            total += productos[producto].precio * productos[producto].unidades 
        }
        return total;
    }
}

console.log(carrito.precioTotal)