//O statement 'for'.

//O loop 'for' é statement(instrução) que define um bloco de código que é executado enquanto a condição for 'true'(verdadeiro):

for (let x = 0; x <= 7; x++) {
    console.log(x)
}

//Sintaxe: 
/*
    for (instrução 1; instrução 2; instrução 3) {
        Código do bloco a ser executado enquanto 'true'
    }

    A instrução 1 é executada antes do bloco do código iniciar e normalmente é usado para iniciar a contagem do valor de uma variável;

    A instrução 2 dá a condição para a execução do bloco do código sempre que retorna 'true', sendo executado pela última vez quando o retorno é 'false' termminando o 'loop';

    A instrução 3 é executada depois do bloco de código e normalmente é atribuído um incremento(x++) para a contagem do valor de uma variável.

*/

//Loop 'for...in':
//O 'statement' 'for...in' percorre todas as propriedades de um 'object:

let refri = {
    coca: " R$ 9",
    guarana: " R$ 8",
    sprite: " R$ 7",
    fanta: " R$ 7"
}

for (let p in refri) {
    console.log(p += refri[p])
}


//Os loops executam um bloco de códigos várias vezes enquanto a condição da execução for 'true'. O loop é essencia quando há a necessidade de executar um código várias vezes por conta de um valor diferente;

//O que difere da estrutura de repetição 'while' e 'do while' é que 'for' não necessita de tantas linha para formar o código, além de ser mais simples de se compreender.

//Loop 'for..in' em um 'array'.//O 'statement''for..in' também pode fazer um Loop sobre as propriedades de um 'array':

let partes = ["chave", "porta", "janela", "fogão"]
for (let x in partes) {
    console.log(partes[x])
}