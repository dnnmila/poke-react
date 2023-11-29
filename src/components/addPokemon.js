import React, { useState } from 'react';
import pokeball from "../images/Poke_Ball.png";

const AddPokemon = ({ onAdd }) => {
    const [pokedexNumber, setPokedexNumber] = useState('');

    const handleAdd = () => {
        if (pokedexNumber) {
            onAdd(pokedexNumber);
            setPokedexNumber(''); // Resetear el input después de agregar
        }
    };

    return (
        <div className="add_pokemon">
            <img className="Pokeball_image" src={pokeball} alt="pokeball" />
            <input 
                type="text" 
                value={pokedexNumber} 
                onChange={(e) => setPokedexNumber(e.target.value)} 
                placeholder="" 
            />
            <button onClick={handleAdd}>ADD</button>
        </div>
    );
};

export default AddPokemon;