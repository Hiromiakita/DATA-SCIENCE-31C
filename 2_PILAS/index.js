// ESTRUCTURA DE DATOS: STACK (PILA)

class Stack {
    constructor(){
        this.counter = 0;
        this.storage = {};
    }
    push () {
        //añadir elementos a la pila
    }
    pop() {
        //sacar el último elemento de la pila
    }
    peek() {
        // retornar el último elemento de la fila
    }
    length() {
        // Retornar el número de elementos que hay
        return this.counter;
    }
}

let pila1 = new Stack()
console.log(pila1.length())