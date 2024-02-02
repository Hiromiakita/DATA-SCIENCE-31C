class Node {

  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {

  // constructor() {
  //   this.head = null;
  //   this.tail = null;
  // }
  constructor(nodeInitial = null) {
    this.head = nodeInitial;
    this.tail = nodeInitial;
  }

  // insertar
  append(data) {
    const newNode = new Node(data);

    // valido que la lista sea vacia
    if (!this.head) { // si no existe head la lista esta vacia
      this.head = newNode;
      this.tail = newNode;
    } else { // si no esta vacia
      this.tail.next = newNode; // la conexion de la cola con el nuevo nodo
      this.tail = newNode; // la cola tiene que ser el nuevo nodo
    }
  }

  prepend(value) {
    // si la lista esta vacia
    if (!this.head) {
      return;
    }

    // si el dato esta en el primer nodo
    if (this.head.data === value) {
      this.head = this.head.next;

      if(!this.head) {
        this.tail = null;
      }

      return;
    } 

    let currentNode = this.head;

    // mientras que el siguiente node despues de current no contenga el valor buscado, repita el ciclo
    while(currentNode.next && currentNode.next.data !== value) {
      currentNode = currentNode.next;
    }

    // if (currentNode.next) {
      currentNode.next = currentNode.next.next;

      if(!currentNode.next) {
        this.tail = currentNode;
      }
    // }
  }

  // imprimir lista
  print() {
    let currentNode = this.head;
    let print = '['
    while (currentNode) {
      print += currentNode.data + " -> "
      currentNode = currentNode.next;
    }
    print += ']'
    console.log(print);
  }
}

const listaFrutas = new LinkedList();

listaFrutas.print();

listaFrutas.append("fresa");

listaFrutas.print();

listaFrutas.append("piña");

listaFrutas.print();

listaFrutas.append("sandia")

listaFrutas.print();

listaFrutas.prepend("fresa");

listaFrutas.print();
