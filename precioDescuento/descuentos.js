// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * (porcentajePrecioConDescuento)) / 100;
    return precioConDescuento;
}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });


function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice").value;
    const inputDiscount = document.getElementById("inputDiscount").value;

    const resultPrice = document.getElementById("resultPrice");

    resultPrice.innerText = "El precio con descuento son: $" + calcularPrecioConDescuento(inputPrice, inputDiscount);
}