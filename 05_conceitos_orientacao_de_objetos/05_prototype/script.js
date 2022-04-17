//'Prototype', proptótipo.

//Todos os 'object' JavaScript herdam propriedades e métodos de um 'prototype';

//No caso do 'object constructors':

function Pessoa(n, sN, id) {
    this.nome = n;
    this.sNome = sN;
    this.idade = id;
}
//Neste exemplo de 'object' acima é possível criar um 'object' pela erança deste primeiro:


let dim = new Pessoa("Ingrid", "Navarro", 31)
let belinha = new Pessoa("Isabella", "Navarro", 8)
let helo = new Pessoa("Heloísa", "Navarro", 6)
let samuel = new Pessoa("Samuel", "Navarro", 2)
    //No exemplo acima, na "função construtora de objeto" foi utilizada a palavra-chave 'new' para criar um 'object' a partir do 'prototype'.

console.log(dim.nome, dim.sNome)
console.log(helo.idade)



//É possível adicionar uma propriedade a um 'object' criado, porém não é possível adicionar novas propriedades a uma "função construtora":
helo.nacionalidade = "Brasileira"

console.log(helo.nome, helo.idade, helo.nacionalidade)
console.log(dim.nome, dim.idade, dim.nacionalidade)