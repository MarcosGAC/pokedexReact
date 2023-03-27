//buscando pokemons na api pelo tipo
export const getPokemonsByType = async (type) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
      const { pokemon } = await response.json();
      const promises = pokemon.map(async (pokemon) => {
        const response = await fetch(pokemon.pokemon.url);
        return response.json();
      });
      const results = await Promise.all(promises);
      return results;
    } catch (error) {
      console.log("erro: ", error);
    }
  };