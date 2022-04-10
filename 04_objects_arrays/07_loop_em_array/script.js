//Os loops executam um bloco de códigos várias vezes. O loop é essencia quando há a necessidade de executar um código várias vezes por conta de um valor diferente;

//Temos um Array logo abaixo:
let casa = ["porta", "janela", "piso"]

//Para acessar cada propriedades por vez é necessário repetir o mesmo código para cada propriedade específica:
console.log(casa[0])
console.log(casa[1])
console.log(casa[2])


//Com a execução do loop o código fica menos extenso, inclusive se a quantidade de propriedades for alta:
for (let i = 0; i <= casa.length; i++) {
    console.log(casa[i])
}