type gender = 'female' | 'male';
class Tamagochi {
    public nombre: string;
    private energia: number;
    private sexo: gender;
    private humor: number;
    private edad: number;
    private comidas: number;
    private bebidas: number;
    constructor(nombre: string, sexo: gender, edad: number) {
        this.nombre = nombre;
        this.energia = 100;
        this.sexo = sexo;
        this.humor = 5;
        this.edad = edad;
        this.comidas = 0;
        this.bebidas = 0;
    }
    comer() {
        if (this.energia > 100) {
            this.energia + 25;
        }
        if (this.energia <= 100) {
            this.energia = 100;
        }
        if (this.comidas === 5) {
            console.log(`${this.nombre} ha muerto por comer 5 veces seguidas!`);
        } else {
            this.comidas++;
            this.bebidas = 0;
        }
        console.log(
            `${this.nombre} luego de comer tiene ${this.energia}% de energia!`
        );
    }
    dormir() {
        console.log(`${this.nombre} se ha ido a dormir. Hora de la siesta`);
    }
    beber() {
        if (this.bebidas === 5) {
            console.log(`${this.nombre} ha muerto por beber 5 veces seguidas!`);
        } else {
            this.bebidas++;
            this.comidas = 0;
        }
        console.log(`${this.nombre} ha dicho que le encanta su jugo!`);
    }
    saltar() {
        this.energia - 25;
        if (this.humor < 5) {
            this.humor + 1;
        }
        console.log(
            `${this.nombre} ha dicho que le encanta saltar! Su energia es ${this.energia}% pero su humor ha subido y es ${this.humor}`
        );
    }
    correr() {
        console.log(
            `${this.nombre} ha dicho que correr no le pincha ni corta!`
        );
    }
    caminar() {
        this.energia - 10;
        if (this.energia === 0) {
            console.log(`${this.nombre} ha muerto por falta de energia!`);
        } else
            console.log(
                `A ${this.nombre} le quedan ${this.energia}% de energia! ten cuidado `
            );
    }
}

class Tamagochis {
    private tamagochis: Tamagochi[] = [];

    agregarTamagochi(nombre: string, sexo: gender, edad: number) {
        const nuevoTamagochi = new Tamagochi(nombre, sexo, edad);
        this.tamagochis.push(nuevoTamagochi);
    }

    eliminarTamagochi(nombre: string) {
        this.tamagochis = this.tamagochis.filter(
            tamagochi => tamagochi.nombre !== nombre
        );
    }

    buscarTamagochi(nombre: string): Tamagochi | undefined {
        return this.tamagochis.find(tamagochi => tamagochi.nombre === nombre);
    }
}
