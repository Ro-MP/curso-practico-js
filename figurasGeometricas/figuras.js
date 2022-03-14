// Codigo cuadrado
console.group("Cuadrados");

function perimetroCuadrado(ladoCuadrado) {
    return ladoCuadrado * 4;
}

function areaCuadrado(ladoCuadrado){ 
    return ladoCuadrado * ladoCuadrado;
}

console.groupEnd();


// Código triángulo
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (altura * base) / 2;
}

console.groupEnd();



// Código Circulos
console.group("Círculos");
const PI = Math.PI;

function diametroCirculo(radio) {
    return 2 * radio
}

function perimetroCirculo(radio) {
    return diametroCirculo(radio) * PI
}

function areaCirculo(radio) {
    return Math.pow(radio, 2) * PI;
}

console.groupEnd();