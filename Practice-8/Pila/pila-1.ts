export default class Pila {
    private elementos: string[];
    constructor() {
        this.elementos = [];
    }

    public push(elemento: string) {
        this.elementos.push(elemento);
    }
    public pop() {
        return this.elementos.pop();
    }
    public size() {
        return this.elementos.length;
    }
}
