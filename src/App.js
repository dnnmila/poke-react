//import Style 
import "./styles/app.scss";
import React, { useState, useEffect } from 'react';
//ading components
import Bagdes from "./components/Badges";
import Player from "./components/Player";
import Pokemon from "./components/Pokemon";
import AddPokemon from "./components/addPokemon";




import pokemon_obj from "./components/pokemon_class";
import trainer_obj from "./components/trainer_class";


const Pikachu = new pokemon_obj(1,"Pikachu",3,"ELECRTIC","025");
const Charmander = new pokemon_obj(2,"Charmander",4,"FIRE","004");
const Gardevoir = new pokemon_obj(3,"Gardevoir",5,"PSYCHIC / FAIRY","282");
const Milotic = new pokemon_obj(4,"Milotic",5,"WATER","350");
const Togekiss = new pokemon_obj(5,"Togekiss",4,"FAIRY / FLYING","468");
const Evee = new pokemon_obj(6,"Evee",4,"NORMAL","133");




//Kennys.addPokemon(Pikachu);
//Kennys.addPokemon(Charmander);
// Kennys.addPokemon(Gardevoir);
//Kennys.addPokemon(Milotic);
//Kennys.addPokemon(Togekiss);
//Kennys.addPokemon(Evee);

function App() {
  const [kennys, setKennys] = useState(new trainer_obj("Kennys"));

  const handleAddPokemon = async (pokedexNumber) => {
    try {
        const response = await fetch(`http://localhost:8000/pokemons/${pokedexNumber}`);
        
        
        // Comprobar si el servidor respondió con un estado exitoso
        if (!response.ok) {
            throw new Error(`No se encontró Pokémon con el número de Pokédex: ${pokedexNumber}`);
        }

        const pokemonData = await response.json();

        // Comprobar si la respuesta realmente contiene datos de un Pokémon
        if (!pokemonData || Object.keys(pokemonData).length === 0) {
            throw new Error("Datos de Pokémon inválidos o vacíos.");
        }

        // Proceder a agregar el Pokémon si todo está bien
        const nuevoPokemon = new pokemon_obj(
            pokemonData[1], 
            pokemonData[2],
            pokemonData[3], 
            pokemonData[4], 
            pokemonData[1]
        );
        console.log(nuevoPokemon);
        setKennys(prevKennys => {
            const updatedKennys = new trainer_obj(prevKennys.name);
            updatedKennys.team = [...prevKennys.team, nuevoPokemon];
            return updatedKennys;
        });
    } catch (error) {
        console.error("Error al obtener el Pokémon:", error);
        // Aquí puedes manejar el error, como mostrar un mensaje en la UI
    }
};

const deletePokemon = (pokemonId) => {
  setKennys(prevKennys => {
      const updatedKennys = new trainer_obj(prevKennys.name);
      updatedKennys.team = prevKennys.team.filter(pokemon => pokemon.id !== pokemonId);
      return updatedKennys;
  });
};


  return (
    <div className="App">
      <h1>Poke App </h1>
      <div className="Title_pokeApp">
        <Player name_player={kennys.name} />
        <Bagdes />
      </div>

      <div className="All_Pokemons"> 
      {kennys.team.map(pokemon =>(
        <Pokemon 
        key={pokemon.id}
        id={pokemon.id}
        name={pokemon.name} 
        level={pokemon.level} 
        types={pokemon.types} 
        pokedex={pokemon.pokedex}
        onDelete={() => deletePokemon(pokemon.id)}
        />

      ))}
      {kennys.team.length < 6 && <AddPokemon onAdd={handleAddPokemon} />}
      </div>
      
    </div>
  );
}

export default App;
