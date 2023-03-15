//api js vai exportar metodos que vai ser utilizado pela aplicacao. Esses metodos vao conversar com a api
//buscando pokemons na api pela pesquisa
export const searchPokemon = async (pokemon) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log("erro: ", error);
  }
};


//buscando todos os pokemons da api
export const getPokemons = async (limit = 50, offset = 0) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log("erro: ", error);
  }
};


//obtendo os dados de cada pokemon
export const getPokemonData = async (url) => {
  try {
    const response = await fetch(url);
    const pokemon = await response.json();

    return pokemon;
  } catch (error) {
    console.log("erro: ", error);
  }
};

export const getPokemonMove = async (url) => {
  try {
    const response = await fetch(url);
    const move = await response.json();
    console.log(move.accuracy)
    return move;
  } catch (error) {
    console.log("erro: ", error);
  }
};



