import promptSync from 'prompt-sync';

const prompt = promptSync();

function rondaDeCartas(): void {
    let repetido: boolean = true;
    let cantidad: number = cantidadJugadores();
    const jugadores: number[] = [];
    for (let i = 0; i <= cantidad; i++) {
        while (repetido) {
            let numeroRandom: number = Math.floor(Math.random() * 13);
            if (!jugadores.includes(numeroRandom)) {
                jugadores.push(numeroRandom);
                repetido = false;
            }
        }
        repetido = true;
        console.log(`Jugador ${i + 1}: ${jugadores[i]}`);
    }
    const ganador: number = Math.max(...jugadores);
    const jugador: number = jugadores.indexOf(ganador);
    console.log(
        `El ganador es el jugador ${jugador + 1} con el numero ${ganador}!!`
    );
}

function cantidadJugadores(): number {
    let jugadores: string = prompt('Ingrese la cantidad de jugadores ');
    let cantidad: number = parseInt(jugadores);
    return cantidad - 1;
}
rondaDeCartas();
