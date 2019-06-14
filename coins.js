// Dani Vicario - coins experiment (canvas)- Fri Jun 14 17:23:51 CEST 2019
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

function randomInt(min, max){
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

class Coin {
    constructor(x, y, value) {
        if (x > w) {
            throw new RangeError("the x position is greater than the window")
        }
        this.x = x
        this.y = y
        this.value = value
    }

    draw() {
        const coinImg = new Image()
        coinImg.src = "./coin.png"

        // this way is a fucking guarrada TO BE NEVER USED BUT VALID!
        // var that = this

        // coinImg.onload = function () {
        //     ctx.drawImage(coinImg, that.x, that.y, 20, 20)
        // // nice!!! the bind(this) means the this of the class
        // // }.bind(this)
        // }



        coinImg.onload = function () {
            ctx.drawImage(coinImg, this.x, this.y, 20, 20)
        // nice!!! the bind(this) means the this of the class
        // }.bind(this)
        }.bind(this)

        
        // remember you can use this system 'cos arrow functions don't have the 'this'
        coinImg.onload = () => {
            ctx.drawImage(coinImg, this.x, this.y, 20, 20)
        }
    }
}

let coins = [
    new Coin(100, 100, 10),
    new Coin(500, 200, 20),
    new Coin(300, 300, 10),
    new Coin(700, 400, 30),
    new Coin(50, 60, 10)
]


coins.forEach(coin => coin.draw())
