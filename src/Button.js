// Button.js
import React from "react";
import './button.css';

const Button = (props) => {
    return (
        <button onClick={props.callApi}>
            Click to generate some random joke.
        </button>
    );
}

export default Button;
