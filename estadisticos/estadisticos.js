/* 
Taller 3: formulas estadisticos
1. Definir las formulas
2. Implementar las formulas
3. Crear funciones
4. Integrar JS con HTML
*/

const lista1 = [
    250,
    500,
    100,
    200,
    300,
    400,
    400,
    500,
    100,
    100,
];

function calcularPromedio(lista) {
    /*let sumaLista = 0;
    for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i];
    }*/

    //Otra forma de hacer con reduce
    let sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedio = sumaLista / lista.length;

    return promedio;
}

calcularPromedio(lista1);

function esPar(numero) {
    let resultado = numero % 2;
    let validacion;
    if (resultado == 0) {
        validacion = true;
    } else {
        validacion = false;
    }
    return validacion;
}

function comparar(elementoA, elementoB) {
    return elementoA - elementoB;
}


function calcularMediana(lista) {
    let mediana;
    lista.sort(comparar);
    console.log(lista);
    let mitadLista = lista.length / 2;
    let mitad = parseInt(mitadLista);
    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];
        console.log(elemento1, elemento2)
        mediana = calcularPromedio([elemento1, elemento2]);
    } else {
        mediana = lista[mitad];
    }
    console.log("La mediana es: " + mediana);
};

calcularMediana(lista1);

function calcularModa(lista) {

}

calcularModa(lista1);