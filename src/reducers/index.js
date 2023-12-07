import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
// Importa otros reductores si los necesitas

const rootReducer = combineReducers({
    game: gameReducer,
    // otros reductores...
});

export default rootReducer;