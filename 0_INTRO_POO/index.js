console.log('hola');

// Objeto literal

let alumno = {
    nombre: 'Julio',
    edad: 20,
    ciudad: 'CDMX'
};

let alumno2 = {
    nombre: 'Ana',
    edad: 25,
    ciudad: 'GDL'
};

let alumno3 = {
    nombre: 'Juan',
    edad: 20,
    ciudad: 'CDMX'
};

console.log(alumno)
console.log(alumno2)
console.log(alumno3)

// POO -> class -> objetos

// Abstracción

class Alumno {
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

// Crear instancias (crear objetos con la clase creada)
let alumno4 = new Alumno('Carlos', 'López', 20);
let alumno5 = new Alumno('Diana', 'Robles', 15);

console.log(alumno4)
console.log(alumno5)

class Sensei {
    constructor(nombre, experiencia, tipo){
        this.nombre = nombre
        this.experiencia = experiencia
        this.tipo = tipo
    }
}

let sensei1 = new Sensei('Hiromi', 6, 'frontend')
let sensei2 = new Sensei('Stiven', 8, 'fullstack')

console.log(sensei1, sensei2)

function eliminar () {

}

let eliminar2 = () => {

}

class Admin {
    constructor(nombre, nivel) {
        this.nombre = nombre;
        this.nivel = nivel;
    }
    eliminarAlumno () {
        console.log('eliminado')
    }
    agregarAlumno () {
        console.log('agregando alumno...')
    }
}

let admin1 = new Admin('Tomás', 1)

console.log(admin1.nivel)
admin1.eliminarAlumno();
admin1.agregarAlumno();

class Modulo {
    constructor(titulo, introduccion, duracion, temas) {
        this.titulo = titulo;
        this.introduccion = introduccion;
        this.duracion = duracion;
        this.temas = temas;
    }

    actualizarTitulo(nuevoTitulo){
        this.titulo = nuevoTitulo
    }
}

let mod1 = new Modulo('Comp Science', 'x', '4', ['tema1', 'tema2', 'tema3'])

console.log(mod1)

mod1.actualizarTitulo('Lógica de Progamación')

console.log(mod1)