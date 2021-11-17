/* 
Taller 2: porcentajes y descuentos 
1. Definir las formulas
2. Implementar las formulas
3. Crear funciones
4. Integrar JS con HTML
*/



function calcularDescuento() {
    const precioOriginal = document.getElementById("precioOriginal");
    const descuentoOriginal = document.getElementById("descuento");
    const precioO = parseFloat(precioOriginal.value);
    const descuentoO = parseInt(descuentoOriginal.value);
    const porcentajeDescuentoTotal = 100 - descuentoO;
    const precioFinal = (precioO * porcentajeDescuentoTotal) / 100;
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "El precio con descuento son: $" + precioFinal;

}

function calcularDescuentoCupones() {
    const precioOriginal = document.getElementById("precioOriginal");
    const precioO = parseFloat(precioOriginal.value);
    const cuponIngresado = document.getElementById("cupon");
    const cupon = cuponIngresado.value;
    const cupones = [{
            nombre: "buenDescuento",
            descuento: 15
        },
        {
            nombre: "SALE",
            descuento: 20
        }, {
            nombre: "comprarNoEsTanBueno",
            descuento: 30
        }
    ];
    const cuponValido = function(cupones) {
        return cupones.nombre == cupon;
    }
    const cuponUsuario = cupones.find(cuponValido);
    if (!cuponUsuario) {
        alert("El cupon no es valido");
    } else {
        const descuentoO = cuponUsuario.descuento;
        const porcentajeDescuentoTotal = 100 - descuentoO;
        const precioFinal = (precioO * porcentajeDescuentoTotal) / 100;

        const resultadoCupones = document.getElementById("resultadoCupones");
        resultadoCupones.innerHTML = "El precio con el descuento del cupon elegido es: $ " + precioFinal;
    }

}