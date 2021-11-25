const salariosCol = colombia.map(function(persona) {
    return persona.salario;
});

console.log(salariosCol)

function ordenar(a, b) {
    return a - b;
}

function calcularPar(listaElementos) {
    let par = listaElementos % 2;
    let validacion;
    if (par == 0) {
        validacion = true;
    } else {
        validacion = false;
    }
    return validacion;
}

function calcularPromedio(lista) {
    let sumaLista = lista.reduce(function(acumulador = 0, elemento) {
        return acumulador += elemento;

    })
    let promedio = sumaLista / lista.length;
    return promedio;
}

function calcularMediana(salarios) {
    let mediana = 0;
    salarios.sort(ordenar);
    let mitad = salarios.length / 2;
    const medio = parseInt(mitad);
    if (calcularPar(salarios.length)) {
        let elemento1 = salarios[medio - 1];
        let elemento2 = salarios[medio];
        mediana = calcularPromedio([elemento1, elemento2]);
    } else {
        mediana = salarios[medio];
    }
    console.log("la mediana es: " + mediana);
}

calcularMediana(salariosCol);