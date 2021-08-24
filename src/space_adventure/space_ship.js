import rocketUrl from "../assets/svgs/2442125.svg"

const rocket = new Image()
rocket.src = rocketUrl


export const SpaceShip = (ctx) => ({
    update: () => {
        ctx.drawImage(rocket, 100, 100, 100, 200)
    }
})

