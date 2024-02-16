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