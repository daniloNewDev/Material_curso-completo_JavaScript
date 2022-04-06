function soma(a, b) {
    if (a === undefined || b === undefined) {
        console.log('Esta função precisa de mais argumentos.')
    } else {
        return a + b
    }
}
console.log(soma(2, 6))

function saudacao(nome, idade) {
    if (nome === undefined) {
        console.log(`Olá, ${nome}`)
    } else {
        console.log(`Olá, ${nome}, você tem ${idade} anos de idade.`)
    }
}

console.log(saudacao("Danilo", 36))