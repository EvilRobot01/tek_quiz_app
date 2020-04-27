const canvas = document.getElementById('screen');
const ctx = canvas.getContext("2d");

let score;
let highscore;
let menu;
let gameScreen;
let warning_borders;
let characters;
let character_screen;
let gravity;
let obstacles;
let gameSpeed;
let keys = [];

const gameState = { Menu: 0, GameScreen: 1, GameOver: 2, CharacterShow: 3, WarningBorders: 4 };
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
        this.show_pic;
        this.score = 0;
    }

    Show_() {
        this.show_pic = true;
    }
    Hide_() {
        this.hide_pic = false;
    }
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

menu = new Square(canvas.width / 3, canvas.height / 3, canvas.width / 3, canvas.height / 3, 'black');

warning_borders = [new Square(0, 0, canvas.width, canvas.height / 10, 'red'),
    new Square(0, canvas.height - canvas.height / 10, canvas.width, canvas.height / 10, 'red')
];

gameScreen = [new Square(0, 0, canvas.width / 3, canvas.height / 2 - 5, 'black'),
    new Square(canvas.width / 3 + 5, 0, canvas.width / 3 - 5, canvas.height / 2 - 5, 'black'),
    new Square(canvas.width - canvas.width / 3 + 5, 0, canvas.width / 3, canvas.height / 2 - 5, 'black'),
    new Square(0, canvas.height / 2, canvas.width / 3, canvas.height / 2, 'black', 0),
    new Square(canvas.width / 3 + 5, canvas.height / 2, canvas.width / 3 - 5, canvas.height / 2, 'black'),
    new Square(canvas.width - canvas.width / 3 + 5, canvas.height / 2, canvas.width / 3, canvas.height / 2, 'black')
];

character_screen = new Square(canvas.width / 4, 0, canvas.width / 4 + canvas.width / 4, canvas.height / 3 * 2, 'white');
let joy = new Image();
joy.src = 'images/1_img.png';

characters = [new Image(), new Image(), new Image(), new Image(), new Image(), new Image()];
characters[0].src = 'images/1_img.png';
characters[1].src = 'images/1_img.png';
characters[2].src = 'images/1_img.png';
characters[3].src = 'images/1_img.png';
characters[4].src = 'images/1_img.png';
characters[5].src = 'images/1_img.png';

function spam_options() {
    let options;
    options = [new Square(canvas.width / 4 - 25, canvas.height / 3 * 2 - 25, canvas.width / 4 + 25, character_screen.h / 5, 'yellow'),
        new Square(canvas.width / 4 + canvas.width / 4, canvas.height / 3 * 2 - 25, canvas.width / 4 + 25, character_screen.h / 5, 'blue')
    ]
    return options;
}


function setCoord(evt) {
    let mouse = new Object;
    mouse.x = event.clientX;
    mouse.y = event.clientY;

    return mouse.x > evt.x && mouse.y > evt.y && mouse.x < evt.w + evt.x && mouse.y < evt.h + evt.y;
}


function showCharacer(evt) {

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
    if (currentState == gameState.GameScreen || currentState == gameState.WarningBorders) {
        if (setCoord(gameScreen[0])) {
            console.log("this is gameScreen[0]");
            gameScreen[0].Add_Score();
            console.log("gameScreen[0]: " + gameScreen[0].score);
            if (gameScreen[0].score == 5) {
                currentState = gameState.WarningBorders;
                character_screen.Show_();
            }
        } else if (setCoord(gameScreen[1])) {
            console.log("this is gameScreen[1]");
            gameScreen[1].Add_Score();
            console.log("gameScreen[1]: " + gameScreen[1].score);
            if (gameScreen[1].score == 5) {
                character_screen.Show_();
            }
        } else if (setCoord(gameScreen[2])) {
            console.log("this is gameScreen[2]");
            gameScreen[2].Add_Score();
            console.log("gameScreen[2]: " + gameScreen[2].score);
            if (gameScreen[2].score == 5) {
                character_screen.Show_();
            }
        } else if (setCoord(gameScreen[3])) {
            console.log("this is gameScreen[3]");
            gameScreen[3].Add_Score();
            console.log("gameScreen[3]: " + gameScreen[3].score);
            if (gameScreen[3].score == 5) {
                character_screen.Show_();
            }
        } else if (setCoord(gameScreen[4])) {
            console.log("this is gameScreen[1]");
            gameScreen[4].Add_Score();
            console.log("gameScreen[4]: " + gameScreen[4].score);
            if (gameScreen[4].score == 5) {
                character_screen.Show_();
            }
        } else if (setCoord(gameScreen[5])) {
            console.log("this is gameScreen[5]");
            gameScreen[5].Add_Score();
            console.log("gameScreen[5]: " + gameScreen[5].score);
            if (gameScreen[5].score == 5) {
                character_screen.Show_();
            }
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
        ctx.drawImage(characters[0], menu.x, menu.y, menu.w, menu.y);

    }
    if (currentState == gameState.GameScreen) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let item in gameScreen) {
            gameScreen[item].Draw();
        }
    }
    if (currentState == gameState.WarningBorders) {
        for (let item in warning_borders) {
            warning_borders[item].Draw();
        }
    }

    if (character_screen.show_pic == true) {
        character_screen.Draw();
        ctx.drawImage(joy, character_screen.x, character_screen.y, character_screen.w, character_screen.y);
        for (let item in spam_options()) {
            spam_options()[item].Draw();
        }



    }
}

Start();