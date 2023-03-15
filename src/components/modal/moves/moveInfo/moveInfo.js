import React from "react";
import "./moveinfo.css";

function MoveInfo({ move, showModal, setShowModal }) {
  console.log(showModal)

  let displaytype = "hidden"
  if(showModal === true){
    displaytype = "fixed"
  }else{
    displaytype = "hidden"
  }

  const change=
    {
    position:displaytype,
    zIndex:"50",
  }

  return (
    <>
      {showModal && (
    <div className="modal" style={change}>
        <div className="modal-content">
          <span className="close" onClick={() => setShowModal(false)}>
            &times;
          </span>
          <h2>{move.name}</h2>
          <p>Type: {move.type.name}</p>
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
