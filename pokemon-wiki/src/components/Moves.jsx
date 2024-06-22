//MOVE COMPONENT ABANDONED. THIS COMPONENT ONLY LISTS OUT THE COMPLETE LIST OF POKEMON MOVES FROM GEN 1 to SCARLET AND VIOLET AND LACKS CONSISTENCY BECAUSE OF THIS. (beyond my current level :( )


import '../styles/Moves.css'
import {useState, useEffect} from 'react';

export default function Moves({pokemon}) {
    
    const [movesData, setMovesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    function capitalizeFirstLetter(string) {
        if (!string) return '';
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    useEffect(() => {
        async function fetchMovesData() {
            try {
                const fetchedMoves = await Promise.all(     //holds name and move data to manipulate later
                    pokemon.moves.map(async (item) => {
                        try {
                            // if (item.version_group_details.level_learned_at === 0) {
                            //     return null;                                    //invalid move (learned at lvl: 0)
                            // }
                            const response = await fetch(item.move.url);
                            if (!response.ok) {
                                throw new Error(`Unable to fetch data for ${item.move.name}`);
                            }
                            const moveData = await response.json();
                            const pokemonMoveData = item.version_group_details;
                            // const pokemonMoveData = item.version_group_details[7];      //only scarlet 
                            return {name: item.move.name, pokemonMoveData, moveData};
                        } catch (err) {
                            return null;
                        }
                    })
                );
                const filteredBySuccessful = fetchedMoves.filter(move => move !== null) //filter out the items that are null because the fetch failed for that move (doesnt exist in the API yet)

                // const filterOrder = filteredBySuccessful.sort((a,b) => a.pokemonMoveData.level_learned_at - b.pokemonMoveData.level_learned_at) //sort by level learned at.
                console.log(filterOrder);
                setMovesData(filteredBySuccessful); 
                console.log(filteredBySuccessful);
            }
            catch (err) {
                setError(err.message);
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        fetchMovesData();

    }, [pokemon.moves]);

    if (loading) {
        return <div>Loading...</div>
    }


    
    return(
        <div className="moves-container">
            <div className="moves-data-box">
                <h2>{capitalizeFirstLetter(pokemon.name)}'s Moves</h2>
                {loading ? (
                <div>Loading...</div>
                ) : (
                <div className="moves">
                    {movesData.map((move, index) => ( //implicit return
                        <div key={index} className="move">
                            <h3>{capitalizeFirstLetter(move.name)}</h3>
                        </div>
                    ))}
                </div>
                )}
            </div>
        </div>
    );
}