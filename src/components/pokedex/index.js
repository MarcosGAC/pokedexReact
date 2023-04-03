import { PokemonsContext } from "../../common/context/PokemonsContext";
import Loading from "../loading";
import Pagination from "../pagination";
import Pokemon from "../Pokemon";
import { pokemonTypeColors } from "../pokemonsStyles/typecolors";
import "./pokedex.css";

const Pokedex = (props) => {
  const {
    page,
    totalPages,
    setPage,
    searchbarOpen,
    setSearchbarOpen,
  } = props;

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
    <PokemonsContext.Consumer>
      {({ pokemons, loading, totalPages}) => (
        <>    
          <div className="pokedex-container pb-10 ">
            <div className="pokedex-header "> 
              <div>
              </div>

              <Pagination
                page={page + 1}
                totalPages={totalPages}
                onLeftClick={onLeftClickHandler}
                onRightClick={onRightClickHandler}
              />
            </div>

            {loading ? (
              <div className="p-10">
                <Loading />
              </div>
            ) : (
              <div className="min-h-[100vh] bg-transparent">
                <section className="pokedex-grid">
                  {pokemons &&
                    pokemons.map((pokemon, index) => {
                      return (
                        <Pokemon
                          key={index}
                          pokemon={pokemon}
                          searchbarOpen={searchbarOpen}
                          setSearchbarOpen={setSearchbarOpen}
                        />
                      );
                    })}
                </section>
              </div>
            )}
          </div>
        </>
      )}
    </PokemonsContext.Consumer>
  );
};

export default Pokedex;
