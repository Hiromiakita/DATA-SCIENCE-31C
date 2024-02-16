// RECURSIVIDAD
// Es un concepto donde una funcion se llama a si misma para resolver un problema de manera iterativa.

// funcion recursiva para calcular el factorial de un numero:
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1)
  }
}

// ejemplo de uso:
const numero = 6
console.log(`El factorial de ${numero} es: ${factorial(numero)}`);


// CALLBACK
// es una funcion que pasa como paremetro a otra funcion

function calcular(valor, callback) {

  // codigo...
  //callback(algo)
}

function operar(operacion, valor1, valor2) {
  return operacion(valor1, valor2);
}

function sumar(valor1, valor2) {
  return valor1 + valor2;
}

function resta(valor1, valor2) {
  return valor1 - valor2
}

const resultado = operar(resta, 1, 4)
console.log(resultado);

// arr.find((elem) => elem.id === 8))