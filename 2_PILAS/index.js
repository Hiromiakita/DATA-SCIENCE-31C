// ESTRUCTURA DE DATOS: STACK (PILA) - LIFO Ultimo en entrar, primero en salir

class Stack {
    #items;

    constructor(){
        this.#items = [];
    }

    push (element) {
        //añadir elementos a la pila
        this.#items.push(element);
    }

    pop() {
        //sacar el último elemento de la pila
        if (this.size() === 0) {
            return "La pila esta vacia"
        }

        // obtengo el ultimo elemento del arreglo
        const lastItem = this.peek();

        // elimino el ultimo elemento del arreglo con el metodo pop de los arreglos
        this.#items.pop();

        return lastItem;
    }
    
    peek() {
        // retornar el último elemento de la fila
        // arr[1]
        if (this.size() === 0) {
            return 'la pila esta vacia';
        }
        return this.#items[this.#items.length - 1];
    }

    size() {
        // Retornar el número de elementos que hay
        // return this.counter;
        return this.#items.length;
    }

    print() {
        return `[ ${this.#items.join(', ')} ] <- stack`;
    }
}

let pila = new Stack();
console.log(pila.size());
console.log(pila.pop());
pila.push("elemento 1");
pila.push("elemento 2");
console.log(pila.print());
console.log(pila.pop());
console.log(pila.print());

pila.push("elemento 3");
console.log(pila.print());
console.log(pila.peek());


console.log("----------------");
// ESTRUCTURA DE DATOS: QUEUE (COLA) - FIFO Primero en entrar, primero en salir

class Queue {
    #items;

    constructor() {
        this.#items = [];
    }

    enqueue(element) {
        // Agrega un nuevo elemento a la cola , situandolo al final de esta
        this.#items.push(element)
    }

    dequeue() {
        // Retorna el primer elemento de la cola, quitandolo de esta
        if (this.isEmpty()) {
            return "La cola esta vacia";
        }
        this.#items.shift();
    }

    front() {
        // retorna el primer elemento de la cola, sin eliminarlo
        if (this.isEmpty()) {
            return "La cola esta vacia"
        }
        return this.#items[0];
    }

    back() {
        // retorna el ultimo elemento de la cola, sin eliminarlo
        return this.#items[this.#items.length -1];
    }

    size() {
        // retorna el numero de elementos que contiene la cola
        return this.#items.length;
    }

    isEmpty() {
        // Retorna un booleano si la cola esta vacia
        return this.size() === 0
    }

    print() {
        // muetra el contenido de la cola
        return `Queue -> [ ${this.#items.join(', ')} ]`;
    }
}

const colita = new Queue();
const colaSuperMercado = new Queue();
const colaParaTacosDeDonaMariana = new Queue();

console.log(colita.print());
colita.enqueue("Daniela")
console.log(colita.print());
colita.enqueue("Francisco")
console.log(colita.print());
colita.dequeue();
console.log(colita.print());
colita.enqueue("Jeam");
console.log(colita.print());
console.log(colita.front());
console.log(colita.back());
