// Write your Character component here
import React from 'react';

const dummyData = {
    birth_year: "19BBY",
    eye_color: "blue",
    gender: "male",
    hair_color: "blond",
    height: "172",
    mass: "77",
    name: "Luke Skywalker",
    skin_color: "fair",
    }

const Characters = (props) => {
    return (
        <div className="character-wrapper">
            <h3>{props.attr.name}</h3>
            <p>{props.attr.gender}</p>
            <p>{props.attr.birth_year}</p>
            <p>{props.attr.eye_color}</p>
            <p>{props.attr.hair_color}</p>
            <p>{props.attr.height}</p>
            <p>{props.attr.mass}</p>
            <p>{props.attr.skin_color}</p>
        </div>
    )
}

export default Characters;