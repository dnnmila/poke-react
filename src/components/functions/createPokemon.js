const obtenerPokemon = async (numPokedex) => {
    try {
        const respuesta = await fetch(`http://localhost:3000/pokemons/${numPokedex}`);
        if (!respuesta.ok) {
            throw new Error(`Error: ${respuesta.status}`);
        }
        const datosPokemon = await respuesta.json();
        return datosPokemon; // Aquí tendrás la información del Pokémon
    } catch (error) {
        console.error("Error al obtener datos del Pokémon:", error);
    }
};