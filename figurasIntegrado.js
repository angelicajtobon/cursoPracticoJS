/*Taller N° 2: Figuras Geometricas

-Tercero: Crear Funciones
-Cuarto: Integrar JS  con html

*/

// Calculo de los cuadros


function calcularPerimetroCuadrado() {
    const ladoCuadrado = document.getElementById("ladroCuadrado");
    const perimetro = ladoCuadrado.value * 4;
    alert("El perimetro del cuadrado es: " + perimetro + " cm");
}

function calcularAreaCuadrado() {
    const ladoCuadrado = document.getElementById("ladroCuadrado");
    const areaCuadrado = Math.pow(ladoCuadrado.value, 2)
    alert("El area del cuadrado es: " + areaCuadrado + " cm^2");
}


//Codigo del triangulo


function calcularPerimetroTriangulo() {
    const ladoTriangulo1 = document.getElementById("ladoTriangulo1");
    const ladoTriangulo2 = document.getElementById("ladoTriangulo2");
    const base = document.getElementById("base");
    const primerLado = parseFloat(ladoTriangulo1.value);
    const segundoLado = parseFloat(ladoTriangulo2.value);
    const tercerLado = parseFloat(base.value);
    const perimetro = primerLado + segundoLado + tercerLado;
    alert("El perimetro del triangulo es: " + perimetro + " cm");
}

function calcularAreaTriangulo() {
    const base = document.getElementById("base");
    const alturaTriangulo = document.getElementById("altura");
    const baseEntera = parseFloat(base.value);
    const altura = parseFloat(alturaTriangulo.value);
    const areaTriangulo = (baseEntera * altura) / 2;
    alert("El area del triangulo es: " + areaTriangulo + " cm");
}

//Codigo del circulo

const pi = Math.PI;

function calcularDiametroCirculo() {
    const radio = document.getElementById("radio");
    const radioCirculo = parseFloat(radio.value);
    const diametro = radioCirculo * 2;
    alert("El diametro del circulo es: " + diametro);
}

function calcularPerimetroCirculo() {
    const radio = document.getElementById("radio");
    const radioCirculo = parseFloat(radio.value);
    const perimetro = (radioCirculo * 2) * pi;
    alert("El perimetro del circulo es: " + perimetro);

}

function calcularAreaCirculo() {
    const radio = document.getElementById("radio");
    const radioCirculo = parseFloat(radio.value);
    const area = Math.pow(radioCirculo, 2) * pi;
    alert("El area del circulo es: " + area);
}