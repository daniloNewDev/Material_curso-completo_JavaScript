//Definição de 'object':

//Em JavaScript quase tudo é um 'object'.
/*
    Datas são 'object';
    Maths são 'object';
    Expressões Regulares são 'object';
    Arrays sempre são 'object';
    Funções são 'object';
    Objetos, lógico que são 'object';
    Uma String se for definida com a Keyword 'new, é um 'object';
    Um Number se for definid com a Keyword 'new, é um 'object';
    Um Boolean se for definid com a Keyword 'new, também é um 'object';


Todos valores com exeção dos primitivos, são 'object'.

        Valores Primitivos:
            string, number, boolean, null,
            undefined, symbol, bigint.

*/

let pessoa = {
    nome: "Danilo", //Propriedade
    sNome: "Leite", //Propriedade
    idade: 36, //Propriedade
    nacionalidade: "Brasileiro" //Propriedade
}

//Um 'object' em JavaScript é uma coleção de "valores nomeados". Estes "Valores Nomeados" são chamados de Propriedades.


//Método de 'object:
let pessoa2 = {
        nome: "Danilo",
        sNome: "Leite",
        idade: 36,
        nacionalidade: "Brasileiro",
        nomeCompleto: function() {
            return this.nome + " " + this.sNome
        }
    }
    //Métodos são ações que podem ser executadas também em 'objects' como no exemplo acima. Por meio de uma função, usando a Keyword 'this' para acessar as propriedades específicas do 'object'.
console.log(pessoa2.nomeCompleto())