let canvas = document.getElementById('snake');
let context = canvas.getContext('2d');

let box = 35;

//Localização inicial cobrinha
let snake = [];
snake[0] = {
    x: 8*box,
    y: 8*box
}

criarBG();
criarCobrinha();

/** Criar background */
function criarBG(){
    context.fillStyle = "Lightgreen";/**Cor de fundo */
    context.fillRect(0, 0, 16*box, 16*box);
}

/** Criar Cobrinha */
function criarCobrinha(){

    for(i=0; i< snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}
