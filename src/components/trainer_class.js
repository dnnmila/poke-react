//import pokemon_obj from "./pokemon_class";

export default class trainer_obj {
    constructor(name) {
        this.name = name;
        this.team = []; // Array de objetos Pokemon
    }

    addPokemon(pokemon_obj) {
        if (this.team.length < 6) {
            this.team.push(pokemon_obj);
        } else {
            console.log('El equipo ya está completo.');
        }
    }

    // Otros métodos relacionados con el entrenador
}