"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function rondaDeCartas() {
    let repetido = true;
    let cantidad = cantidadJugadores();
    const jugadores = [];
    for (let i = 0; i <= cantidad; i++) {
        while (repetido) {
            let numeroRandom = Math.floor(Math.random() * 13);
            if (!jugadores.includes(numeroRandom)) {
                jugadores.push(numeroRandom);
                repetido = false;
            }
        }
        repetido = true;
        console.log(`Jugador ${i + 1}: ${jugadores[i]}`);
    }
    const ganador = Math.max(...jugadores);
    const jugador = jugadores.indexOf(ganador);
    console.log(`El ganador es el jugador ${jugador + 1} con el numero ${ganador}!!`);
}
function cantidadJugadores() {
    let jugadores = prompt('Ingrese la cantidad de jugadores ');
    let cantidad = parseInt(jugadores);
    return cantidad - 1;
}
rondaDeCartas();
