import "./modal.css";
import pokebola from "../../assets/pokebola.png";
import { typeImages } from "../Pokemon";
import proximo from "../../assets/proximo.svg";
import { useState } from "react";
import { useEffect } from "react";

export default function ModalPokemon({ closeModal, name, imagem, pokemon }) {
  const [imagePoke, setImagePoke] = useState(imagem);

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
      (!event.target.closest(clicarFora) || event.target.closest(clicarX))
    ) {
      closeModal(false);
      document.body.style.overflow = "auto";
    }
  }

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

  return (
    <div
      className="modal-background pr-4"
      id="overlay"
      onClick={(event) => lockScroll(event)}
    >
      <div className="modal-container " id="modal">
        <div
          className={`pokemon-card-${pokemon.types[0].type.name}`}
          style={{ width: "100%", height: "600px", borderRadius: "25px" }}
        >
          <div className="header-modal">
            <button
              onClick={() => lockScroll()}
              className="fecharmodal text-[25px] ml-[95%]"
            >
              x
            </button>
          </div>

          <h1 className="pokemon-name">{name.toUpperCase()}</h1>

          <div className="flex pl-[10%] items-center">
            <div>
              {imagem ? (
                <div className="flex items-center">
                  <img
                    src={imagePoke}
                    alt={name}
                    className="w-[200px] h-[200px]"
                  />
                  <button
                    onClick={() => changeImage()}
                    className="pt-auto pr-auto flex"
                  >
                    <img
                      className="h-8 w-8 "
                      src={proximo}
                      alt="icone proximo"
                    />
                  </button>
                </div>
              ) : (
                <img
                  src={pokebola}
                  alt={name}
                  className="h-[200px] w-[200px]"
                />
              )}

              <div className="flex justify-center">
                {pokemon.types.map((type, index) => {
                  return (
                    <div key={index} className="pokemon-type ">
                      <div
                        className={`pokemon-type-${type.type.name} gap-1`}
                        style={{
                          boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.5)",
                          borderRadius: "25px",
                          alignItems: "center",
                          textAlign: "center",
                          height: "45px",
                          width: "100px",
                          marginRight: "6px",
                          display: "flex",
                          justifyContent: "center",
                          color: "white",
                        }}
                      >
                        <img
                          src={
                            typeImages[type.type.name]
                              ? typeImages[type.type.name]
                              : null
                          }
                          alt={type.type.name}
                          className="h-[25px] w-[25px]"
                        />
                        {type.type.name}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              {pokemon.stats.map((stats, index) => {
                const statBar = (stats.base_stat / 100) * 100;
                return (
                  <div
                    key={index}
                    className="flex items-center "
                    style={{ width: `${statBar}%` }}
                  >
                    <div
                      className="bg-white h-[40px] p-2 m-2 rounded-xl flex justify-between min-w-[200px] max-w-[320px] sm:min-w-[180px] sm:max-w-[250px] md:min-w-[200px] md:max-w-[300px] lg:min-w-[300px] lg:max-w-[400px] flex-wrap"
                      style={{ width: `${statBar}%` }}
                    >
                      <div
                        className="bg-green-400 rounded-lg items-center flex"
                        style={{ width: `${statBar}%` }}
                      >
                        <div className="absolute text-[22px] ">
                          {stats.stat.name}
                        </div>
                      </div>
                    </div>
                    <div>{stats.base_stat}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <h2 className="text-[25px] pl-36 text-white">Habilidades:</h2>
          <div className="moves-pokemon">
            {pokemon.moves.map((move, index) => {
              return (
                <div key={index} className="h-[45%] flex justify-center m-2">
                  <div className="bg-slate-300 h-[40px] p-2 m-2 rounded-xl flex justify-center w-[500px] text-[100%]">
                    {move.move.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
