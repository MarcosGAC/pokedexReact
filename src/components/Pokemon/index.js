import "../pokemonsStyles/PokemonsStyles.css";
import pokebola from "../../assets/pokebola.png";
import React, { useState } from "react";
import Fundo from "../../assets/fundo.png";
import ModalPokemon from "../modal/modal";
import typeImages from "./iconesTypes";
import TypePokemon from "../modal/typePokemon/typePokemon";

const Pokemon = (props) => {
  const { pokemon, searchbarOpen, setSearchbarOpen } = props;
  const [open, setOpen] = useState(false);

  function openModal() {
    setOpen(true);
    document.body.style.overflow = "hidden";
    setSearchbarOpen(true);
  }

  return (
    <div
      className={`pokemon-card-${pokemon.types[0].type.name} card-container  max-[600px]:h-[120px] hover:border-2 border-white shadow-[30px_35px_35px_-15px_rgba(0,0,0,0.7)]`}
    >
      <button
        style={{ backgroundImage: `url(${Fundo})`, backgroundSize: "200px" }}
        onClick={() => openModal()}
        className={`w-full p-2 h-full flex justify-between rounded-[25px] bg-no-repeat bg-right`} //img, titulo, numero vai td aqui //card-container-button
      >
        <div className="w-[350px] text-white pl-4 max-[600px]:w-[160px]">
          <h2 className="font-sans text-[25px] text-left">#{pokemon.id}</h2>
          <h1 className="font-sans text-[50px] text-left overflow-hidden text-ellipsis whitespace-nowrap max-w-[280px] italic max-[600px]:text-[30px]">
            {pokemon.name.toUpperCase()}
          </h1>
          <div
            className="flex
          "
          >
            <TypePokemon pokemon={pokemon} typeImages={typeImages} />
          </div>
        </div>

        {pokemon.sprites.front_default ? (
          <img
            alt={pokemon.name}
            src={pokemon.sprites.front_default}
            className="min-h-[180px] min-w-25 p-2 max-[600px]:h-[120px] max-[600px]:min-w-[150px]"
          />
        ) : (
          <img
            src={pokebola}
            alt={pokemon.name}
            className="h-[180px] w-[180px] p-4"
          />
        )}
      </button>

      {open ? (
        <ModalPokemon
          setSearchbarOpen={setSearchbarOpen}
          searchbarOpen={searchbarOpen}
          closeModal={setOpen}
          name={pokemon.name}
          imagem={pokemon.sprites.front_default}
          pokemon={pokemon}
          tipo={typeImages}
        />
      ) : null}
    </div>
  );
};
export default Pokemon;
