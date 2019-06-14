// Dani Vicario - constantVelocity experiment (canvas)- Fri Jun 14 12:48:46 CEST 2019
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

canvasDOMEl.setAttribute("width", window.innerWidth);
canvasDOMEl.setAttribute("height", window.innerHeight);


let x = 0;
let x2 = w;
let powIncrement = 0
let acceleration = 0

setInterval(() => {
    ctx.clearRect(0, 0, w, h);
    
    ctx.save();
    ctx.translate(x+=5, h2)

    ctx.beginPath();
    ctx.arc(0, 0, 100, 0, PI_DOUBLE);
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    ctx.save();
    // powIncrement += .01
    acceleration += .05
    // our own very nice easing equation ,thank Shak :)
    // ctx.translate(x2 -= Math.pow(2, powIncrement), h2)

    ctx.translate(x2 -= (10 - acceleration), h2)

    ctx.beginPath();
    ctx.arc(0, 0, 100, 0, PI_DOUBLE);
    ctx.fill();
    ctx.closePath();
    ctx.restore();
}, 10)