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
    <div className="moves-pokemon flex  ">
      {pokemon.moves[0] !== undefined ? (
        <div className=" flex w-full ">
          <div className="pt-10 w-full max-[600px]:pt-0 ">
            {pokemon.moves.map((move, index) => {
              return (
                <div
                  onMouseEnter={() => handleMoveClick(move)}
                  onMouseLeave={() => setShowModal(true)}
                  key={index}
                  className="h-10 "
                >
                  <div className="bg-green-600 overflow-hidden max-[600px]:text-ellipsis max-[600px]:whitespace-nowrap max-[600px]:w-[150px] max-[600px]:text-[15px] cursor-pointer  font-semibold h-[40px] p-2 m-2 border-black border-[1px] rounded-xl flex  w-[100%] text-[100%] uppercase">
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
