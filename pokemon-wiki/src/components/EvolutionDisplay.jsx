import { useEffect, useState } from "react";
import { fetchPokemonData } from "../api/fetchPokemonData";
import '../styles/EvolutionDisplay.css'

export default function EvolutionDisplay({ evolution, pokemon }) {

    const [spriteLinks, setSpriteLinks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setSpriteLinks([]); //reset the array initially
        setLoading(true);   //loading of data is in process

        async function handleSpriteRetrieval(chain) {
            if (!chain || !chain.species) return [];

            const pokemonName = chain.species.name;
            const data = await fetchPokemonData(pokemonName);
            const spriteLink = data.sprites.front_default;

            const nestedPromises = chain.evolves_to.map(evolution => handleSpriteRetrieval(evolution));
            const nestedSprites = await Promise.all(nestedPromises)                                         //wait for all fetches to complete before setting to 'nestedSprites'

            return [{ name: pokemonName, link: spriteLink }, ...nestedSprites.flat()]; //.flat is extremely necessary because otherwise youd have an array [1, [2, [3,4]]]. Need [1,2,3,4]

            //order is : bulbasaur => ivysaur => venusaur => (recursive ends) : return [venusaur] => return [ivysaur, [venusaur].flat()] => return [bulbasaur, [ivysaur, venusaur].flat()]   ==== [bulbasaur, ivysaur, venusaur];

        }

        async function fetchAllSpriteLinks() {
            if (evolution) { //if evolution sequence is valid for the pokemon in question
                try {
                    const sprites = await handleSpriteRetrieval(evolution.chain);  //call recursive function above which will return all the evolution sprites in the pokemon's evolution sequence
                    setSpriteLinks(sprites);    //set to array of spriteLinks

                }
                catch (error) {
                    console.error('Error fetching sprites links', error);       //if evolution for the pokemon doesnt exist (galarian, alolan, hisuian data not updated yet) or pokemon is invalid => evolution is non-existent
                }
            }
            setLoading(false);      //set loading of sprites to false
        }

        fetchAllSpriteLinks(); //initial call with evolution.chain being the first input
    }, [evolution, pokemon]); //only called when pokemon or evolution is changed

    function capitalizeFirstLetter(string) {
        if (!string) return '';
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    return (
        <div>
            {
                <div className="evolution-container">
                    <h1>Evolution Chain</h1>
                    {loading ? (
                        <div>Loading...</div>
                        ) : (
                        <div className="sprite-container">
                            {spriteLinks.length > 0 ? (
                                spriteLinks.map((sprite, index) => (
                                    <div key={index} className="evolution-row">
                                        <img className="evolution-image" src={sprite.link} alt={`Pokemon ${sprite.name}`} />
                                        <p>{capitalizeFirstLetter(sprite.name)}</p>
                                    </div>
                                ))
                            ) : (
                                pokemon && (
                                    <div className="evolution-row">
                                        <img className="evolution-image" src={pokemon.sprites.front_default} alt={`Pokemon ${pokemon.name}`} />
                                        <p>{capitalizeFirstLetter(pokemon.name)}</p>
                                    </div>
                                )
                            )}
                        </div>
                    )}
                </div>
            }
        </div>
    );
}