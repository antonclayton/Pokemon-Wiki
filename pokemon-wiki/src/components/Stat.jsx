import '../styles/Stat.css'

export default function Stat({pokemon}) {

    const pokemonStats = pokemon.stats;

    function getStatTotal() {
        return pokemonStats.reduce((sum, stat) => sum + stat.base_stat, 0);
    }

    const hp = pokemonStats[0].base_stat;
    const attack = pokemonStats[1].base_stat;
    const defense = pokemonStats[2].base_stat;
    const spAttack = pokemonStats[3].base_stat;
    const spDefense = pokemonStats[4].base_stat;
    const speed = pokemonStats[5].base_stat;

    const statTotal = getStatTotal();

    function getStatColor(stat) {
        if (stat <= 40) {
            return '#cf0c02';
        } else if (stat <= 65) {
            return '#e66502';
        } else if (stat <= 85) {
            return '#fcc603';
        } else if (stat <= 100) {
            return '#76cf02';
        } else if (stat <= 120) {
            return '#04bf23';
        } else if (stat <= 140) {
            return '#008a17';
        } else {
            return 'turquoise';
        }
    }

    function getStatWidth(stat) {
        if (stat >= 230) {
            return `${stat / 350 * 100}%`
        } else {
            return `${stat / 300 * 100 + 5}%`
        }
    }

    return(
        <div className="stat-container">
            <div className="stat-bar-container">
                <div className="stat-hp">
                    <div className="stat-headers">
                        <h3>HP:</h3>
                    </div>
                    <div className="stat-white-box" style={{width: getStatWidth(hp), backgroundColor: getStatColor(hp)}}>
                        <p>{hp}</p>
                    </div>
                </div>

                <div className="stat-attack">
                    <div className="stat-headers">
                        <h3>Attack: </h3>
                    </div>
                    <div className="stat-white-box" style={{width: getStatWidth(attack), backgroundColor: getStatColor(attack)}}>
                        <p>{attack}</p>
                    </div>
                </div>

                <div className="stat-defense">
                    <div className="stat-headers">
                        <h3>Defense: </h3>
                    </div>
                    <div className="stat-white-box" style={{width: getStatWidth(defense), backgroundColor: getStatColor(defense)}}>
                        <p>{defense}</p>
                    </div>
                </div>
                <div className="stat-Spattack">
                    <div className="stat-headers">
                        <h3>Sp Attack: </h3>
                    </div>
                    <div className="stat-white-box" style={{width: getStatWidth(spAttack), backgroundColor: getStatColor(spAttack)}}>
                        <p>{spAttack}</p>
                    </div>
                </div>

                <div className="stat-Spdefense">
                    <div className="stat-headers">
                        <h3>Sp Defense: </h3>
                    </div>
                    <div className="stat-white-box" style={{width: getStatWidth(spDefense), backgroundColor: getStatColor(spDefense)}}>
                        <p>{spDefense}</p>
                    </div>
                </div>

                <div className="stat-speed">
                    <div className="stat-headers">
                        <h3>Speed: </h3>
                    </div>
                    <div className="stat-white-box" style={{width: getStatWidth(speed), backgroundColor: getStatColor(speed)}}>
                        <p>{speed}</p>
                    </div>
                </div>

                <div className="stat-total">
                    <div className="stat-headers">
                        <h3>Total:</h3>
                    </div>
                    <div className="stat-total-box" style={{width: "75%"}}>
                        <p>{statTotal}</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}