const salarios = colombia.map(
    function (persona) {
        return persona.salary;
    }
);

const salariosSorted = salarios.sort(
    function(a, b){
        return a - b;
    }
);


// Calculador Mediana

function calcularMediana(lista) {
    const mitadLista = lista.length / 2;
    let mediana = 0;
    if ((lista.length % 2) == 0) {
        mediana = (lista[mitadLista] + lista[mitadLista - 1]) / 2;
    } else {
        mediana = lista[parseInt(mitadLista)];
    }
    return mediana;
}


const medianaGeneral = calcularMediana(salariosSorted)


// Mediana Top 10%
const spliceStar = ((salariosSorted.length * 90) / 100);
const spliceCount = salariosSorted.length - spliceStar;
const salariosTop10 = salariosSorted.splice(spliceStar, spliceCount);
const medianaTop10 = calcularMediana(salariosTop10);

// Calculador Moda

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


console.log({
    medianaGeneral,
    medianaTop10,

})