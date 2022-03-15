const list = [
    1,
    2,
    3,
    4,
    1,
    4,
    1,
    2,
    1,
    3,
    1,
    4,
    9,
    9,
    11,
    11,
    11,
    11,
    11,
    11,
    11,
    11
];


function calcularModa(lista){
    const listaCount = {};

    lista.map (
        function(elemento) {
            if (listaCount[elemento]){
                listaCount[elemento] ++;
            } else {
                listaCount[elemento] = 1;
            }
        } 
    );

    const listaArray = Object.entries(listaCount).sort(
        function(a, b){
            return a[1]-b[1];
        }
    );

    return listaArray[listaArray.length - 1]
}

