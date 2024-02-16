// ÁRBOL BINARIO


// NODO
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// ARBOL
class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            // izq
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            // der
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }
}

// ejempo de uso:
const arbol = new BinaryTree();
console.log(arbol);

arbol.insert(10);
arbol.insert(5);
arbol.insert(15);
arbol.insert(3);
arbol.insert(2);

console.log(arbol);


// CAMPUS EJERCICIOS
// 1.- Escribe una función que dados dos árboles binarios A y B, determine si son idénticos o no.

function areIndenticalTrees(tree1, tree2) { // tree1 y tree2 son de tipo TreeNode
    if (!tree1 && !tree2) return true;
    if (!tree1 || !tree2) return false;

    return (
        tree1.value === tree2.value &&
        areIndenticalTrees(tree1.left, tree2.left) &&
        areIndenticalTrees(tree1.right, tree2.right)
    )
}

const tree1 = new BinaryTree();
tree1.insert(1)
tree1.insert(10)

const tree2 = new BinaryTree();
tree2.insert(1)
tree2.insert(10)

console.log(areIndenticalTrees(tree1.root, tree2.root));
