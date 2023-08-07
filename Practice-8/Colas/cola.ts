class Queue {
    private items: string[];
    constructor() {
        this.items = [];
    }

    enqueue(item: string) {
        this.items.push(item);
    }

    dequeue(): string | undefined {
        return this.items.shift();
    }

    size(): number {
        return this.items.length;
    }
}

function juegoDeLaPapaCaliente(jugadores: string[]): string {
    const queue = new Queue();
    jugadores.forEach(jugador => queue.enqueue(jugador));
    while (queue.size() > 1) {
        for (let i = 0; i < Math.floor(Math.random() * 10) + 1; i++) {
            const jugadorActual = queue.dequeue();
            if (jugadorActual !== undefined) {
                queue.enqueue(jugadorActual);
            }
        }

        if (queue.size() > 0) {
            console.log(`${queue.dequeue()} es eliminado!`);
        }
    }

    return `El ganador es ${queue.dequeue()}!`;
}
const jugadores = ['Gaston', 'Capo', 'Jorge', 'Domingo', 'Hernan', 'Fale'];
console.log(juegoDeLaPapaCaliente(jugadores));
