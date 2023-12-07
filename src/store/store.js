import { createStore } from 'redux';
import rootReducer from '../reducers';// Importa tu reductor combinado

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Para habilitar las herramientas de desarrollo de Redux
);

export default store;