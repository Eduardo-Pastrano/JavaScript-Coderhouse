let opciones = prompt(`Por favor, elige la operación que deseas realizar:
1: Suma
2: Resta
3: Multiplicación
4: División
`);

switch (opciones) {
    case "1":
        alert("Vamos a realizar una suma");
        let numeroSuma = parseInt(prompt("Ingrese un número o escriba '0' para salir."));
        let resultadoSuma = 0;

        while (numeroSuma != 0) {
            resultadoSuma = resultadoSuma + numeroSuma;
            numeroSuma = parseInt(prompt("Ingrese un número o escriba '0' para salir."));
        }
        alert(`El resultado de la suma es: ${resultadoSuma}`);
        break;
    
    case "2":
        alert("Vamos a realizar una resta");
        let numeroResta1 = parseInt(prompt("Ingrese el primer número."));
        let numeroResta2 = parseInt(prompt("Ingrese el segundo número."));
        let resultadoResta = numeroResta1 - numeroResta2;

        alert(`El resultado de la resta es: ${resultadoResta}`);
        break;

    case "3": 
        alert("Vamos a realizar una multiplicación");
        let numeroMultiplicacion = parseInt(prompt("Ingrese un número o escriba '0' para salir."));
        let resultadoMultiplicacion = 1;

        while (numeroMultiplicacion != 0) {
            resultadoMultiplicacion = resultadoMultiplicacion * numeroMultiplicacion;
            numeroMultiplicacion = parseInt(prompt("Ingrese un número o escriba '0' para salir."));
        }
        alert(`El resultado de la multiplicación es: ${resultadoMultiplicacion}`);
        break;

    case "4": 
        alert("Vamos a realizar una división");
        let numeroDivision1 = parseInt(prompt("Ingrese el primer número."));
        let numeroDivision2 = parseInt(prompt("Ingrese el segundo número."));
        
        function division(numeroDivision1, numeroDivision2) {
            return numeroDivision1 / numeroDivision2;
        }

        let resultadoDivision = division(numeroDivision1, numeroDivision2);

        alert(`El resultado de la división es: ${resultadoDivision}`);
        break;
}