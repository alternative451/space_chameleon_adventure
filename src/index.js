import { SpaceAdventure } from "./space_adventure";

const canvas = document.querySelector("#x")

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext("2d")
const spaceAdventure = SpaceAdventure(ctx)
let last = 0
let now

const loop = () => {
    now = performance.now()
    canvas.width += 0
    spaceAdventure.update(now - last)

    last = now
    requestAnimationFrame(loop)
}

loop()
