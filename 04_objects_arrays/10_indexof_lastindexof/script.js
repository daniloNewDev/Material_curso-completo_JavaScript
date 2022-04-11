//'indexOf()' e 'lastIndexOf()'.

//O método 'indexOf()' encontra um item específico e retorna o índice deste item em questão:

let numeros = ["dois", "quatro", "nove", "quatorze"]
console.log(numeros.indexOf("nove"))
    /*
        Sintaxe:
            array.indexOf("item")
    */
    //por default o 'indexOf()' inicia no índice 0(array.indexOf(item, início)), porém é necessário declarar o nome do item, caso contrário retorna -1:
console.log(numeros.indexOf())


//O método 'lastIndexOf()' retorna a posição do último índice de um item:

let sacolao = ["uva", "laranja", "maçã", "limão", "uva", "limão", "laranja", "limão"]
console.log(sacolao.lastIndexOf("limão"))
    /*
        Sintaxe:
            array.lastIndexOf("item", início)

            Obs.:O índice inicial é opcional, o valor default do índice é 0.
    */