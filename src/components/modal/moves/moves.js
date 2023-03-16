import MoveInfo from "./moveInfo/moveInfo";
import "./move.css";

export default function Moves({
  handleMoveClick,
  pokemon,
  showModal,
  setShowModal,
  selectedMove,
}) {

  return (
    <div className="moves-pokemon flex ">
      {pokemon.moves[0] !== undefined ? (
        <div className=" flex w-full">
          <div className="pt-10 w-full ">
            {pokemon.moves.map((move, index) => {
              return (
                <div
                  onMouseEnter={() => handleMoveClick(move)}
                  onMouseLeave={() => setShowModal(false)}
                  key={index}
                  className="h-10 "
                >
                  <div className="bg-green-600  h-[40px] p-2 m-2 border-black border-[1px] rounded-xl flex  w-[100%] text-[100%]">
                    {move.move.name}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-full ml-[16px]">
            {selectedMove && (
              <div className=" fixed w-[280px]">
              <MoveInfo
                pokemon={pokemon}
                move={selectedMove}
                showModal={showModal}
                setShowModal={setShowModal}
              />
             </div>)}
          </div>
        </div>
      ) : (
        <h1 className="text-[25px] text-white pt-10 text-center ">
          Não há nenhuma habilidade para ser exibida.
        </h1>
      )}
    </div>
  );
}
