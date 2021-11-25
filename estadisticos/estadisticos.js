/* 
Taller 3: formulas estadisticos
1. Definir las formulas
2. Implementar las formulas
3. Crear funciones
4. Integrar JS con HTML
*/

const lista1 = [
    250,
    100,
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

function ordenar(elementoA, elementoB) {
    return elementoA - elementoB;
}


function calcularMediana(lista) {
    let mediana;
    lista.sort(ordenar);
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


/*function comparar(elementoAnterior, elementoSiguiente) {
    let acumulador = 0;
    let lista = [];
    let organizador = {};
    if (elementoAnterior == elementoSiguiente) {
        lista[acumulador] += 1;

        return console.log("la moda es: " + elementoSiguiente + "se repite " + lista[acumulador] + " veces");
    } else {
        lista[acumulador] = lista[acumulador];
    }
    console.log(lista);
}*/

function calcularModa(lista) {
    const listaContador = {};

    lista.map(
        function(elemento) {
            if (listaContador[elemento]) {
                listaContador[elemento] += 1;
            } else {
                listaContador[elemento] = 1;
            }

        }

    );
    //Convertir el objeto en arreglo
    const listaArreglo = Object.entries(listaContador);
    listaArreglo.sort(function(a, b) {
        return a[1] - b[1];
    });
    console.log(listaArreglo[listaArreglo.length - 1])

}

calcularModa(lista1);

// RETO: Elegir otro tipo de promedio para trabajar
//MEDIA ARMONICA

function calcularMediaArmonica(lista) {
    let mediaArmonica = 0;
    let acumulardor = 0;
    lista.forEach(function(elemento) {
        acumulardor += (1 / elemento)
    });
    mediaArmonica = lista.length / acumulardor;
    console.log("la media armonica es: " + mediaArmonica);
};

calcularMediaArmonica(lista1);