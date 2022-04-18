//Métodos JavaScript.
let pessoa = {
    nome: "Danilo",
    sNome: "Leite",
    id: 1308,
    nCompleto: function() {
        return this.nome + " " + this.sNome
            //No 'object' acima foi utilizado a "Palavra Chave" 'this'. A palavra chave 'this se refere ao 'object' que está sendo chamado, entretanto também pode se referir à outros 'objects' dependendo de como a palavra chave for utilizada.
    }
}
console.log(pessoa.nCompleto())
    //Os métodos JavaScript são ações que podem ser executadas em 'objects', ou seja, um 'method' JavaScript é uma propriedade que contém uma definição de 'function', como no exemplo acima usando 'nCompleto()'.
    /*
            Sintaxe:
                nomeDoObjeto.nomeDoMétodo()
    */

//Adicionar um método a um 'object':

pessoa.nameId = function() {
    return this.nome + " " + this.id
}

console.log(pessoa.nameId())

//Neste caso foi possível acessar as propriedades de pessoa por conta da Keyword 'this'. A keyword 'this' refere-se a um objeto global em uma função.

//Usando o método 'toUpperCase():
pessoa.oNomeCaixaAlta = function() {
    return (this.nome + " " + this.sNome).toUpperCase()
}
console.log(pessoa.oNomeCaixaAlta())