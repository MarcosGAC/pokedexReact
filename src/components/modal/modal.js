import "../pokemonsStyles/PokemonsStyles.css";
import pokebola from "../../assets/pokebola.png";
import typeImages from "../Pokemon/iconesTypes";
import { useState } from "react";
import { useEffect } from "react";
import { X } from "phosphor-react";
import { getPokemonMove } from "../api/GetPokemonMove";
import Moves from "./moves/moves";
import StatusInfo from "./statusInfo/statusInfo";
import TypePokemon from "./typePokemon/typePokemon";

export default function ModalPokemon({
  closeModal,
  name,
  imagem,
  pokemon,
  setSearchbarOpen,
}) {
  const [imagePoke, setImagePoke] = useState(imagem);
  const [selectedMove, setSelectedMove] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showStatus, setShowStatus] = useState(true);
  const [showMoves, setShowMoves] = useState(false);

  function MovesSelected() {
    setShowStatus(false);
    setShowMoves(true);
  }

  function statuSelected() {
    setShowMoves(false);
    setShowStatus(true);
  }

  async function handleMoveClick(move) {
    const moveData = await getPokemonMove(move.move.url);
    setSelectedMove(moveData);
    setShowModal(true);
  }

  function changeImage() {
    const newImage =
      imagePoke === imagem
        ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png`
        : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
    setImagePoke(newImage);
  }

  const clicarFora = ".modal-container";
  const clicarX = ".fecharmodal";

  function lockScroll(event) {
    if (
      event &&
      (!event.target.closest(clicarFora) ||
        event.target.closest(clicarX) ||
        event.keyCode === 27)
    ) {
      setSearchbarOpen(false);
      closeModal(false);
      document.body.style.overflow = "auto";
    }
  }
  document.onkeydown = function (event) {
    if (event.key === "Escape") {
      setSearchbarOpen(false);
    }
  };

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        closeModal(false);
        document.body.style.overflow = "auto";
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  //console.log(selectedMove)

  return (
    <div
      className="modal-background "
      id="overlay"
      onClick={(event) => {
        event.stopPropagation();
        lockScroll(event);
      }}
    >
      <div
        className="modal-container max-[600px]:max-w-[400px]  max-[600px]:min-w-[300px] max-[600px]:max-h-[420px] "
        id="modal"
      >
        <div
          className={`pokemon-card-${pokemon.types[0].type.name} w-[100%] h-full max-[600px]:max-h-[420px] rounded-[40px] `}
        >
          <div className="h-10 flex">
            <button
              onClick={() => lockScroll()}
              className="fecharmodal text-[25px] pt-[10px] ml-[95%] items-center text-white max-[600px]:ml-[90%] "
            >
              <X size={21} />
            </button>
          </div>

          <h1 className="pl-10 font-bold text-[40px] text-white">
            {name.toUpperCase()}
          </h1>

          <div className="flex h-full">
            <div className="flex  items-center  h-[70%] w-full max-w-[50%]">
              <div className="w-full text-center">
                {imagem ? (
                  <div className="flex flex-col items-center justify-center">
                    <img
                      src={imagePoke}
                      alt={name}
                      className="w-[200px] h-[200px] max-[600px]:w-[120px] max-[600px]:h-[120px]"
                    />
                    <button
                      onClick={() => changeImage()}
                      className="font-bold pt-auto pr-auto flex justify-center text-[25px] pb-4 text-white uppercase"
                    >
                      {imagem === imagePoke ? (
                        <h1 className="text-yellow-500">Shiny</h1>
                      ) : (
                        <h1>Normal</h1>
                      )}
                    </button>
                  </div>
                ) : (
                  <img
                    src={pokebola}
                    alt={name}
                    className="h-[200px] w-[200px]"
                  />
                )}

                <div className="flex justify-center pb-4">
                  <TypePokemon pokemon={pokemon} typeImages={typeImages} />
                </div>
              </div>
            </div>
            <div className="w-full h-full   max-[600px]:h-[70%] ">
              <div className="select-option flex w-full text-[30px] justify-evenly max-[600px]:text-[25px] max-[600px]:justify-center">
                <button
                  onClick={() => statuSelected()}
                  className={`w-1/2  font-sans font-semibold max-[600px]:w-[40%] p-1`}
                  style={{ backgroundColor: showStatus ? "#00FF00" : "gray",
                  color: !showStatus ? "black" : "white" }}
                >
                  Status
                </button>
                <div className=" w-2 bg-transparent" />
                <button
                  onClick={() => MovesSelected()}
                  className={`w-1/2 font-sans font-semibold max-[600px]:w-[40%] p-1`}
                  style={{ backgroundColor: !showStatus ? "#00FF00" : "gray",
                   color: !showStatus ? "white" : "black" , 
                  }}
                >
                  Moves
                </button>
              </div>
              <div className="w-full h-full transition-all duration-1000">
                {showStatus === true ? <StatusInfo pokemon={pokemon} /> : null}
                {showMoves === true ? (
                  <Moves
                    handleMoveClick={handleMoveClick}
                    pokemon={pokemon}
                    selectedMove={selectedMove}
                    showModal={showModal}
                    setShowModal={setShowModal}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
