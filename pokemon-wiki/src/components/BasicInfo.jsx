import '../styles/BasicInfo.css'
import '../styles/layout.css'
import Layout from './Layout';

export default function BasicInfo({ pokemon }) {

    function capitalizeFirstLetter(string) {
        if (!string) return '';
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (
        <div className="basic-container">
            {
                pokemon ?
                    <div className="info-container">
                        <div className="info-id">
                            <h3>ID:</h3>
                            <div className="white-box">
                                <p>{pokemon.id}</p>
                            </div>
                        </div>
                        <div className="info-name">
                            <h3>Name:</h3>
                            <div className="white-box">
                                <p>{capitalizeFirstLetter(pokemon.name)}</p>
                            </div>
                        </div>
                        <div className="info-type">
                            <h3>Type:</h3>
                            <div className="white-box">
                                <p>{pokemon.types.map((typeInfo) => capitalizeFirstLetter(typeInfo.type.name)).join(', ')}</p>
                            </div>
                        </div>
                        <div className="info-ability">
                            <h3>Ability: </h3>
                            <div className="white-box">
                                <p>{pokemon.abilities
                                    .filter((abilityInfo) => !abilityInfo.is_hidden)
                                    .map((abilityInfo) => capitalizeFirstLetter(abilityInfo.ability.name)).join(", ")}
                                </p>
                            </div>
                        </div>

                        <div className="info-hidden">
                            <h3>Hidden Ability:</h3>
                            <div className="white-box">
                                <p>{pokemon.abilities
                                    .some((abilityInfo) => abilityInfo.is_hidden)
                                    ? (pokemon.abilities
                                        .filter((abilityInfo) => abilityInfo.is_hidden)
                                        .map((abilityInfo) => capitalizeFirstLetter(abilityInfo.ability.name)).join(", "))
                                    : ("None")
                                }
                                </p>
                            </div>
                        </div>

                    </div>
                    :
                    <div></div>
            }
        </div>
    );
}