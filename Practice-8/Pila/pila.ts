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
    public decimalToBinary(decimal: number): string {
        if (decimal === 0) {
            return '0';
        }

        this.elementos = [];

        while (decimal > 0) {
            const res = decimal % 2;
            this.push(res.toString());
            decimal = Math.floor(decimal / 2);
        }

        let binary = '';
        while (this.size() > 0) {
            binary += this.pop();
        }

        return binary;
    }
    public decimalToBase(decimalNumber: number, base: number): string {
        if (base <= 2 || base >= 36) {
            throw new Error('La base debe estar entre 2 y 36.');
        }

        if (decimalNumber === 0) {
            return '0';
        }

        const stack = new Pila();
        const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        while (decimalNumber > 0) {
            const remainder = decimalNumber % base;
            stack.push(digits[remainder]);
            decimalNumber = Math.floor(decimalNumber / base);
        }

        let baseResult = '';
        while (stack.size() > 0) {
            baseResult += stack.pop();
        }

        return baseResult;
    }
}
