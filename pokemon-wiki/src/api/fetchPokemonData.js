const apiKey = 'https://pokeapi.co/api/v2/pokemon/'

export async function fetchPokemonData(query) {
    try {
        const response = await fetch(`${apiKey}${query}`);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Unable to fetch pokemon data", error);
        return null;
    }
}