//Keys.

//O método Object.keys() retorna um Array enumerado de um determinado objeto, na mesma ordem em que é fornecida à um laço 'for...in.(???);

//Sintaxe Object.keys(); Parâmetros é o Objeto(Object.keys(obj)) cujas propriedades são enumeráveis;
let carros = ["VW", "Fiat", "GMC", "Jeep"]
console.log(Object.keys(carros))


//No caso de um Objeto o método 'Object.keys()' retorna o nome das propriedades do objeto:
let carros2 = {
    vw: "Gol",
    fiat: "Pálio",
    gmc: "S10",
    jeep: "renegade"
}
console.log(Object.keys(carros2))