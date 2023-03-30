import { userAdress, eventsQuantity } from "../variables.js"

async function getEvents(userName) {
    const response = await fetch(`${userAdress}${userName}/received_events?per_page=${eventsQuantity}`)
    return await response.json()

}

export { getEvents }


// fazer o fetch   corretamente dos eventos filtrando apenas os eventos de tipo: CreateEvent e PushEvent 