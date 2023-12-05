//import Style 
import React, { useState, useEffect} from 'react';
//ading components
import Bagdes from './Badges';
import Player from './Player';
import Pokemon from './Pokemon';
import AddPokemon from './addPokemon';

import pokemon_obj from './pokemon_class';
import trainer_obj from "./trainer_class";
import game_obj from "./game_class";




const CurrentPlayerView = ({game,setGame,kennys ,setKennys}) =>{

    const handleAddPokemon = async (pokedexNumber) => {
        try {
            const response = await fetch(`http://localhost:8000/pokemons/${pokedexNumber}`);
            if (!response.ok) {
                throw new Error(`No se encontró Pokémon con el número de Pokédex: ${pokedexNumber}`);
            }
            const pokemonData = await response.json();
            if (!pokemonData || Object.keys(pokemonData).length === 0) {
                throw new Error("Datos de Pokémon inválidos o vacíos.");
            }
    
            const nuevoPokemon = new pokemon_obj(
                pokemonData[1], 
                pokemonData[2],
                pokemonData[3], 
                pokemonData[4], 
                pokemonData[5], 
                pokemonData[1]
            );
    
            setGame(prevGame => {
                const updatedGame = new game_obj();
                updatedGame.CurrentTurn = prevGame.CurrentTurn;
                updatedGame.Turn = prevGame.Turn;
                updatedGame.Round = prevGame.Round;
    
                // Actualiza el entrenador actual con el nuevo Pokémon
                updatedGame.Trainers = prevGame.Trainers.map((trainer, index) => {
                    if (index === prevGame.CurrentTurn) {
                        nuevoPokemon.id = `${trainer.name}_${trainer.NumberofPokemons + 1}_${nuevoPokemon.pokedex}`;
                        return {
                            ...trainer,
                            team: [...trainer.team, nuevoPokemon],
                            NumberofPokemons: trainer.NumberofPokemons + 1
                        };
                    }
                    return trainer;
                });
    
                return updatedGame;
            });
        } catch (error) {
            console.error("Error al obtener el Pokémon:", error);
        }
    };
    
    
    const deletePokemon = (pokemonId) => {
        setGame(prevGame => {
            const updatedGame = new game_obj();
            updatedGame.CurrentTurn = prevGame.CurrentTurn;
            updatedGame.Turn = prevGame.Turn;
            updatedGame.Round = prevGame.Round;
    
            // Actualizar el equipo del entrenador actual
            updatedGame.Trainers = prevGame.Trainers.map((trainer, index) => {
                if (index === prevGame.CurrentTurn) {
                    return {
                        ...trainer,
                        team: trainer.team.filter(pokemon => pokemon.id !== pokemonId),
                        NumberofPokemons: trainer.team.filter(pokemon => pokemon.id !== pokemonId).length
                    };
                }
                return trainer;
            });
    
            return updatedGame;
        });
    };

    const handleNextTurn = () => {
        setGame(prevGame => {
            const updatedGame = new game_obj();
            updatedGame.CurrentTurn = (prevGame.CurrentTurn + 1) % prevGame.Trainers.length;
            updatedGame.Turn = prevGame.Turn;
            updatedGame.Round = prevGame.Round;
            updatedGame.Trainers = prevGame.Trainers;
            return updatedGame;
        });
    };
    
    
    
    
    console.log("Team" + game.Trainers[game.CurrentTurn]);
    return (
        <div className="CurrentPlayerView">
             <h1>Poke App </h1>
            <div className="Title_pokeApp">
            <Player name_player={game.Trainers[game.CurrentTurn].name}  />
                <Bagdes />
            </div>

      <div className="All_Pokemons"> 
      {game.Trainers[game.CurrentTurn].team.map(pokemon =>(
        <Pokemon 
        key={pokemon.id}
        id={pokemon.id}
        name={pokemon.name} 
        level={pokemon.level} 
        extra={pokemon.extra}
        type1={pokemon.type1}
        type2={pokemon.type2}  
        pokedex={pokemon.pokedex}
        onDelete={() => deletePokemon(pokemon.id)}
       
        />

      ))}
      {game.Trainers[game.CurrentTurn].team.length < 6 && <AddPokemon onAdd={handleAddPokemon} />}
      </div>

      <button onClick={handleNextTurn}>Siguiente Turno</button>
     
        </div>
    )
};

export default CurrentPlayerView;