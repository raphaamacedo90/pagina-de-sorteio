let pessoas = ["Raphael","Karine","Sophia","João","Pedro","Gustavo","Matheus","Mario","Junior","Juliana"]

function sortear (){

    let np = pessoas.length;

    let ns = Math.floor(Math.random() * np);

    document.getElementById("d").innerHTML = pessoas[ns];
}