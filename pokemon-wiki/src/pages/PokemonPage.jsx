import background from '../assets/fixedbackgroundpokemon.jpg';
import SearchBar from '../components/SearchBar';
import '../styles/PokemonPage.css'
import Layout from '../components/Layout'
import SpriteSlideshow from '../components/SpriteSlideshow'
import BasicInfo from '../components/BasicInfo';
import EvolutionDisplay from '../components/EvolutionDisplay';
import Stat from '../components/Stat';
// import Moves from '../components/Moves';                             //Moves component abandoned because of the difficult nature of pokemon generations and the inclusion/disclusion of pokemon based on regions.

import { useEffect, useState } from 'react';
import { fetchPokemonList } from '../api/fetchPokemonList';
import { fetchPokemonData } from '../api/fetchPokemonData';
import { fetchEvolutionData } from '../api/fetchEvolutionData';

export default function PokemonPage() {

    const [pokemonList, setPokemonList] = useState([]);
    const [pokemon, setPokemon] = useState(null);
    const [evolutionData, setEvolutionData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {                                       //single fetch for all 1302 pokemon/variants which is held in 'pokemonList'
        async function fetchList() {
            const data = await fetchPokemonList();
            setPokemonList(data);
            // console.log(pokemonList)
        }
        fetchList();
    }, [])

    async function handleSearch(query) {                   //Handles each searched pokemon based on query from searchBar
        setLoading(true);

        const [pokemonData, evolutionChainData] = await Promise.all([       //initiate both at the same time (to avoid Cross-origin block) and also await their combined completion
            await fetchPokemonData(query),
            await fetchEvolutionData(query)
        ]);

        setPokemon(pokemonData || null)
        setEvolutionData(evolutionChainData || null);
        setLoading(false);
    }

    return (
        <div className="page-background" style={{
            background: `url(${background})`,
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center'
        }}>
            <div className="page-content-container">
                <div className="search-bar">
                    <SearchBar onSearch={handleSearch} pokemonList={pokemonList}/>  {/*passes in the function handleSearch as onSearch prop into the Search bar component */}
                </div>
                {loading ? ( // Conditionally render based on loading state
                    <Layout>
                        <div className="grid-item sprite-slideshow">Loading</div>
                        <div className="grid-item basic-info"></div>
                        <div className="grid-item stat-info"></div>
                        <div className="grid-item evolution-display">Loading</div>
                    </Layout> // You can style this loading div as needed
                ) : (
                    pokemon ? (
                        <div className="grid-container">
                            <Layout>
                                <div className="grid-item sprite-slideshow">
                                    <SpriteSlideshow pokemon={pokemon}/>
                                </div>
                                <div className="grid-item basic-info">
                                    <BasicInfo pokemon={pokemon} />
                                </div>
                                <div className="grid-item stat-info">
                                    <Stat pokemon={pokemon} />
                                </div>
                                <div className="grid-item evolution-display">
                                    <EvolutionDisplay evolution={evolutionData} pokemon={pokemon} />
                                </div>
                                {/* <div className="grid-item moves-info">
                                    <Moves pokemon={pokemon} />
                                </div> */                                                //MOVE COMPONENT ABANDONED BECAUSE BEYOND MY CURRENT LEVEL (see Moves.jsx)
                                } 
                            </Layout>
                        </div>
                    ) : (
                        <div>Error</div>
                    )
                )}
            </div>  
        </div>
    );
}