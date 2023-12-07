//import pokemon_obj from "./pokemon_class";

export default class trainer_obj {
    constructor(id,name) {
        this.id = id;
        this.name = name;
        this.team = []; // Array de objetos Pokemon
        this.NumberofPokemons = 0;
    }

    addPokemon(pokemon_obj) {
        if (this.team.length < 6) {
            this.team.push(pokemon_obj);
        } else {
            console.log('El equipo ya está completo.');
        }
    }

    deletePokemon(pokemonId) {
        this.team = this.team.filter(pokemon => pokemon.id !== pokemonId);
    }

    // Otros métodos relacionados con el entrenador
}