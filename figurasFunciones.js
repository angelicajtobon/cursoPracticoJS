/*Taller N° 2: Figuras Geometricas

-Tercero: Crear Funciones
-Cuarto: Integrar JS  con html

*/

// Calculo de los cuadros
const ladoCuadrado = 5;

function mostrarLado(ladoCuadrado) {
    return ladoCuadrado;
}

function calcularPerimetroCuadrado(ladoCuadrado) {
    return ladoCuadrado * 4;
}

function calcularAreaCuadrado(ladoCuadrado) {
    return Math.pow(ladoCuadrado, 2);
}

console.group("Cuadros");
console.log("Los lados del cuadrado miden : " + mostrarLado(ladoCuadrado) + " cm");
console.log("El perimetro del cuadrado es: " + calcularPerimetroCuadrado(ladoCuadrado) + " cm");
console.log("El area del cuadrado es: " + calcularAreaCuadrado(ladoCuadrado) + " cm^2");
console.groupEnd();

//Codigo del triangulo


const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const base = 4;
const alturaTriangulo = 5.5;

function mostrarLados(ladoTriangulo1, ladoTriangulo2, base) {
    return ladoTriangulo1 + " cm, Lado 2: " + ladoTriangulo2 + "cm y Base: " + base;
}

function calcularPerimetroTriangulo(ladoTriangulo1, ladoTriangulo2, base) {
    return ladoTriangulo1 + ladoTriangulo2 + base;
}

function mostrarAlturaTriangulo(alturaTriangulo) {
    return alturaTriangulo;
}

function calcularAreaTriangulo(alturaTriangulo, base) {
    return (base * alturaTriangulo) / 2;
}

console.group("Triangulo");
console.log("Medidas del triangulo: Lado 1: " + mostrarLados(ladoTriangulo1, ladoTriangulo2, base));
console.log("El perimetro del triangulo es: " + calcularPerimetroTriangulo(ladoTriangulo1, ladoTriangulo2, base) + " cm");
console.log("La altura del triangulo es: " + mostrarAlturaTriangulo(alturaTriangulo) + " cm");
console.log("El area del Triangulo es: " + calcularAreaTriangulo(alturaTriangulo, base) + " cm^2");
console.groupEnd();

//Codigo del circulo

const radioCirculo = 4;
const pi = Math.PI;


function mostrarRadioCirculo(radioCirculo) {
    return radioCirculo;
}

function calcularDiametroCirculo(radioCirculo) {
    return radioCirculo * 2;
}

function calcularPerimetroCirculo(radioCirculo, pi) {
    return calcularDiametroCirculo(radioCirculo) * pi;

}

function calcularAreaCirculo(radioCirculo, pi) {
    return Math.pow(radioCirculo, 2) * pi;
}

console.group("Circulos");
console.log("El radio del cirulo es: " + mostrarRadioCirculo(radioCirculo) + " cm");
console.log("El diametro del cirulo es: " + calcularDiametroCirculo(radioCirculo) + " cm");
console.log("El perimetro del circulo es : " + calcularPerimetroCirculo(radioCirculo) + " cm");
console.log("El area del cirulo es: " + calcularAreaCirculo(radioCirculo, pi) + " cm^2");
console.groupEnd();