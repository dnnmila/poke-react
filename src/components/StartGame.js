import React, { useState, useEffect} from 'react';
import CurrentPlayerView from './CurrentPlayerView';


//import { useNavigate } from 'react-router-dom';

const StartGame = () =>{
  
    
    //const navigate = useNavigate();
    const [gameStarted , setGameStarted] = useState(false);

    function startGameButton(){
        setGameStarted(true);
       // navigate('/game');

    }
    return (
        <div className="StartGame">
       {gameStarted === false && <button onClick={startGameButton}>Start</button>}
       {gameStarted === true && <CurrentPlayerView/>}
        </div>
    )
};

export default StartGame;