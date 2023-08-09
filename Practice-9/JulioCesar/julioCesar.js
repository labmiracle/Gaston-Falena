function crearMapaDeCodificacion(textoOriginal, textoCodificado) {
    var mapaCodificacion = new Map();
    for (var i = 0; i < textoOriginal.length; i++) {
        var clave = textoOriginal[i];
        var valor = textoCodificado[i];
        mapaCodificacion.set(clave, valor);
    }
    return mapaCodificacion;
}
function codificarTexto(texto, mapaCodificacion) {
    var textoCodificado = '';
    for (var i = 0; i < texto.length; i++) {
        var caracter = texto[i];
        var caracterCodificado = mapaCodificacion.get(caracter) || caracter;
        textoCodificado += caracterCodificado;
    }
    return textoCodificado;
}
var textoOriginal = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
var textoCodificado = 'GHIJKLMNÑOPQRSTUVWXYZABCDEF';
var mapaCodificacion = crearMapaDeCodificacion(textoOriginal, textoCodificado);
var textoParaCodificar = 'WIKIPEDIA, LA ENCICLOPEDIA LIBRE';
var textoCodificadoResultado = codificarTexto(textoParaCodificar, mapaCodificacion);
console.log('Texto original:', textoParaCodificar);
console.log('Texto codificado:', textoCodificadoResultado);
//parte 2
function invertirTexto(texto) {
    return texto.split('').reverse().join('');
}
var textoInvertido = invertirTexto(textoParaCodificar);
var textoInvertidoCodificado = codificarTexto(textoInvertido, mapaCodificacion);
console.log('Texto invertido', textoInvertido);
console.log('Texto codificado', textoInvertidoCodificado);
