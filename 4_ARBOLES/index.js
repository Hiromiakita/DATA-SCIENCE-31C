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


// 2.- Escribe una función que dado un árbol binario A, obtenga una copia B del mismo.

function copyBinaryTree(root) {
    if (!root) return null;

    function copyNodes(node) {
        if (!node) return null;

        const newNode = new TreeNode(node.value); // copia del nodo

        newNode.left = copyNodes(node.left);
        newNode.right = copyNodes(node.right);

        return newNode;
    }

    const newRoot = copyNodes(root); // node root
    const newTree = new BinaryTree();
    newTree.root = newRoot;

    return newTree;
}

// Ejemplo de uso:
const copiedTree = copyBinaryTree(tree2.root)

console.log(copiedTree);




/// ----------------------------------
// EJEMPLO PRACTICO (AUTOCOMPLETAR)
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class AutoComplete {
    constructor() {
        this.root = null;
    }

    addWord(word) {
        const node = new Node(word);
        this.addWordAux(node, this.root);
    }

    addWordAux(node, current) {
        if (current === null) {
            this.root = node;
            return
        }

        if (node.value < current.value) {
            if (current.left === null) {
                current.left = node;
            } else {
                this.addWordAux(node, current.left);
            }
        } else {
            if (current.right === null) {
                current.right = node;
            } else {
                this.addWordAux(node, current.right);
            }
        }
    }

    getSuggestions(prefix) {
        const suggestions = [];
        this.getSuggestionsAux(prefix, this.root, suggestions)
        return suggestions;
    }

    getSuggestionsAux(prefix, node, suggestions) {
        if (node === null) {
            return;
        }

        if (node.value.startsWith(prefix)) {
            suggestions.push(node.value);
        }

        this.getSuggestionsAux(prefix, node.left, suggestions);
        this.getSuggestionsAux(prefix, node.right, suggestions);
    }
}

const autocompletar = new AutoComplete();
autocompletar.addWord("abandonar");
autocompletar.addWord("abajo");
autocompletar.addWord("acabar");
autocompletar.addWord("accceder");
autocompletar.addWord("bella");
autocompletar.addWord("bola");

const suggestions = autocompletar.getSuggestions("be");
console.log(suggestions);
