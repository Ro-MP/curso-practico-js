// const lista1 = [
//     100,
//     200,
//     300,
//     500
// ];

function calcularPromedio(lista) {
    // let sumaLista = 0;
    // lista.forEach(function(elemento) {
    //     sumaLista += elemento;        
    // });

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, elemento) {
            return valorAcumulado + elemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}