import axios from 'axios'

const baseUrl = "https://eventfinda-eventfinda-nz.p.rapidapi.com/events.json"

export async function fetchEvents(): Promise<[]> {
    let foundEvents = [];
    try {
        const { data: { events } } = await axios.get((baseUrl), {
            headers: {
                Authorization: 'Basic cmF2ZXI6eHB3amM0cWNoM3Nu',
                'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
                'X-RapidAPI-Host': 'eventfinda-eventfinda-nz.p.rapidapi.com'
            }
        });
        foundEvents = events;
        return foundEvents;
    } catch (error) {
        console.log(error);
    }
    return foundEvents;
}