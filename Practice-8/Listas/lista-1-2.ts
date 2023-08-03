class Nodo {
    public data: string;
    public next: string | null;
    constructor(data: string, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    public head: any;
    public size: number;
    constructor() {
        this.head = null;
        this.size = 0;
    }
    add(data: string) {
        let node = new Nodo(data);
        let current;
        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    remove(value: string) {
        let current = this.head;
        if (!current) {
            return;
        }
        let previous;
        while (current && current.data !== value) {
            previous = current;
            current = current.next;
        }
        if (!current) {
            return;
        }
        if (!previous) {
            this.head = current.next;
        } else {
            previous.next = current.next;
        }
        this.size--;
    }
    find(value: string): Nodo | null {
        let current = this.head;
        while (current) {
            if (current.data === value) {
                return current;
            }
            current = current.next;
        }
        return null;
    }
    getSize(): number {
        return this.size;
    }

    invert() {
        let current = this.head;
        let previous = null;
        let nextNode = null;

        while (current) {
            nextNode = current.next;
            current.next = previous;
            previous = current;
            current = nextNode;
        }

        this.head = previous;
    }
}

const newList = new LinkedList();
newList.add('hola');
newList.add('hola1');
newList.add('hola2');
console.log(newList.getSize());

export { Nodo, LinkedList };
