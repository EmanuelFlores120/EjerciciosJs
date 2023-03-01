var frase = prompt("Introduce una frase:");
var vocales = "";
for (var i = 0; i < frase.length; i++) {
  var letra = frase.charAt(i).toLowerCase();
  if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
    vocales += letra + " ";
  }
}
document.write("Las vocales que aparecen son: " + vocales);
