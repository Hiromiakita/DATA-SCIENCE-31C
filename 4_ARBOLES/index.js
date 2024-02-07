// Árbol binario


// Clase que nos ayuda a crear nodos que formarán parte de un árbol
class Nodo {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    add(data) {
        // Nuestro árbol está vacío?

        // sí está vacío
        // nodo -> nodo raíz

        if(this.root === null) {
            this.root = new Nodo(data);
        }

        // no está vacío
    }


}

// let nuevoNodo = new Nodo('x', 'x', 'x')

let myTree = new Tree()

console.log(myTree.root)
myTree.add('Luis')
console.log(myTree.root)