import { userAdress } from "../variables.js"

async function getUser(userName) {
    const response = await fetch(`${userAdress}${userName}`)
    return await response.json()

}

export { getUser } 