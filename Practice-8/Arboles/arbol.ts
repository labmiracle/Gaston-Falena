class Tree {
    public value: number;
    public right: Tree | null;
    public left: Tree | null;

    constructor(value: number) {
        this.value = value;
        this.right = null;
        this.left = null;
    }

    add(value: number) {
        if (value < this.value) {
            if (this.left === null) {
                this.left = new Tree(value);
            } else {
                this.left.add(value);
            }
        } else {
            if (this.right === null) {
                this.right = new Tree(value);
            } else {
                this.right.add(value);
            }
        }
    }
    inOrder(visitNode: (value: number) => void) {
        if (this.left !== null) {
            this.left.inOrder(visitNode);
        }

        visitNode(this.value);

        if (this.right !== null) {
            this.right.inOrder(visitNode);
        }
    }
    preOrder(visitNode: (value: number) => void) {
        visitNode(this.value);

        if (this.left !== null) {
            this.left.preOrder(visitNode);
        }

        if (this.right !== null) {
            this.right.preOrder(visitNode);
        }
    }
    postOrder(visitNode: (value: number) => void) {
        if (this.left !== null) {
            this.left.postOrder(visitNode);
        }

        if (this.right !== null) {
            this.right.postOrder(visitNode);
        }

        visitNode(this.value);
    }
    countElements(): number {
        let count = 0;

        const inOrder = (node: Tree | null) => {
            if (node !== null) {
                inOrder(node.left);
                inOrder(node.right);
                count++;
            }
        };

        inOrder(this);

        return count;
    }
    getMin(): number | null {
        let current: Tree | null = this;
        while (current?.left !== null) {
            current = current.left;
        }
        return current?.value ?? null;
    }

    getMax(): number | null {
        let current: Tree | null = this;
        while (current?.right !== null) {
            current = current.right;
        }
        return current?.value ?? null;
    }
}

const tree = new Tree(10);
tree.add(5);
tree.add(15);
tree.add(3);
tree.add(8);
tree.add(12);
tree.add(20);

console.log('Recorrido en Inorden:');
tree.inOrder(value => console.log(value));

console.log('Recorrido en Preorden:');
tree.preOrder(value => console.log(value));

console.log('Recorrido en Postorden:');
tree.postOrder(value => console.log(value));

const elementCount = tree.countElements();
console.log('Número de elementos en el árbol:', elementCount);

const minValue = tree.getMin();
const maxValue = tree.getMax();

console.log('Valor mínimo:', minValue);
console.log('Valor máximo:', maxValue);
