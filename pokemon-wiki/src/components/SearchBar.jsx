import React, { useState } from 'react';
import '../styles/SearchBar.css'
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function SearchBar({ onSearch, pokemonList }) {

    const [query, setQuery] = useState("");                                     //query used to update the text in input field
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);         //holds the filtered suggestions 
    const [showSuggestions, setShowSuggestions] = useState(false);              //for whether or not to show the suggestions box

    function handleSubmit(e) {
        e.preventDefault();
        if (query !== '') {
            onSearch(query);            //this essentially means handleSearch(query) from pokemonPage because onSearch is the same thing as handleSearch just a prop
            setQuery("");               //reset query
            setFilteredSuggestions([]); //reset suggestions
        }
    }

    function handleInputChange(e) {
        const userInput = e.target.value;
        setQuery(userInput);                //shows up in input box

        if (userInput) {
            const suggestions = pokemonList.filter(pokemon =>
                pokemon.name.toLowerCase().startsWith(userInput.toLowerCase())      //filter pokemon names that start with userInput
            );
            // console.log(suggestions);
            setFilteredSuggestions(suggestions);    //set array of filtered suggestions
            setShowSuggestions(true);               //true because you want to show the suggestions based on the userInput
        }
        else {
            setFilteredSuggestions([]);             //invalid userInput means reset
            setShowSuggestions(false);              //dont show suggestions
        }
    }

    function handleSuggestionClick(name) {
        setQuery("");                         //deletes current text in input
        setShowSuggestions(false);            //dont show suggestions anymore
        onSearch(name);                       //fetch pokemon data with suggestion's name as input
    }

    return (
        <div className="search-container">
            <form onSubmit={handleSubmit} className="search-form">
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="Enter pokemon name..."
                    className="search-input">
                </input>
                <button type='submit'>Search &nbsp; <FaMagnifyingGlass /></button>
            </form>
            {showSuggestions && filteredSuggestions.length > 0 && (
                <ul className="suggestions-list">
                    {filteredSuggestions.map((suggestion, index) => (
                        <li className="suggestions" key={index} onClick={() => handleSuggestionClick(suggestion.name)}>
                            {suggestion.name}
                        </li>
                    ))
                    }

                </ul>
            )
            }
        </div>
    );
}