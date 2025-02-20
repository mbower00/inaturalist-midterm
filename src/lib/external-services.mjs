// using code from https://vite.dev/guide/env-and-mode
const BASE_URL = import.meta.env.VITE_BASE_URL

export async function searchPlaces(query) {
    const result = await fetch(`${BASE_URL}/places/autocomplete?q=${query}`)
    const data = await result.json()
    return data.results
}