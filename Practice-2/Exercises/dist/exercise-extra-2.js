"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* Generar un numero al azar de 4 digitos, Cada digito puede tener un valor entre 0 y 6
Si alguno de los numeros concuerda y esta en la posicion origianl se muestra X y si concuerda pero
no esta en la pos originar se muertra -
La salida se muestra en el sigueinte orden XX-(Primero las X y luego los -)*/
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function adivinaNumero() {
    let ingresar = '1';
    const ordenCorrecto = [];
    const ordenIncorrecto = [];
    let contador = 0;
    const numeroMisterioso = [];
    for (let i = 0; i < 4; i++) {
        numeroMisterioso.push(Math.floor(Math.random() * 7));
    }
    while (ingresar === '1') {
        const numeros = [];
        while (contador < 4) {
            let numeroS = prompt('Ingrese cuatro números entre 0 y 6: ');
            let numero = parseInt(numeroS);
            if (numero >= 0 && numero <= 6) {
                numeros.push(numero);
                contador++;
            }
        }
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (numeroMisterioso[i] === numeros[j]) {
                    if (i === j) {
                        ordenCorrecto.push('X');
                    }
                    else {
                        ordenIncorrecto.push('-');
                    }
                }
            }
        }
        const resultado = ordenCorrecto
            .concat(ordenIncorrecto)
            .join('');
        console.log(resultado);
        if (resultado === 'XXXX') {
            console.log('FELICITACIONES! El numero ingresado es correcto, ha adivinado!');
        }
        ingresar = prompt('Ingrese 1 para volver a intentarlo. Ingrese 0 para salir ');
    }
}
adivinaNumero();
