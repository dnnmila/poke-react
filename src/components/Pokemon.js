import React from 'react';

const Pokemon = ({  id,name,level,types,pokedex , onDelete}) => {
    const img_id = `img_${id}`;
    const level_id = `level_${id}`;
    const name_id = `name_${id}`;
    const type_id = `types_${id}`;
    const delete_id = `delete_${id}`;
    const imageUrl = require(`../images/POKEMON/0${pokedex}.png`);
    const box_id = `div_${id}`;
    return (
        <div className="pokemon" id={box_id} >
            <div className= "img_pokemon" id={img_id} style={{ backgroundImage: `url(${imageUrl})`}}> </div>
            <h1 className="level_pokemon"id={level_id}>{level} + 1</h1>
            <h1 className="name_pokemon" id={name_id}> {name}</h1>
            <h1 className="type_pokemon"id={type_id}> {types}</h1>
            <div className="delete_pokemon" id={delete_id} onClick={onDelete} > </div>
        </div>
    )
};

export default Pokemon;