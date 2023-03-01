var num1 = parseFloat(prompt("Introduce un número:"));
        var num2 = parseFloat(prompt("Introduce otro número:"));
        if (num1 > num2) {
          document.write(num1 + " es mayor que " + num2);
        } else if (num2 > num1) {
          document.write(num2 + " es mayor que " + num1);
        } else {
          document.write("Los números son iguales");
        }