// Dani Vicario - bounce experiment (canvas)- Fri Jun 14 13:13:29 CEST 2019
const globalCompositeOperationModes = {
    "source-over": "source-over",
    "source-in": "source-in",
    "source-out": "source-out",
    "source-atop": "source-atop",
    "destination-over": "destination-over",
    "destination-in": "destination-in",
    "destination-out": "destination-out",
    "destination-atop": "destination-atop",
    "lighter": "lighter",
    "copy": "copy",
    "xor": "xor",
    "multiply": "multiply",
    "screen": "screen",
    "overlay": "overlay",
    "darken": "darken",
    "lighten": "lighten",
    "color-dodge": "color-dodge",
    "color-burn": "color-burn",
    "hard-light": "hard-light",
    "soft-light": "soft-light",
    "difference": "difference",
    "exclusion": "exclusion",
    "hue": "hue",
    "saturation": "saturation",
    "color": "color",
    "luminosity": "luminosity"
}

function randomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

/** @type HTMLCanvasElement */
var canvasDOMEl = document.getElementById("canvas");

/** @type CanvasRenderingContext2D */
var ctx = canvasDOMEl.getContext("2d");

var w = window.innerWidth;
var h = window.innerHeight;
var w2 = w / 2;
var h2 = h / 2;

var PI = Math.PI;
var PI_DOUBLE = 2 * Math.PI;
var PI_HALF = Math.PI / 2;

canvasDOMEl.setAttribute("height", window.innerHeight);
canvasDOMEl.setAttribute("width", window.innerWidth);

let posX = 200
let posY = 50
let sense = 1
let circleRadius = 50
let speed = 2
let acceleration = 0
let newSpeed;

let intervalID
// color the text
ctx.font = "30px Arial";

function switchAnimation() {

    intervalID = setInterval(() => {
        ctx.clearRect(0, 0, w, h);

        ctx.fillStyle = "black"
        ctx.fillText("Press space to stop/resume", 20, 40);

        ctx.fillStyle = "orange";
        ctx.beginPath();

        // linear speed in the X axis
        // ctx.arc(posX+=(10 * sense), h2, circleRadius, 0, PI_DOUBLE);
        
        // uncomment here for accelaration with speed
        // acceleration += .01
        // newSpeed = speed + acceleration

        // this is for constant speed
        newSpeed = speed
        ctx.arc(w2, posY += (newSpeed * sense), circleRadius, 0, PI_DOUBLE);
        ctx.fill();
        ctx.closePath();

        if (posY > h - circleRadius) {
            sense = -1
        }

        if (posY < circleRadius) {
            sense = 1
        }

        // if (newSpeed > 10) {
        //     clearInterval(intervalID)
        // }

        // if (posX > w - circleRadius) {
        //     sense = -1
        // }

        // if (posX < circleRadius) {
        //     sense = 1
        // }
    }, 0)
}


let nTimesSpaceWasPressed = 0

let KeyboardCodes = {
    SPACE: 32,
    CURSOR_UP: 41
}

window.onkeydown = function (e) {
    if (e.keyCode === KeyboardCodes.SPACE) {
        nTimesSpaceWasPressed++
        if (nTimesSpaceWasPressed % 2 === 0) {
            switchAnimation()
        } else {
            clearInterval(intervalID)
        }
    }
}

switchAnimation()