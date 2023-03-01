var num1 = parseFloat(prompt("Introduce el primer número:"));
var num2 = parseFloat(prompt("Introduce el segundo número:"));
var num3 = parseFloat(prompt("Introduce el tercer número:"));
if (num1 >= num2 && num1 >= num3) {
  document.write(num1 + " es el número mayor.");
} else if (num2 >= num1 && num2 >= num3) {
  document.write(num2 + " es el número mayor.");
} else {
  document.write(num3 + " es el número mayor.");
}