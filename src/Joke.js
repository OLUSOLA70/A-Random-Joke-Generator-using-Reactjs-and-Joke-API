// Joke.js
import React from "react";
import Button from "./Button";
import './joke.css';

const Joke = () => {
    const [jokeText, setJokeText] = React.useState("");

    const fetchApi = () => {
        fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
            .then((res) => res.json())
            .then((data) => setJokeText(data.joke))
            .catch((error) => console.error("Error fetching joke:", error));
    };

    return (
        <div className="joke">
            <Button callApi={fetchApi} />
            <p>{jokeText}</p>    
        </div>
    );
}

export default Joke;
