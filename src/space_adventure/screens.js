let x, y, arc = 10
let down = false
window.addEventListener("mousemove", (e) => {
    x = e.clientX
    y = e.clientY
})

window.addEventListener("mousedown", (e) => {
    down = true
})

window.addEventListener("mousedown", (e) => {
    down = false
})

const matrix = []

export const Screens = (ctx) => {
    return {
        update: (dt) => {
            matrix.forEach()


            ctx.strokeStyle = "#000"
            ctx.arc(x, y, arc, 0, Math.PI * 2)
            ctx.stroke()


        }
    }
}