// Write your Character component here

import React from "react";

export default function Character(props){
    const {starData, setStarData, fecthData, starCharacters} = props;

    fecthData(starCharacters[0]);

    return (
        <div className="characterContainer">
            <h2>name</h2>
            <h3>birth_year</h3>
        </div>
    );
}