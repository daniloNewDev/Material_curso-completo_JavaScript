//Objetos.

//Objetos no JavaScript são também variáveis, entretanto o objeto pode conter muitos valores;

let usuario = { nome: "Danilo", sobrenome: "Leite", idade: 36, cnh: true }

//Estes valores são declarados em pares com nome e valor separados por dois pontos (nome: valor), a quebra de linha não faz diferença na definição dos objetos:

let usuario2 = {
    nome: "Shalom",
    sobrenome: "Boker Tov",
    idade: 36,
    cnh: true
}

//Propriedades:

//Os valores em pares(nome: valor) atribuídos às variáveis são denominados PROPRIEDADES. Há duas maneiras de accessar essas propriedades:

//nomeDoObjeto.nomeDaPropriedade:
console.log(usuario.nome + " " + usuario.sobrenome)

//nomeDoObjeto[nomeDaPropriedade]:

console.log(usuario2["nome"])
console.log(usuario2["nome"] + " " + usuario2["sobrenome"])

//Portanto 'Objetos' em JavaScript são containers para VALORES NOMEADOS chamados de Propriedades.


//Métodos de Objetos.

//Objetos também podem ter métodos. Neste caso, são ações que podem ser executadas em objetos. Os métodos são armazenados em propriedades(nome:valor) como definições de functions:

let usuario3 = {
        nome: "Iehudah",
        sobreNome: "ben Adam",
        idade: 36,
        cnh: true,
        nomeCompleto: function() { return this.nome + " " + this.sobreNome }
    }
    /*Aqui neste exemplo

    "function() { return this.nome + " " + this.sobreNome }"

    "this" se refere ao objeto, nesse caso se refere ao objeto "usuario3"
    
//então 'this.nome' se refere à propriedade "nome" do "usuario3";
//e 'this.soberNome' se refere à propriedades "sobreNome" do objeto usuario3".

    nota-se que foi usado a palavra "this". O "this" é uma 'Palavra-Chave' não é uma propriedade e nem um método.


    */

//É possivél acessar o método do objeto com a sintaxe 'nomeDoObjeto.nomeDoMétodo()', como no exemplo abaixo:

console.log(usuario3.nomeCompleto())
    //O método é acessado no formato de uma Function.