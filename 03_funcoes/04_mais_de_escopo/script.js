let x = 10;
if (x > 5) {
    let x = 20;
    x++;
    console.log(x);
}
console.log(x);

//Atualmente, com let e const, qualquer bloco de código pode separar seu escopo, por exemplo, if; for; while;

//ou seja, é possível haver escopos diferentes, não somente com function.