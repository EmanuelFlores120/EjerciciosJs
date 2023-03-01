var num = parseInt(prompt("Introduce un número:"));
var divisibles = "";
if (num % 2 === 0) {
  divisibles += "2, ";
}
if (num % 3 === 0) {
  divisibles += "3, ";
}
if (num % 5 === 0) {
  divisibles += "5, ";
}
if (num % 7 === 0) {
  divisibles += "7, ";
}
if (divisibles !== "") {
  document.write(num + " es divisible por " + divisibles.slice(0, -2) + ".");
} else {
  document.write(num + " no es divisible por 2, 3, 5 ni 7.");
}
