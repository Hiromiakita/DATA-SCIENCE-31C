class Michi {
  // nationality = "México"; no iria el this
  
  constructor(nombre, color, pesoKg, edad) {
    this.nationality = "México";
    this.type = "";
    this.name = nombre;
    this.color = color;
    this.weightKg = pesoKg;
    this.age = edad;
    this.enemigo = "asdf"
  }

  maullar() {
    const enemigo = "Perro";
    console.log(`El michi ${this.name} y nacido en ${this.country} maulla... ${enemigo} ${this.enemigo}`);
  }
}

const Burbujas = new Michi("Burbujas", "Blanco", 2, 2);
const BolaNieve = new Michi("Bola de Nieve", "Blanco", 5, 1);

console.log(Burbujas.nationality);
console.log(BolaNieve);

Burbujas.maullar();


// Pilares de la POO

// 1. Abstraccion
// 2. Encapsulamiento
// 3. polimorfismo
// 4. herencia
// sistema: Una Veterinaria
// Venta de drogas, consultas, Bañar y cortar
// Solo recibe perros y gatos

class Veterinaria {
  constructor(direccion, propietario, telefono) {
    this.direccion = direccion;
    this.propietario = propietario;
    this.telefono = telefono;
  }

  vender(cliente, listaDrogas) {
    // logica para calcular el total
    // crear un recibo
    // eliminar del inventario las drogas vendidas
  }

  agendarCita(mascota, tipoCita) {
    console.log(mascota.defecar());
    // logica de registrar los sintomas del animal, en la bd
    // logica del costo dependiendo del animal
  }

  registroCliente() {}
}

class Cliente {
  constructor(nombre, direccion, telefono) {
    this.nombre = nombre;
    this.direcccion = direccion;
    this.telefono = telefono;
  }
}

class Mascota {
  #nombre = "";
  #sexo = "";
  
  constructor(nombre, tipo, raza, tamanio, sexo, edad, peso, esterilizado) {
    this.#nombre = nombre;
    this.tipo = tipo;
    this.raza = raza;
    this.tamanio = tamanio;
    this.#sexo = sexo;
    this.edad = edad;
    this.peso = peso;
    this.esterilizado = esterilizado;
  }

  modificarSexo(nuevoSexo) {
    if(typeof nuevoSexo === 'string') {
      this.#sexo = nuevoSexo;
    } else {
      throw new Error('Esto no es un string')
    }
  }

  obtenerInfo() {
    return `nombre: ${this.#nombre} tipo: ${this.tipo} raza: ${this.raza}`;
  }

  hablar() {
    return('no se que mascota soy');
  }

  morder() {
    this.#procrear()
    console.log('mordiendo a alguien...');
  }

  #procrear() {
    console.log("el animal esta en calor...");
  }
}

class Perro extends Mascota {

  constructor(nombre, raza, tamanio, sexo, edad, peso, esterilizado) {
    super(nombre, raza, tamanio, sexo, edad, peso, esterilizado);
    this.tipo = "Perro";
    this.tipoLengua = "lisa"
  }

  // sobreescribi
  hablar() {
    return 'guaf'
  }

  defecar() {
    return "popo"
  }
}

class Gato extends Mascota {

  constructor(nombre, raza, tamanio, sexo, edad, peso, esterilizado) {
    super(nombre, raza, tamanio, sexo, edad, peso, esterilizado);
    this.tipo = "Gato";
  }

  // sobreescribi
  hablar() {
    return 'miauuu'
  }

}


const firulais = new Perro("firulais", "chandoberman", "grande", "masculino");
const michisito = new Gato("michi", "persa", "pequeño", "femenino")

console.log("1.", firulais.hablar());
console.log(firulais);

console.log("2.", michisito.hablar());

const animalitosFelices = new Veterinaria("calle 8, nose que", "stiven", "3182900468");

animalitosFelices.agendarCita(firulais, "consulta")

console.log(animalitosFelices);
