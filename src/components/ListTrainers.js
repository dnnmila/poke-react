import React from 'react';
import { useSelector } from 'react-redux';

const ListTrainers = ({ trainer }) => {
    const game = useSelector(state => state.game);
    console.log(trainer); // Esto te ayudará a ver la estructura de 'trainer'

    return (
        <div className="ListTrainers">
            <h2>{trainer.name}</h2>
            {trainer.team && trainer.team.map(poke => (
                <p key={poke.id}>{poke.name}</p> // Asegúrate de que 'poke.id' sea único
            ))}
        </div>
    );
};

export default ListTrainers;