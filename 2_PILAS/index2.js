class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// PILA Ultimo en entrar primero en salir LIFO
class Stack {
  constructor() {
    // NOTA: para simplificar la logica de la PILA invertimos La cabeza con la Cola, al momento de insertar un nuevo elemento a la PILA
    this.tail = null;
    this.length = 0;
  }

  push(element) {
    //añadir elemento a la cola de la PILA
    const newNode = new Node(element);

    newNode.next = this.tail;
    this.tail = newNode;
    this.length++;
  }

  pop() {
    //sacar el último elemento de la pila

    // Si la PILA esta vacia
    if (this.length === 0) {
      return;
    }

    this.tail = this.tail.next;
    this.length--;
  }

  peek() {
    // retornar el último elemento de la PILA
    const lastElement = this.tail !== null  ? this.tail.value : null;
    return lastElement;
  }

  size() {
    // Retornar el número de elementos que hay
    // return this.counter;
    return this.length;
  }

  print() {

    let currentNode = this.tail;
    let print = '['
    while (currentNode) {
      print += currentNode.value.name + " -> "
      currentNode = currentNode.next;
    }
    print += ']'
    return print;
  }
  
}

const studentStack = new Stack();

console.log(studentStack.print());

studentStack.push({name: 'Daniela', className: 'Frontend'});
console.log(studentStack.print());
studentStack.push({name: 'Favio', className: 'Frontend'});
console.log(studentStack.print());
studentStack.push({name: 'Angel', className: 'Frontend'});
console.log(studentStack.print());

studentStack.pop();
console.log(studentStack.print());
studentStack.pop();
console.log(studentStack.print());

console.log(studentStack.peek());
