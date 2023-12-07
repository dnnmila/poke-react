import React from 'react';
import ListTrainers from './ListTrainers';
import { useSelector } from 'react-redux';

const AllPlayersPage = () => {
    const game = useSelector(state => state.game);
    console.log(game);

    return (
        <div>
            <h1>Lista de Entrenadores y sus Pokémon</h1>
            {game.Trainers.map(trainer => (
                <div key={trainer.id}>
                    <h2>{trainer.name}</h2>
                    <ul>
                        {trainer.team.map(pokemon => (
                            <li key={pokemon.id}>{pokemon.name}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};



export default AllPlayersPage;