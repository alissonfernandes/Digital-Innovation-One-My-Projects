let canvas = document.getElementById('snake');
let context = canvas.getContext('2d');

let box = 35;

//Localização inicial cobrinha
let snake = [];
snake[0] = {
    x: 8*box,
    y: 8*box
}

//Intervalo de tempo para iniciar jogo
let jogo = setInterval(iniciarJogo, 100);

//Direção da cobrinha(right, left, up, down)
let direction  = "right";

function iniciarJogo(){
    criarBG();
    criarCobrinha();

    let snakex = snake[0].x;
    let snakey = snake[0].y;

    if(direction == 'right') snakex += box;
    if(direction == 'left') snakex -+ box;
    if(direction == 'up') snakey -= box;
    if(direction == 'down') snakey += box;

    let newhad = {
        x: snakex,
        y: snakey
    }

    snake.pop();
    snake.unshift(newhad);
}

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
