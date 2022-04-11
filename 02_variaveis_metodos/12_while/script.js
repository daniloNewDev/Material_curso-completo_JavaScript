//Statement 'while'.

//O 'statement'(instrução) 'while' cria um loop ao redor de um bloco de código que é executado enquanto uma condição é 'true'. Caso a condição seja 'false', a execução do loop para;

let y = 0
while (y < 4) {
    console.log("O y é " + y)
    y++
}

//Do maior valor ao menor:
let x = 7;
while (x > 0) {
    console.log("O x é " + x);
    x-- /*atribuição negativa*/
}

//Sintaxe:
/*
    while(condição){
        bloco do código a ser executado
    }

Obs.: Caso a condição seja sempre verdadeira(como número infinito), o loop nunca terminará, travando o navegador. É preciso bastante atenção para que não ocorra este erro.
*/

//'while' em um 'array'.
//Neste exemplo o while retorna o índice e o valor das propriedades do 'array':
let casa = ["Janela", "Maçaneta", "Porta", "Chave"]
let i = 0

while (i < casa.length) {
    console.log(i, casa[i])
    i++
}