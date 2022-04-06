/*Estruturas de controle são bastante usadas no dia a dia da programação. Sua principal função é fazer com que o sistema possa tomar decisões de acordo com resultados de BOOLEANS;*/

let idade = 19;

if (idade == 19) {
    console.log("A idade é = 19"); /**/
}

if (idade > 25) {
    console.log("A idade é maior que 25");
}

let nome = "Danilo";

if (nome == "Danilo" && idade > 18) {
    console.log("Liberado!");
}

let passaporte = true;

if ((nome == "Danilo" && idade > 18) || passaporte == true) {
    console.log("Liberado Ok!");
}