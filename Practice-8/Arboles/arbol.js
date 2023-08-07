var Tree = /** @class */ (function () {
    function Tree(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
    Tree.prototype.add = function (value) {
        if (value < this.value) {
            if (this.left === null) {
                this.left = new Tree(value);
            }
            else {
                this.left.add(value);
            }
        }
        else {
            if (this.right === null) {
                this.right = new Tree(value);
            }
            else {
                this.right.add(value);
            }
        }
    };
    Tree.prototype.inOrder = function (visitNode) {
        if (this.left !== null) {
            this.left.inOrder(visitNode);
        }
        visitNode(this.value);
        if (this.right !== null) {
            this.right.inOrder(visitNode);
        }
    };
    Tree.prototype.preOrder = function (visitNode) {
        visitNode(this.value);
        if (this.left !== null) {
            this.left.preOrder(visitNode);
        }
        if (this.right !== null) {
            this.right.preOrder(visitNode);
        }
    };
    Tree.prototype.postOrder = function (visitNode) {
        if (this.left !== null) {
            this.left.postOrder(visitNode);
        }
        if (this.right !== null) {
            this.right.postOrder(visitNode);
        }
        visitNode(this.value);
    };
    Tree.prototype.countElements = function () {
        var count = 0;
        var inOrder = function (node) {
            if (node !== null) {
                inOrder(node.left);
                inOrder(node.right);
                count++;
            }
        };
        inOrder(this);
        return count;
    };
    Tree.prototype.getMin = function () {
        var _a;
        var current = this;
        while ((current === null || current === void 0 ? void 0 : current.left) !== null) {
            current = current.left;
        }
        return (_a = current === null || current === void 0 ? void 0 : current.value) !== null && _a !== void 0 ? _a : null;
    };
    Tree.prototype.getMax = function () {
        var _a;
        var current = this;
        while ((current === null || current === void 0 ? void 0 : current.right) !== null) {
            current = current.right;
        }
        return (_a = current === null || current === void 0 ? void 0 : current.value) !== null && _a !== void 0 ? _a : null;
    };
    return Tree;
}());
var tree = new Tree(10);
tree.add(5);
tree.add(15);
tree.add(3);
tree.add(8);
tree.add(12);
tree.add(20);
console.log('Recorrido en Inorden:');
tree.inOrder(function (value) { return console.log(value); });
console.log('Recorrido en Preorden:');
tree.preOrder(function (value) { return console.log(value); });
console.log('Recorrido en Postorden:');
tree.postOrder(function (value) { return console.log(value); });
var elementCount = tree.countElements();
console.log('Número de elementos en el árbol:', elementCount);
var minValue = tree.getMin();
var maxValue = tree.getMax();
console.log('Valor mínimo:', minValue);
console.log('Valor máximo:', maxValue);
