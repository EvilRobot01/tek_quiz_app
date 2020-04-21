const canvas = document.getElementById('screen');
const ctx = canvas.getContext('2d');

const user = {
    x: 0,
    y: canvas.height / 50,
    width: 20,
    height: 20,
    color: "black",
    score: 0
}


const fg = {
    x: 0,
    y: canvas.height - 50,
    width: canvas.width,
    height: 50,
    color: "black",
}

const pipeUp = {
    x: canvas.width / 2,
    y: 0,
    width: 50,
    height: canvas.height / 2,
    color: "black"
}

const pipeDown = {
    x: canvas.width / 2,
    y: canvas.height - 200,
    width: 50,
    height: canvas.height,
    color: "black"
}


function drawRect(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
};

const gravity = 1;
user.x = 20;
user.y = 150;


document.addEventListener("keydown", moveUp);

function moveUp() {
    user.y -= 20;
}

const gap = 85;
const constant = pipeUp.height + gap;

let pipe = [];

pipe[0] = {
    x: canvas.width,
    y: 0
}

function draw() {
    drawRect(0, 0, canvas.width, canvas.height, "white");

    for (let i = 0; i < pipe.length; i++) {
        drawRect(pipe[i].x, pipe[i].y, pipeUp.width, pipeUp.height, pipeUp.color);
        drawRect(pipe[i].x, pipe[i].y + constant, pipeDown.width, pipeDown.height, pipeDown.color);

        pipe[i].x--;

        if (pipe[i].x == 125) {
            pipe.push({
                x: canvas.width,
                y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height
            })
        }
    }

    drawRect(user.x, user.y, user.width, user.height, user.color);

    drawRect(fg.x, fg.y, fg.width, fg.height, fg.color);


    user.y += gravity;

    requestAnimationFrame(draw);
}

draw();