//import Style 
import "./styles/app.scss";
import React, { useState, useEffect} from 'react';
//ading components
import Bagdes from "./components/Badges";
import Player from "./components/Player";
import Pokemon from "./components/Pokemon";
import AddPokemon from "./components/addPokemon";
//adding objects classes
import pokemon_obj from "./components/pokemon_class";
import trainer_obj from "./components/trainer_class";
import game_obj from "./components/game_class";


/*const Pikachu = new pokemon_obj(1,"Pikachu",3,"ELECRTIC","025");
//Kennys.addPokemon(Pikachu);*/


function App() {
  const [game,setGame ] = useState(new game_obj());
  const [kennys, setKennys] = useState(new trainer_obj("Kennys"));
  const [mila, setMila] = useState(new trainer_obj("Mila"));
  const [trampis, setTrampis] = useState(new trainer_obj("Trampis"));
  const [tacho, setTacho] = useState(new trainer_obj("Tacho"));
  const [doc, setDoc] = useState(new trainer_obj("Doc"));
  const [ablan, setAblan] = useState(new trainer_obj("Ablan"));
  const [mandito, setMandito] = useState(new trainer_obj("Mando"));

  useEffect(() => {
    setGame(prevgame => {
        const newGame = new game_obj();
        newGame.CurrentTurn = prevgame.CurrentTurn;
        newGame.Turn = prevgame.Turn;
        newGame.Round = prevgame.Round;
        newGame.Trainers = [...prevgame.Trainers, kennys, mila, trampis, tacho, doc, ablan, mandito];
        return newGame;
    });
}, [kennys, mila, trampis, tacho, doc, ablan, mandito]);



  const handleNextTurn = () => {
    setGame(prevGAME => {
        const updatedGAME = new game_obj();
        updatedGAME.CurrentTurn = prevGAME.CurrentTurn + 1;
        return updatedGAME;
    });
    console.log(game);
  };



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
            pokemonData[5], 
            pokemonData[1]
        );
        console.log(nuevoPokemon);
        setKennys(prevKennys => {
            nuevoPokemon.id = `${prevKennys.name}_${prevKennys.NumberofPokemons +1}_${nuevoPokemon.pokedex}`;
            const updatedKennys = new trainer_obj(prevKennys.name);
            updatedKennys.team = [...prevKennys.team, nuevoPokemon];
            updatedKennys.NumberofPokemons = prevKennys.NumberofPokemons +1;
            return updatedKennys;
        });
        console.log(kennys);
    } catch (error) {
        console.error("Error al obtener el Pokémon:", error);
        // Aquí puedes manejar el error, como mostrar un mensaje en la UI
    }
};

const deletePokemon = (pokemonId) => {
  setKennys(prevKennys => {
      const updatedKennys = new trainer_obj(prevKennys.name);
      updatedKennys.team = prevKennys.team.filter(pokemon => pokemon.id !== pokemonId);
      updatedKennys.NumberofPokemons = prevKennys.NumberofPokemons -1;
      return updatedKennys;
  });
  console.log(kennys);
};


  return (
    <div className="App">
      <h1>Poke App </h1>
      <div className="Title_pokeApp">
        <Player name_player={kennys.name}  />
        <Bagdes />
      </div>

      <div className="All_Pokemons"> 
      {kennys.team.map(pokemon =>(
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
      {kennys.team.length < 6 && <AddPokemon onAdd={handleAddPokemon} />}
      </div>
      
    </div>
  );
}

export default App;
