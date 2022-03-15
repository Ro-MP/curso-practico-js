const lista = [
    100,
    9,
    200,
    300,
    7000,
    400,
    500000
];

lista.sort(
    function (a, b) {
        return a - b;
    }
);

function calcularMediana() {
    const mitadLista = lista.length / 2;
    let mediana = 0;
    if ((lista.length % 2) == 0) {
        mediana = (lista[mitadLista] + lista[mitadLista - 1]) / 2;
    } else {
        mediana = lista[parseInt(mitadLista)];
    }

    return mediana;
}
