//Método 'slice'.

//O método 'slice' retira uma parte de uma String e retorna a parte removida em uma nova String. Este método não altera a String original;

let partes = ["chave", "porta", "janela", "mesa", "fogão", "geladeira", "lavaroupas"]

console.log(partes.slice(2, 5))
    //O 'slice' para um índice antes do valor do parâmetro 'end';

/*
Sintaxe:

    string.slice(start, end)

Obs.: Caso não haja o valor no parâmetro 'end', o 'slice' vai até o final do 'array.
*/