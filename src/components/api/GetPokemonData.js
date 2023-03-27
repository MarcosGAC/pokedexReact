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