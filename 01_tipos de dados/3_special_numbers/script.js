function somar(x, y) {
    console.log(y);
    if (typeof x != "number") {
        return "Não válido"
    }
    return x + y;
}


console.log(somar(2, 10));

let a = 3,
    b = 5,
    c = 7;
console.log(somar(b, c));
console.log(somar(""))