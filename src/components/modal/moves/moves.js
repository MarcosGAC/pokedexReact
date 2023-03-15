//componente para mostrar todos os moves do pokemon
import MoveInfo from "./moveInfo/moveInfo";

export default function Moves({
  handleMoveClick,
  pokemon,
  showModal,
  setShowModal,
  selectedMove,
}) {
  return (
    <div>
      {pokemon.moves[0] !== undefined ? (
        <>
          <h2 className="text-[25px] pl-36 text-white">Habilidades:</h2>
          <div className="moves-pokemon">
            {pokemon.moves.map((move, index) => {
              return (
                <div
                  onClick={() => handleMoveClick(move)}
                  key={index}
                  className="h-[45%] flex justify-center m-2 "
                >
                  <div className="bg-green-600 h-[40px] p-2 m-2 border-black border-[1px] rounded-xl flex justify-center w-[90%] text-[100%]">
                    {move.move.name}
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <h1 className="text-[25px] text-white pt-10 text-center ">
          Não há nenhuma habilidade para ser exibida.
        </h1>
      )}
      <div>
        {" "}
        {selectedMove && (
          <MoveInfo
            move={selectedMove}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        )}
      </div>
    </div>
  );
}
