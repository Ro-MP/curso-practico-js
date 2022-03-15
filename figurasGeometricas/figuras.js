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
    return Number(lado1) + Number(lado2) + Number(base);
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




// Aquí interactuamos con html
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado").value;
    const perimetro = perimetroCuadrado(input);
    alert(String(perimetro));
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado").value;
    const area = areaCuadrado(input);
    alert(String(area));
}

function calcularPerimetroTriangulo() {
    const lado = document.getElementById("inputTrianguloLado").value
    const base = document.getElementById("inputTrianguloBase").value
    const perimetro = perimetroTriangulo(lado, lado, base)
    alert(String(perimetro))
}

function calcularAreaTriangulo() {
    const lado = document.getElementById("inputTrianguloLado").value
    const base = document.getElementById("inputTrianguloBase").value
    const altura = Math.sqrt((lado**2) - ((base/2)**2))
    alert(areaTriangulo(base, altura))
}