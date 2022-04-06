function lembrarSoma(x = 0) {
    return function(y = 0) {
        return x + y
    }
}
let soma1 = lembrarSoma(2)
console.log(soma1(5))

let soma2 = lembrarSoma(3)
console.log(soma2(8))