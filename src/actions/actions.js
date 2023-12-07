export const addPokemonToTrainer = (trainerId, pokemon) => ({
    type: 'ADD_POKEMON_TO_TRAINER',
    payload: { trainerId, pokemon },
});

export const deletePokemonFromTrainer = (trainerId, pokemonId) => ({
    type: 'DELETE_POKEMON_FROM_TRAINER',
    payload: { trainerId, pokemonId },
});

// Acción para avanzar al siguiente turno
export const nextTurn = () => ({
    type: 'NEXT_TURN',
});

