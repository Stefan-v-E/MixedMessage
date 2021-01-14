// Generates a place, event and time. Will return a mixed message forecasting what will happen in the world.

const placegen = () => {
    let placearray = ['Tibet', 'Belgium', 'Bangladesh', 'France', 'Guatamala', 'Belarus', 'Montenegro']
    const place = placearray[Math.floor(Math.random()*placearray.length)]
    return place
}  
    
const eventgen= () => {
    let eventarray = ['an earthquake', 'a famine', 'a glacial storm', 'huge manatees everywhere', 'a volcano eruption', 'extremely bad weather']
    const event = eventarray[Math.floor(Math.random()*eventarray.length)]
    return event
}

const timegen = () => {
    let timearray = ['tomorrow', 'next week', 'this month', 'in 2021', 'in 2022', 'in 2023', 'in 2024', 'in 2025', 'in 2026']
    const time = timearray[Math.floor(Math.random()*timearray.length)]
    return time
}

const sentgen = () => {
    let place = placegen();
    let event = eventgen();
    let time = timegen();
    console.log('Dear visitor - you asked me what will happen in the world. \nBLEEP-BLOOP-BOINK\nI see... there will be ' + event + ' in ' + place + ' ' + time + '.')
}


sentgen();