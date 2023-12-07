
//adding components
import Bagdes from './Badges';
import Player from './Player';
import Pokemon from './Pokemon';
import AddPokemon from './addPokemon';

import pokemon_obj from './obj_Class/pokemon_class';


import { useSelector, useDispatch } from 'react-redux';
import { addPokemonToTrainer,deletePokemonFromTrainer, nextTurn} from '../actions/actions';



const CurrentPlayerView = () =>{

    const game = useSelector(state => state.game);
    const dispatch = useDispatch();

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
    
            // Despachar acción para agregar Pokémon al entrenador en Redux
            const trainerId = game.Trainers[game.CurrentTurn].id;
            dispatch(addPokemonToTrainer(trainerId, nuevoPokemon));
            console.log(game);
        } catch (error) {
            console.error("Error al obtener el Pokémon:", error);
        }
    };

    const handleDeletePokemon = ( pokemonId) => {
        const trainerId = game.Trainers[game.CurrentTurn].id;
        dispatch(deletePokemonFromTrainer(trainerId, pokemonId));
    };

    const handleNextTurn = () => {
        dispatch(nextTurn());
    };

    
 
    
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
        onDelete={() => handleDeletePokemon(pokemon.id)}
       
        />

      ))}
      {game.Trainers[game.CurrentTurn].team.length < 6 && <AddPokemon onAdd={handleAddPokemon} />}
      </div>

      <button onClick={handleNextTurn}>Siguiente Turno</button>

     
        </div>
    )
};

export default CurrentPlayerView;