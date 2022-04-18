//Exibindo 'object':

let pessoa = {
    nome: "Danilo",
    idade: 36,
    nacionalidade: "Brasileiro",
    cnh: true
}

//Exibindo as propriedades do 'object' acima pelo nome da propriedade: 
console.log(pessoa.nome, pessoa.nacionalidade)

//Exibindo as propriedades do 'object' acima pelo método Object.values(), retornando as propriedades em formato 'array':
console.log(Object.values(pessoa))


//Exibindo as propriedades do 'object' acima por meio de um 'JSON.stringify()', que por sua vez, retorna uma "notação JSON":
console.log(JSON.stringify(pessoa))
    //O 'JSON.stringify' não retornará funções.


//Exibindo as propriedades do 'object' acima por meio de um Loop:
let valor = " "
for (let i in pessoa) {
    valor += pessoa[i]
}
console.log(valor)