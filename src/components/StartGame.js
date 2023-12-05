import React, { useState, useEffect} from 'react';
import CurrentPlayerView from './CurrentPlayerView';

const StartGame = ({game ,setGame,kennys ,setKennys}) =>{
    const [gameStarted , setGameStarted] = useState(false);

    function startGameButton(){
        setGameStarted(true);

    }
    return (
        <div className="StartGame">
       {gameStarted === false && <button onClick={startGameButton}>Start</button>}
       {gameStarted === true && <CurrentPlayerView  game={game} setGame={setGame} kennys={kennys}  setKennys={setKennys}/>}
        </div>
    )
};

export default StartGame;