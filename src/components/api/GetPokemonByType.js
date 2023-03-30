export const getPokemonsByType = async (type, limit = 27, offset = 0) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/type/${type}?limit=${limit}&offset=${offset}`
    );
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
