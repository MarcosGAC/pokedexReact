import "../pokemonsStyles/PokemonsStyles.css";
import pokebola from "../../assets/pokebola.png";
import React, { useState } from "react";
import Fundo from "../../assets/fundo.png";
import ModalPokemon from "../modal/modal";
import typeImages from "./iconesTypes";
import TypePokemon from "../modal/typePokemon/typePokemon";
import { pokemonTypeColors } from "../pokemonsStyles/typecolors";

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
    //{pokemon-card-${pokemon.types[0].type.name}}
    className={`bg-gray-900 card-container  max-[600px]:h-[120px]  shadow-[30px_35px_35px_-15px_rgba(0,0,0,0.7)]`}
    >
      <div className="h-[80%]">
      <div
        //style={{ backgroundImage: `url(${Fundo})`, backgroundSize: "200px" }}
        className={`w-full p-2 h-full flex justify-between items-center rounded-[25px] bg-no-repeat bg-right`} //img, titulo, numero vai td aqui //card-container-button
      >
        <div className="min-w-[200px] w-1/2 text-white pl-4 max-[600px]:w-[160px]">
          <h2 className="font-sans text-[25px] text-left">#{pokemon.id}</h2>
          <h1 className="font-sans text-[50px] text-left overflow-hidden text-ellipsis whitespace-nowrap max-w-[280px] italic max-[600px]:text-[30px]">
            {pokemon.name.toUpperCase()}
          </h1>
          <div
            className="flex "
          >
            <TypePokemon pokemon={pokemon} typeImages={typeImages} />
          </div>
        </div>

        {pokemon.sprites.other.home.front_default ? (
          <img
            alt={pokemon.name}
            src={pokemon.sprites.other.home.front_default}
            className="h-[80%] min-w-25 w-1/2 p-2 max-[600px]:h-[220px] max-[600px]:min-w-[150px]"
          />
        ) : (
          <img
            src={pokebola}
            alt={pokemon.name}
            className="h-[180px] w-[180px] p-4"
            />
            )}
          </div>
      </div>
      <button 
       style={{
        backgroundColor: pokemonTypeColors[pokemon.types[0].type.name]}}
      className={` rounded-b-2xl w-full h-[20%] text-[25px] text-white`} onClick={() => openModal()}>Ver mais</button>
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
