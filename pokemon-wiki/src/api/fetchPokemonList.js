const apiKey = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';

export async function fetchPokemonList() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
        const data = await response.json();
        return data.results;
    }
    catch (error) {
        console.error('Error fetching pokemon data', error);
        return null;
    }
}