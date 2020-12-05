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

//food
let food = {
    x: Math.floor(Math.random()*15+1) * box,
    y: Math.floor(Math.random()*15+1) * box
}

function iniciarJogo(){
    if(snake[0].x > 15*box && direction == 'right') snake[0].x = 0;
    if(snake[0].x < 0 && direction == 'left') snake[0].x = 16*box;
    if(snake[0].y > 15*box && direction == 'down') snake[0].y = 0;
    if(snake[0].y < 0 && direction == 'up') snake[0].y = 16*box;

    criarBG();
    criarCobrinha();
    drawFood();

    let snakex = snake[0].x;
    let snakey = snake[0].y;

    if(direction == 'right') snakex += box;
    if(direction == 'left') snakex -= box;
    if(direction == 'up') snakey -= box;
    if(direction == 'down') snakey += box;

    

    if(snake.x != food.x || snake.y != food.y){
        snake.pop()
    } else{
        food.x = Math.floor(Math.random()*15+1)*box;
        food.y = Math.floor(Math.random()*15+1)*box;
    }

    let newhad = {
        x: snakex,
        y: snakey
    }

    snake.unshift(newhad);
}

//Atualizar direção
document.addEventListener('keydown', update);

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

function update(event){
    if(event.keyCode == 37 && direction != 'right') direction = 'left';
    if(event.keyCode == 38 && direction != 'down') direction = 'up';
    if(event.keyCode == 39 && direction != 'left') direction = 'right';
    if(event.keyCode == 40 && direction != 'up') direction = 'down';
}

//Criar comidinha
function drawFood(){
    context.fillStyle = 'red';
    context.fillRect(food.x, food.y, box, box);
}