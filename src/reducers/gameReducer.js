// gameReducer.js
import trainer_obj from "../components/obj_Class/trainer_class";
const initialState = {
    // Define el estado inicial de tu juego


    Trainers: [
        new trainer_obj("P1", "Kennys"),
        new trainer_obj("P2", "Mila"),
        new trainer_obj("P3", "Trampis"),
        new trainer_obj("P4", "Tacho"),
        new trainer_obj("P5", "Doc"),
        new trainer_obj("P6", "Ablan"),
        new trainer_obj("P7", "Mando"),
    ],
        // ... otros entrenadores: [],
    CurrentTurn: 0,
    // ...otros estados relevantes...
};

function gameReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_POKEMON_TO_TRAINER':
            const { trainerId, pokemon } = action.payload;
            return {
                ...state,
                Trainers: state.Trainers.map(trainer =>
                    trainer.id === trainerId
                        ? { ...trainer, team: [...trainer.team, pokemon] }
                        : trainer
                ),
            };
          
            case 'DELETE_POKEMON_FROM_TRAINER':
                return {
                    ...state,
                    Trainers: state.Trainers.map(trainer =>
                        trainer.id === action.payload.trainerId
                            ? { ...trainer, team: trainer.team.filter(pokemon => pokemon.id !== action.payload.pokemonId) }
                            : trainer
                    ),
                };
            case 'NEXT_TURN':
                return {
                    ...state,
                    CurrentTurn: (state.CurrentTurn + 1) % state.Trainers.length,
                };
        // ...manejar otras acciones...
        default:
            return state;
    }
}

export default gameReducer;