import React from "react";
import "./moveinfo.css";
import "../../../pokemonsStyles/PokemonsStyles.css";
import { pokemonTypeColors } from "../../../pokemonsStyles/typecolors";
import typeImages from "../../../Pokemon/iconesTypes";

function MoveInfo({ move, showModal }) {
  let displaytype = "hidden";
  if (showModal === true) {
    displaytype = "flex";
  } else {
    displaytype = "hidden";
  }

  const change = {
    position: displaytype,
  };

  const typeNames = move.type.name;

  return (
    <>
      {showModal && (
        <div className="modal items-center flex-wrap justify-center z-10  rounded-[20px] inset-0 text-white shadow-2xl shadow-black" style={change}>
           <div className="modal-content whitespace-nowrap flex flex-col justify-evenly  w-11/12 sm:w-3/4 lg:w-1/2 xl:w-1/3">
      <h1 className="text-2xl font-bold font-sans uppercase mb-2 " style={{color:pokemonTypeColors[typeNames]}}>
        {move.name}
      </h1>
      <div className="flex items-center mb-2 justify-between ">
        <h2 className="font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl uppercase mr-2">Type:</h2>
        <div className="flex h-8 items-center p-2 justify-between rounded-2xl" style={{ backgroundColor: pokemonTypeColors[typeNames] }}>
          <p className={`text-center uppercase`}>{move.type.name}</p>
          <img
            src={typeImages[move.type.name] ? typeImages[move.type.name] : null}
            alt="icone"
            className="h-[25px] pl-[3px]"
          />
        </div>
      </div>
      <div className="flex items-center justify-between mb-2">
        <h2 className="font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl uppercase mr-2">Accuracy:</h2>
        <p className="font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl">{move.accuracy}</p>
      </div>
      <div className="flex items-center mb-2 justify-between">
        <h2 className="font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl uppercase mr-2">Power:</h2>
        <p className="font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl">{move.power}</p>
      </div>
      <div className="flex items-center mb-2 justify-between">
        <h2 className="font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl uppercase mr-2">PP:</h2>
        <p className="font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl">{move.pp}</p>
      </div>
    </div>
        </div>
      )}
    </>
  );
}

export default MoveInfo;
