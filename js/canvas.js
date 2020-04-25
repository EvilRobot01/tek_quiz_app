const canvas = document.getElementById('screen');
const ctx = canvas.getContext("2d");

let score;
let highscore;
let gameScreen;
let gravity;
let obstacles;
let gameSpeed;
let keys = [];

const gameState = { Menu: 0, GameScreen: 1, GameOver: 1, CharacterShow: 2 };
let currentState = gameState.Menu;

function getState() {


}

function setState() {}

class Square {
    constructor(x, y, w, h, c) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;

        this.score = 0;
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

gameScreen = [new Square(0, 0, canvas.width / 3, canvas.height / 2 - 5, 'black'),
    new Square(canvas.width / 3 + 5, 0, canvas.width / 3 - 5, canvas.height / 2 - 5, 'black'),
    new Square(canvas.width - canvas.width / 3 + 5, 0, canvas.width / 3, canvas.height / 2 - 5, 'black'),
    new Square(0, canvas.height / 2, canvas.width / 3, canvas.height / 2, 'black', 0),
    new Square(canvas.width / 3 + 5, canvas.height / 2, canvas.width / 3 - 5, canvas.height / 2, 'black'),
    new Square(canvas.width - canvas.width / 3 + 5, canvas.height / 2, canvas.width / 3, canvas.height / 2, 'black')
];

let menu = new Square(canvas.width / 3, canvas.height / 3, canvas.width / 3, canvas.height / 3, 'black');


function showCoords(evt) {
    let mouse = new Object;
    mouse.x = event.clientX;
    mouse.y = event.clientY;

    return mouse;
}

function setCoord(evt) {
    return showCoords(evt).x > evt.x && showCoords(evt).y > evt.y && showCoords(evt).x < evt.w + evt.x && showCoords(evt).y < evt.h + evt.y;
}

//Mouse event
canvas.addEventListener('click', function(evt) {

    //Menu screen
    if (currentState == gameState.Menu) {
        if (setCoord(menu)) {
            console.log("Hey, you started ");
            currentState = gameState.GameScreen;
        }
    }

    //Game Screen
    if (currentState == gameState.GameScreen) {
        if (setCoord(gameScreen[0])) {
            console.log("this is gameScreen[0]");
            gameScreen[0].Add_Score();
            console.log("gameScreen[0]: " + gameScreen[0].score);
        } else if (setCoord(gameScreen[1])) {
            console.log("this is gameScreen[1]");
            gameScreen[1].Add_Score();
            console.log("gameScreen[1]: " + gameScreen[1].score);
        } else if (setCoord(gameScreen[2])) {
            console.log("this is gameScreen[2]");
            gameScreen[2].Add_Score();
            console.log("gameScreen[2]: " + gameScreen[2].score);
        } else if (setCoord(gameScreen[3])) {
            console.log("this is gameScreen[3]");
            gameScreen[3].Add_Score();
            console.log("gameScreen[3]: " + gameScreen[3].score);
        } else if (setCoord(gameScreen[4])) {
            console.log("this is gameScreen[1]");
            gameScreen[4].Add_Score();
            console.log("gameScreen[4]: " + gameScreen[4].score);
        } else if (setCoord(gameScreen[5])) {
            console.log("this is gameScreen[5]");
            gameScreen[5].Add_Score();
            console.log("gameScreen[5]: " + gameScreen[5].score);

        }
    }
})



function Start() {
    canvas.width = 600;
    canvas.height = 300;

    ctx.font = "20px sans-serif";

    gameSpeed = 3;


    score = 0;
    highscore = 0;

    requestAnimationFrame(Update);
}

function Update() {
    requestAnimationFrame(Update);
    if (currentState == gameState.Menu) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        menu.Draw();

    }
    if (currentState == gameState.GameScreen) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let items in gameScreen) {
            gameScreen[items].Draw();
        }
    }

}

Start();