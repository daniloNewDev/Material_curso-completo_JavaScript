//'includes()'

//O método 'includes()' retorna um 'Boolean' 'true' se o elemento existir dentro do 'array' e retorna 'false' se o elemento não existir dentro do 'array' específico:

let carros = ["GMC", "VW", "Fiat", "Ford"]

console.log(carros.includes("Ford"))
console.log(carros.includes("Audi"))

/*
    Sintaxe:
    array.includes(element, start)

Obs.: No campo dos parâmetros o 'element' é requirido, porém o início por default é 0.
*/