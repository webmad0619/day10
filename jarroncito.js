// Dani Vicario - jarroncito experiment (canvas)- Fri Jun 14 11:51:19 CEST 2019
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


class ConcentricCircles {
    constructor (colorType) {
        this.colorType = colorType

    }
    // as per Mike's question this is a method :)
    draw() {
        // ctx.fillStyle = `rgb(255, 255, 255)`

        for (var i = 0; i < 5; i++) {
            ctx.save()
            ctx.beginPath();

            // ctx.fillStyle = `rgba(${Math.random () * 255}, ${Math.random () * 255}, ${Math.random () * 255}, .25)`
            if (this.colorType === "red") {
                ctx.fillStyle = `rgba(${Math.round(255 / (i + 1))}, 0, 0, 0.8)`
            }
            if (this.colorType === "green") {
                ctx.fillStyle = `rgba(0, ${Math.round(255 / (i + 1))}, 0, 0.8)`
            }
            if (this.colorType === "blue") {
                ctx.fillStyle = `rgba(0, 0, ${Math.round(255 / (i + 1))}, 0.8)`
            }

            ctx.scale((1 - i / 5), (1 - i / 5))
            ctx.arc(0, 0, 100, 0, PI_DOUBLE);

            // ctx.arc(0, 0, 100 - (20 * i), 0, PI_DOUBLE);
            ctx.stroke();
            ctx.fill()
            ctx.closePath();
            ctx.restore()
        }
    }
}

class Jarroncito {
    constructor(colorType) {
        this.colorType = colorType;
    }
    drawAll() {
        for (var row = 0; row < 30; row++) {
            for (var column = 0; column < 20; column++) {
                ctx.save()

                // this changes circles location depending of even/odd row
                let increaseFactor = (row % 2 === 0) ? 50 : 0

                ctx.translate((100 * column) + increaseFactor, 100 * row)
                new ConcentricCircles(this.colorType).draw()

                ctx.restore()
            }
        }
    }

    drawWithAnimation () {
        var column = 0;
        var row = 0;

        let intervalID = setInterval(() => {
            ctx.save()

            // this changes circles location depending of even/odd row
            let increaseFactor = (row % 2 === 0) ? 50 : 0

            ctx.translate((100 * column) + increaseFactor, 100 * row)
            new ConcentricCircles(this.colorType).draw()

            ctx.restore()

            column++

            if (column > 20) {
                column = 0;
                row++;

                if (row > 30) {
                    clearInterval(intervalID)
                }
            }
        }, 10)
        
    }
}
new Jarroncito("red").drawWithAnimation()