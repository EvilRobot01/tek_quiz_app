const canvas = document.getElementById('screen');
const ctx = canvas.getContext("2d");

let score;
let highscore;
let fullMap;
let gravity;
let obstacles;
let gameSpeed;
let keys = [];

class Square {
    constructor(x, y, w, h, c, score) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;

        this.score = 0;
        this.dy = 0;
        this.jumpForce = 15;
        this.originalHeight = h;
    }

    /*Animate() {
        if () {

        } else {

        }
    }*/
    Add_Score() {
        this.score++;
    }

    Draw() {
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.closePath();

    }
}
let square_1 = new Square(0, 0, canvas.width / 3, canvas.height / 2 - 5, 'black', 0);
let square_2 = new Square(canvas.width / 3 + 5, 0, canvas.width / 3 - 5, canvas.height / 2 - 5, 'black', 0);
let square_3 = new Square(canvas.width - canvas.width / 3 + 5, 0, canvas.width / 3, canvas.height / 2 - 5, 'black', 0);
let square_4 = new Square(0, canvas.height / 2, canvas.width / 3, canvas.height / 2, 'black', 0);
let square_5 = new Square(canvas.width / 3 + 5, canvas.height / 2, canvas.width / 3 - 5, canvas.height / 2, 'black', 0);
let square_6 = new Square(canvas.width - canvas.width / 3 + 5, canvas.height / 2, canvas.width / 3, canvas.height / 2, 'black', 0);

fullMap = [square_1, square_2, square_3, square_4, square_5, square_6

];

function showCoords(event) {
    let mouse = new Object;
    mouse.x = event.clientX;
    mouse.y = event.clientY;

    return mouse;
}

/*Mouse event*/
canvas.addEventListener('click', function(evt) {
    let mouse = showCoords(evt);
    console.log(mouse.x, mouse.y);

    if (mouse.x > square_1.x && mouse.y > square_1.y && mouse.x < square_1.w && mouse.y < square_1.h) {
        console.log("this is square 1");
        square_1.Add_Score();
        console.log("square 1: " + square_1.score);
    } else if ((mouse.x > square_2.x && mouse.y > square_2.y && mouse.x < square_2.w + square_2.x && mouse.y < square_2.h + square_2.y)) {
        console.log("this is square 2");
        square_2.Add_Score();
        console.log("square 2: " + square_2.score);
    } else if ((mouse.x > square_3.x && mouse.y > square_3.y && mouse.x < square_3.w + square_3.x && mouse.y < square_3.h + square_3.y)) {
        console.log("this is square 3");
        square_3.Add_Score();
        console.log("square 3: " + square_3.score);
    }
})



function Start() {
    canvas.width = 600;
    canvas.height = 300;

    ctx.font = "20px sans-serif";

    gameSpeed = 3;
    gravity = 1;

    score = 0;
    highscore = 0;

    requestAnimationFrame(Update);

}

function Update() {
    requestAnimationFrame(Update);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let items in fullMap) {
        fullMap[items].Draw();
    }

}

Start();