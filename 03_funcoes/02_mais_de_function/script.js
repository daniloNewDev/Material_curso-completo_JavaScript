function multiplicarTresNumeros(x, y, z) {
    return x * y * z;
}

console.log(multiplicarTresNumeros(2, 3, 4));

const mult = multiplicarTresNumeros(5, 4, 8);

console.log("O valor de mult é " + mult);

function autorizacao(idade, cnh) {
    if (idade >= 18 && cnh == true) {
        console.log("Apto para dirigir.");
    } else {
        console.log("Não apto para dirigir.");
    }
}

console.log(autorizacao(19, true));
console.log(autorizacao(25, true));
console.log(autorizacao(44, 0));
console.log(autorizacao(19, 1));
console.log(autorizacao(17, false));
console.log(autorizacao(33, false));