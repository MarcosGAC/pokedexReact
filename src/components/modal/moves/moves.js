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
          <div className="pt-10 pl-3 w-full max-[600px]:pt-0 ">
            {pokemon.moves.map((move, index) => {
              return (
               
                  <div 
                   onMouseEnter={() => handleMoveClick(move)}
                   onMouseLeave={() => setShowModal(false)}
                   key={index}
                  className="bg-green-600  rounded-xl select-none focus:outline-none overflow-hidden max-[600px]:text-ellipsis max-[600px]:whitespace-nowrap max-[600px]:w-[150px] max-[600px]:text-[15px] cursor-pointer  font-semibold h-[40px] p-2 m-2 border-black border-[1px] flex  w-[100%] text-[100%] uppercase touch-action:manipulation">
                    {move.move.name}
                  </div>
               
              );
            })}
          </div>
          <div className="w-full ml-[16px]">
            {showModal && (
              <div className="fixed w-[280px] max-[600px]:top-0 max-[600px]:bottom-0 max-[600px]:right-0 max-[600px]:left-0 max-[600px]:w-full max-[600px]:h-full max-[600px]:z-50">
                <MoveInfo
                  pokemon={pokemon}
                  move={selectedMove}
                  showModal={showModal}
                  setShowModal={setShowModal}
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        <h1 className="text-[25px] text-white pt-10 text-center rounded-xl">
          Não há nenhuma habilidade para ser exibida.
        </h1>
      )}
    </div>
  );
}
