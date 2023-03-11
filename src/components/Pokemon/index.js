import "./pokemon.css";
import Fundo from "../../assets/fundo.svg";
import pokebola from "../../assets/pokebola.png";
import React, { useState } from "react";
import ModalPokemon from "../modal/modal";
import poison from "../../assets/poison.svg";
import fairy from "../../assets/fairy.svg";
import fighting from "../../assets/fighting.svg";
import eletric from "../../assets/eletric.svg";
import ground from "../../assets/ground.svg";
import ice from "../../assets/ice.svg";
import normal from "../../assets/normal.svg";
import psychic from "../../assets/psychic.svg";
import rock from "../../assets/rock.svg";
import steel from "../../assets/steel.svg";
import water from "../../assets/water.svg";
import grass from "../../assets/grass.svg";
import ghost from "../../assets/ghost.svg";
import flying from "../../assets/flying.svg";
import dark from "../../assets/dark.svg";
import bug from "../../assets/bug.svg";
import dragon from "../../assets/dragon.svg";
import fire from "../../assets/fire.svg";

export const typeImages = {
  flying: flying,
  dark: dark,
  bug: bug,
  ghost: ghost,
  grass: grass,
  dragon: dragon,
  poison: poison,
  fairy: fairy,
  fighting: fighting,
  electric: eletric,
  ground: ground,
  ice: ice,
  normal: normal,
  psychic: psychic,
  rock: rock,
  steel: steel,
  water: water,
  fire: fire,
};

const Pokemon = (props) => {
  const { pokemon, searchbarOpen, setSearchbarOpen } = props;
  const [open, setOpen] = useState(false);

  function openModal() {
    setSearchbarOpen(true)
    setOpen(true);
    document.body.style.overflow = "hidden";
  }

 
  return (
    <div
      className={`pokemon-card-${pokemon.types[0].type.name} card-container transition-transform    hover:border-[2px] border-white`}
    >
      <button
        style={{
          backgroundImage: `url(${Fundo})`,
          backgroundRepeat: "no-repeat",
        }}
        onClick={() => openModal() }
        className="w-full p-2 h-full flex justify-between rounded-[25px] " //img, titulo, numero vai td aqui //card-container-button
      >
        <div className="w-[350px] text-white pl-4">
          <h2 className="font-sans text-[25px] text-left">#{pokemon.id}</h2>
          <h1 className="font-sans text-[50px] text-left overflow-hidden text-ellipsis whitespace-nowrap max-w-[280px] italic">
            {pokemon.name.toUpperCase()}
          </h1>
          <div className="flex  ">
            {pokemon.types.map((type, index) => {
              return (
                <div key={index}>
                  <div
                    className={`pokemon-type-${type.type.name}`}
                    style={{
                      boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.5)",
                      borderRadius: "25px",
                      alignItems: "center",
                      textAlign: "center",
                      height: "50px",
                      width: "100px",
                      marginRight: "6px",
                      display: "flex",
                      justifyContent: "center",
                      color: "white",
                    }}
                  >
                    <div className="flex items-center justify-around gap-1">
                      <img
                        src={
                          typeImages[type.type.name]
                            ? typeImages[type.type.name]
                            : null
                        }
                        alt={type.type.name}
                        className="h-[25px] w-[25px]"
                      />

                      <div className="text-[15px] ">
                        {type.type.name.toUpperCase()}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-25 absolute pl-[260px] ">
          {pokemon.sprites.front_default ? (
            <img
              alt={pokemon.name}
              src={pokemon.sprites.front_default}
              className="min-h-[180px] min-w-25 p-2 "
            />
          ) : (
            <img
              src={pokebola}
              alt={pokemon.name}
              className="h-[180px] w-[180px] p-4"
            />
          )}
        </div>
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
