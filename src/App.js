//import Style 
import "./styles/app.scss";
import React, { useState, useEffect} from 'react';
//ading components
import Bagdes from "./components/Badges";
import Player from "./components/Player";
import Pokemon from "./components/Pokemon";
import AddPokemon from "./components/addPokemon";
import StartGame from "./components/StartGame";
//adding objects classes

import trainer_obj from "./components/trainer_class";
import game_obj from "./components/game_class";


/*const Pikachu = new pokemon_obj(1,"Pikachu",3,"ELECRTIC","025");
//Kennys.addPokemon(Pikachu);*/


function App() {
  
  const [kennys, setKennys] = useState(new trainer_obj("Kennys"));
  const [mila, setMila] = useState(new trainer_obj("Mila"));
  const [trampis, setTrampis] = useState(new trainer_obj("Trampis"));
  const [tacho, setTacho] = useState(new trainer_obj("Tacho"));
  const [doc, setDoc] = useState(new trainer_obj("Doc"));
  const [ablan, setAblan] = useState(new trainer_obj("Ablan"));
  const [mandito, setMandito] = useState(new trainer_obj("Mando"));

  const [game, setGame] = useState(() => {
    const initialGame = new game_obj();
    initialGame.Trainers = [kennys, mila, trampis, tacho, doc, ablan, mandito];
    // Configura otras propiedades iniciales si es necesario
    return initialGame;
});


  useEffect(() => {
    setGame(prevgame => {
        const newGame = new game_obj();
        newGame.CurrentTurn = prevgame.CurrentTurn;
        newGame.Turn = prevgame.Turn;
        newGame.Round = prevgame.Round;
        const updatedTrainers = prevgame.Trainers.map(trainer => {
          // Actualiza cada entrenador basado en su estado actual.
          switch (trainer.name) {
              case "Kennys":
                  return kennys; // Asegúrate de que 'kennys' esté actualizado
              case "Mila":
                  return mila;
              case "Trampis":
                  return trampis;
              case "Tacho":
                return tacho;
              case "Doc":
                return doc;
              case "Ablan":
                return ablan;
              case "Mando":
                return mandito;
              default:
                  return trainer;
          }
      });

      return {
          ...prevgame,
          Trainers: updatedTrainers
      };
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

  return (
    <div className="App">
      <StartGame game={game} setGame={setGame} kennys={kennys} setKennys={setKennys} />
    </div>
  );
}

export default App;
