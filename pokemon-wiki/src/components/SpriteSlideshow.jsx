import '../styles/SpriteSlideshow.css'
import {useState, useEffect} from 'react';
import { BsArrowLeftCircleFill } from 'react-icons/bs';
import { BsArrowRightCircleFill } from "react-icons/bs";


export default function SpriteSlideshow( {pokemon} ) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const front = pokemon.sprites.front_default;
    const shiny = pokemon.sprites.front_shiny;
    const sprites = [front, shiny];

    if (pokemon.sprites.front_female && pokemon.sprites.front_shiny_female) {
        sprites.push(pokemon.sprites.front_female);
        sprites.push(pokemon.sprites.front_shiny_female);
    }

    useEffect(() => {
        setCurrentSlide(0);
    }, [pokemon]);

    function handleNext() {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % sprites.length)
    }

    function handlePrev() {
        setCurrentSlide((prevSlide) => prevSlide === 0 ? sprites.length : prevSlide - 1);
    }

    return(
        <div className="slideshow-container">
            <div className="sprite-slideshow-container">
                <BsArrowLeftCircleFill className="slideshow-arrows slideshow-left-arrow" onClick={handlePrev}/>

                <img className="sprite-image" src={sprites[currentSlide]} alt={`Pokemon ${currentSlide + 1}`}></img>

                <BsArrowRightCircleFill className="slideshow-arrows slideshow-right-arrow " onClick={handleNext}/>
            </div>
        </div>
    );
}