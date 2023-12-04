import React from 'react';
import Types from './Types';

const Pokemon = ({  id,name,level,extra,type1,type2,pokedex , onDelete}) => {
    const img_id = `img_${id}`;
    const level_id = `level_${id}`;
    const name_id = `name_${id}`;
    const type_id1 = `types_${id}_1`;
    const type_id2 = `types_${id}_2`;
    const delete_id = `delete_${id}`;
    const imageUrl = require(`../images/POKEMON/0${pokedex}.png`);
    const box_id = `div_${id}`;

    const type1_class = `type_${type1}`;
    const type2_class = `type_${type2}`;


    let type2_true=false;
    if(type2 === null){
        type2_true=false;
    }
    else{
        type2_true=true;
    }

    return (
        <div className="pokemon" id={box_id} >
            <div className= "img_pokemon" id={img_id} style={{ backgroundImage: `url(${imageUrl})`}}> </div>
            <div className= "level_total" id={level_id}> 
            <h1 className="level_pokemon">{level} </h1>
            {extra > 0 && <h1 className="level_extra"> + {extra} </h1>}
            </div>
            <h1 className="name_pokemon" id={name_id}> {name}</h1>
            <div className="types_div"> 
            <Types Type={type1}  Clase={type1_class} type_id={type_id1}/>
            { type2_true === true && <Types Type={type2}  Clase={type2_class} type_id={type_id2}/>}
            </div>
            <div className="delete_pokemon" id={delete_id} onClick={onDelete} > </div>
        </div>
    )
};

export default Pokemon;