var num = parseInt(prompt("Introduce un número:"));
if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0) {
  document.write(num + " es divisible por 2, 3, 5 o 7.");
} else {
  document.write(num + " no es divisible por 2, 3, 5 ni 7.");
}
