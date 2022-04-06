let nome = "Danilo";

for (let i = 0; i < 10; i = i + 1) {
    if (i == 3) {
        nome = "Moshe";
    }
    if (i == 5 && nome == "Moshe") {
        console.log("O nome é Moshe, pode parar");
        break;
    }
    console.log(i);
}