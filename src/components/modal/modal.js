import "./modal.css";
import pokebola from "../../assets/pokebola.png";
export default function ModalPokemon({ closeModal, name, imagem, pokemon }) {
  


  function lockScroll() {
    closeModal(false);
    document.body.style.overflow = "auto";
  }

  return (
    <div className="modal-background pr-4" id="overlay">
      <div className="modal-container" id="modal">
        <div
          className={`pokemon-card-${pokemon.types[0].type.name}`}
          style={{ width: "100%", height: "600px", borderRadius: "25px" }}
        >
          <div className="header-modal">
            <button
              onClick={() => lockScroll()}
              className="text-[25px] ml-[95%]"
            >
              x
            </button>
          </div>

          <h1 className="pokemon-name">{name}</h1>

          <div className="flex pl-[10%] items-center">
            <div>
              {imagem ? (
                <img src={imagem} alt={name} className="w-[200px] h-[200px]" />
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
                        className={`pokemon-type-${type.type.name}`}
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
                      className=" bg-white h-[40px]  p-2 m-2 rounded-xl flex justify-between min-w-[200px] max-w-[370px] "
                      style={{ width: `${statBar}%` }}
                    >
                      <div
                        className=" bg-green-400 rounded-lg items-center flex"
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
          <h2 className="text-[25px] pl-2 ">Habilidades:</h2>
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
