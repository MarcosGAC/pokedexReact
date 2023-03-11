import Loading from "../loading";
import Pagination from "../pagination";
import Pokemon from "../Pokemon";
import "./pokedex.css";

const Pokedex = (props) => {
  const { pokemons, loading, page, totalPages, setPage,searchbarOpen, setSearchbarOpen} = props;

  const onLeftClickHandler = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };
  
  const onRightClickHandler = () => {
    if (page + 1 !== totalPages) {
      setPage(page + 1);
    }
  };

  

  return (
    <div className="pokedex-container pt-[10%] ">
      <div className="pokedex-header ">
        <h1>Pokédex</h1>
        <Pagination
          page={page + 1}
          totalPages={totalPages}
          onLeftClick={onLeftClickHandler}
          onRightClick={onRightClickHandler}
        />
      </div>

      {loading ? (
        <div className="p-10 "> carregando..
        <Loading />
        </div>
      ) : (
        <div className="min-h-[100vh] bg-transparent">
        <section className="pokedex-grid">
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return <Pokemon key={index} pokemon={pokemon} searchbarOpen={searchbarOpen} setSearchbarOpen={setSearchbarOpen}/>;
            })}
        </section>
        </div>
      )}
     <div className="text-center justify-center flex">
       <Pagination
          page={page + 1}
          totalPages={totalPages}
          onLeftClick={onLeftClickHandler}
          onRightClick={onRightClickHandler}
        />
        </div>
    </div>
  );
};

export default Pokedex;
