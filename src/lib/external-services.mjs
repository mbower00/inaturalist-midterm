// using code from https://vite.dev/guide/env-and-mode
const BASE_URL = import.meta.env.VITE_BASE_URL

export async function searchPlaces(query) {
    try {
        const result = await fetch(`${BASE_URL}/places/autocomplete?q=${query}`)
        const data = await result.json()
        return data.results
    } catch (error) {
        console.error(error)
    }
}

export async function getIdentifications(placeId, afterDate, beforeDate) {
    try {
        const result = await fetch(`${BASE_URL}/identifications?place_id=${placeId}&observed_d1=${afterDate}&observed_d2=${beforeDate}`)
        const data = await result.json()
        return data.results
    } catch (error) {
        console.error(error)
    }
}