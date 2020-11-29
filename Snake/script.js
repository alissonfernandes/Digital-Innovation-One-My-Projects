let canvas = document.getElementById('snake');
let context = canvas.getContext('2d');

let box = 35;

criarBG();

function criarBG(){
    context.fillStyle = "Lightgreen";/**Cor de fundo */
    context.fillRect(0, 0, 16*box, 16*box);
}
