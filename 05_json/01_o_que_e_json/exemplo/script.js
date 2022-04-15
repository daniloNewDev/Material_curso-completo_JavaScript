//'JSON'

//JSON significa JavaScript Object Notation.
//O 'JSON' é um txto e pode ser transportado para qualquer lugar e ser interpretado por qualquer linguagem de programação:

let meuObjeto = {
        "nome": "Moshe",
        "idade": 3500,
        "natural": "Mitzraim",
        "profissal": "Tsadik",
        "missao": "liberdade"
    }
    //O método 'stringify()' converte um 'object' JavaScript em um 'JSON':
console.log(JSON.stringify(meuObjeto))


//O método 'parse()' analisa 'JSON' e retorna um 'object' JavaScript;