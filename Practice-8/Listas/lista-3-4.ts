import { Nodo, LinkedList } from './lista-1-2';

class NodoDoble {
    private data: string;
    private next: NodoDoble | null;
    private prev: NodoDoble | null;

    constructor(
        data: string,
        next: NodoDoble | null = null,
        prev: NodoDoble | null = null
    ) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }

    setNext(next: NodoDoble | null) {
        this.next = next;
    }

    setPrev(prev: NodoDoble | null) {
        this.prev = prev;
    }

    getNext(): NodoDoble | null {
        return this.next;
    }

    getPrev(): NodoDoble | null {
        return this.prev;
    }

    getData(): string {
        return this.data;
    }
}

class LinkedListDoble extends LinkedList {
    private tail: NodoDoble | null;

    constructor() {
        super();
        this.tail = null;
    }

    add(data: string) {
        const newNode = new NodoDoble(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.setPrev(this.tail);
            this.tail?.setNext(newNode);
            this.tail = newNode;
        }
        this.size++;
    }

    remove(value: string) {
        let current = this.head;
        while (current) {
            if (current.getData() === value) {
                const prevNode = current.getPrev();
                const nextNode = current.getNext();

                if (prevNode) {
                    prevNode.setNext(nextNode);
                } else {
                    this.head = nextNode;
                }

                if (nextNode) {
                    nextNode.setPrev(prevNode);
                } else {
                    this.tail = prevNode;
                }

                this.size--;
                return;
            }
            current = current.getNext();
        }
    }
    deleteDups() {
        const dataCount = new Map<string, number>();
        let current = this.head;

        while (current) {
            const data = current.getData();

            if (dataCount.has(data)) {
                const prevNode = current.getPrev();
                const nextNode = current.getNext();

                if (prevNode) {
                    prevNode.setNext(nextNode);
                } else {
                    this.head = nextNode;
                }

                if (nextNode) {
                    nextNode.setPrev(prevNode);
                } else {
                    this.tail = prevNode;
                }

                this.size--;
            } else {
                dataCount.set(data, 1);
            }

            current = current.getNext();
        }
    }
    getAll() {
        let current = this.head;
        while (current) {
            console.log(current.getData());
            current = current.getNext();
        }
    }
}

const newListD = new LinkedListDoble();

newListD.add('hola');
newListD.add('hola1');
newListD.add('hola2');
newListD.add('hola2');
newListD.add('hola2');

console.log('Initial size:', newListD.getSize());

newListD.remove('hola1');

console.log('Updated size:', newListD.getSize());
console.log('con duplicados:');
newListD.getAll();
console.log('Sin duplicados:');
newListD.deleteDups();
newListD.getAll();
