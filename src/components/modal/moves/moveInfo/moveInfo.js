import React from "react";
import "./moveinfo.css";
import "../../../pokemonsStyles/PokemonsStyles.css";
import { pokemonTypeColors } from "../../../pokemonsStyles/typecolors";

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
        <div className="modal " style={change}>
          <div className="modal-content flex gap-6 flex-col  rounded-3xl">
            <h1 className="text-[20px] font-bold font-sans uppercase">
              {move.name}
            </h1>
            <div className="flex items-center ">
              <h2 className="font-semibold text-[20px] uppercase">Type:</h2>
              <p
                className={`p-2 ml-2 w-20 rounded-2xl items-center text-center uppercase`}
                style={{ backgroundColor: pokemonTypeColors[typeNames] }}
              >
                {move.type.name}
              </p>
            </div>
            <div className="flex items-center ">
              <h2 className="font-semibold text-[16px] uppercase">
                Accuracy: {move.accuracy}
              </h2>
            </div>
            <div className="flex items-center ">
              <h2 className="font-semibold text-[16px] uppercase">
                Power: {move.power}
              </h2>
            </div>
            <div className="flex items-center ">
              <h2 className="font-semibold text-[16px] uppercase">
                PP: {move.pp}
              </h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MoveInfo;
