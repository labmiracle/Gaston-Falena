function crearMapaDeCodificacion(
    textoOriginal: string,
    textoCodificado: string
): Map<string, string> {
    const mapaCodificacion = new Map<string, string>();

    for (let i = 0; i < textoOriginal.length; i++) {
        const clave = textoOriginal[i];
        const valor = textoCodificado[i];
        mapaCodificacion.set(clave, valor);
    }

    return mapaCodificacion;
}

function codificarTexto(
    texto: string,
    mapaCodificacion: Map<string, string>
): string {
    let textoCodificado = '';

    for (let i = 0; i < texto.length; i++) {
        const caracter = texto[i];
        const caracterCodificado = mapaCodificacion.get(caracter) || caracter;
        textoCodificado += caracterCodificado;
    }

    return textoCodificado;
}

const textoOriginal = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
const textoCodificado = 'GHIJKLMNÑOPQRSTUVWXYZABCDEF';

const mapaCodificacion = crearMapaDeCodificacion(
    textoOriginal,
    textoCodificado
);

const textoParaCodificar = 'WIKIPEDIA, LA ENCICLOPEDIA LIBRE';
const textoCodificadoResultado = codificarTexto(
    textoParaCodificar,
    mapaCodificacion
);

console.log('Texto original:', textoParaCodificar);
console.log('Texto codificado:', textoCodificadoResultado);
