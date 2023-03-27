//obtendo os movimentos de cada pokemon
export const getPokemonMove = async (url) => {
    try {
      const response = await fetch(url);
      const move = await response.json();
      return move;
    } catch (error) {
      console.log("erro: ", error);
    }
  };