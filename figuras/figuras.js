/*Taller N° 1: Figuras Geometricas

-Primer paso: Definir las formulas
-Segundo: implementar las formnulas  en JS
-Tercero: Crear Funciones
-Cuarto: Integrar JS  con html

*/


//Codigo del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden : " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");

const areaCuadrado = Math.pow(ladoCuadrado, 2);
console.log("El area del cuadrado es: " + areaCuadrado + " cm^2");

console.groupEnd();

//Codigo del triangulo

console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const base = 4;
console.log("Medidas del triangulo: Lado 1: " + ladoTriangulo1 + " cm, Lado 2: " + ladoTriangulo2 + "cm y Base: " + base);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + base;
console.log("El perimetro del triangulo es: " + perimetroTriangulo + " cm");

const alturaTriangulo = 5.5;
console.log("La altura del triangulo es: " + alturaTriangulo + " cm");

const areaTriangulo = (base * alturaTriangulo) / 2;
console.log("El area del Triangulo es: " + areaTriangulo + " cm^2");

console.groupEnd();

//Codigo del circulo

console.group("Circulos");
const radioCirculo = 4;
console.log("El radio del cirulo es: " + radioCirculo + " cm");

const diametroCirculo = radioCirculo * 2;
console.log("El diametro del cirulo es: " + diametroCirculo + " cm");

const pi = Math.PI;
console.log("El valor de PI es: " + pi);

const perimetroCirculo = diametroCirculo * pi;
console.log("El perimetro del circulo es : " + perimetroCirculo + " cm");

const areaCirculo = Math.pow(radioCirculo, 2) * pi;
console.log("El area del cirulo es: " + areaCirculo + " cm^2");





console.groupEnd();