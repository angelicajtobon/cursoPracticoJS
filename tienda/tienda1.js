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
    alert("El precio total a pagar es: $" + precioFinal);
}