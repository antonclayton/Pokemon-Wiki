const apiKey = 'https://pokeapi.co/api/v2/pokemon-species/'

export async function fetchEvolutionData(query) {
    try {
        const response = await fetch(`${apiKey}${query}`);
        const data = await response.json();

        if (!data.evolution_chain) {
            return null;
        }

        const newQuery = data.evolution_chain.url;
        
        const evoResponse = await fetch(`${newQuery}`);
        const evoData = await evoResponse.json();
        return evoData;
        
    }
    catch (error) {
        console.error("Unable to fetch pokemon data", error);
        return null;
    }
}