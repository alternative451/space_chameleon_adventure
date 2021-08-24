import { SpaceShip } from "./space_ship"
import {Screens} from "./screens"

export const SpaceAdventure = (ctx) => {
    const spaceShip = SpaceShip(ctx)
    const screens = Screens(ctx)
    return {
        update: (dt) => {
            spaceShip.update(dt)
            screens.update(dt)
            ctx.fillStyle = "#fff222"
            ctx.fillText(dt, 100, 100)

        }
    }
}
