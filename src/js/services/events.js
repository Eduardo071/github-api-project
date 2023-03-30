import { userAdress, eventsQuantity } from "../variables.js"

async function getEvents(userName) {
    const response = await fetch(`${userAdress}${userName}/received_events?per_page=${eventsQuantity}`)
    const data = await response.json()
    const filteredData = data.filter(item => item.type === 'CreateEvent' || 'PushEvent')
    console.log(filteredData)
    return filteredData
}

export { getEvents }


// fazer o fetch   corretamente dos eventos filtrando apenas os eventos de tipo: CreateEvent e PushEvent X