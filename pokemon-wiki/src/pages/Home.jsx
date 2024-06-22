import React from 'react'
import {Link} from 'react-router-dom'
import "../styles/home.css"
import background from '../assets/fixedbackgroundpokemon.jpg';

export default function Home() {
    return(
        <div className="home-container" style={{background: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="text-container">
                <h1>Pokemon Encyclopedia</h1>
                <p>Search and explore information about your favorite pokemon!</p>
                <Link to='/pokemon' className="link-button">
                    <button>Pokemon Search</button>
                </Link>
            </div>
        </div>
    );
}