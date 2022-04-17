//'JSON'

//JSON significa JavaScript Object Notation;
//O JSON está ligado a área de desenvolvimento de Software e com o tempo tornou-se um padrão muito usado para troca de informações entre sistemas. Ele define um padrão para armazenamento e troca de informações em formato Text;

//Apesar de ser muito parecido com um 'object' JS, o arquivo JSON tem alguns traços usados na linguagem 'C';

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
let meuJson = '{"nome":"ytzhak","idade": 4800,"natural":"Israel","profissao": "patirarca"}'

console.log(JSON.parse(meuJson))