// let canvasDOMEl = document.querySelector("#myCanvas")
let canvasDOMEl = document.getElementById("myCanvas")

/** @type CanvasRenderingContext2D */
let ctx = canvasDOMEl.getContext("2d")

canvasDOMEl.setAttribute("width", window.innerWidth)
canvasDOMEl.setAttribute("height", window.innerHeight)

const w = window.innerWidth
const h = window.innerHeight

const w2 = w / 2
const h2 = h / 2

// ctx.translate(0, h2)
// ctx.rotate(20 * Math.PI / 180)


// for (varangle = 0; i < 100; i++) {
//     ctx.save()

//     ctx.rotate(20 * Math.PI / 180)
//     ctx.translate(i * 20, 0)
//     // ctx.rotate(1)

//     ctx.moveTo(0, 0)
//     ctx.lineTo(0, 200)
//     ctx.stroke()

//     ctx.restore()
// }

ctx.translate(w2, h2)

for (var angle = 0;angle < 360;angle+=.1) {
    ctx.save()

    ctx.beginPath();
    ctx.strokeStyle = `hsl(${angle}, 100%, 50%)`
    ctx.rotate(angle * Math.PI / 180)
    // ctx.translate(i * 20, 0)
    // ctx.rotate(1)

    ctx.moveTo(0, 0)
    ctx.lineTo(0, 300 + Math.random() * 100)
    ctx.stroke()
    ctx.closePath();

    

    ctx.restore()
}


