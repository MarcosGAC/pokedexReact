import React from "react";
import "./moveinfo.css";
import "../../../pokemonsStyles/PokemonsStyles.css";

function MoveInfo({ move, showModal, pokemon }) {
  let displaytype = "hidden";
  if (showModal === true) {
    displaytype = "flex";
  } else {
    displaytype = "hidden";
  }

  const change = {
    position: displaytype,
  };
 
  const typeNames = move.type.name

  return (
    <>
      {showModal && (
        <div className="modal" style={change}>
          <div className="modal-content">
            <h2>{move.name}</h2>
            <p
              className={`p-2 w-full items-center`}
              style={typeNames === "fire" ? {backgroundColor:"yellow"} : {backgroundColor:"purple"}}
            >
              {move.type.name}
            </p>
            <p>Accuracy: {move.accuracy}</p>
            <p>Power: {move.power}</p>
            <p>PP: {move.pp}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default MoveInfo;
