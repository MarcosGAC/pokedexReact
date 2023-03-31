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

  // const options = [
  //   { tipo: "flying" },
  //   { tipo: "dark" },
  //   { tipo: "bug" },
  //   { tipo: "ghost" },
  //   { tipo: "grass" },
  //   { tipo: "dragon" },
  //   { tipo: "poison" },
  //   { tipo: "fairy" },
  //   { tipo: "fighting" },
  //   { tipo: "electric" },
  //   { tipo: "ground" },
  //   { tipo: "ice" },
  //   { tipo: "normal" },
  //   { tipo: "psychic" },
  //   { tipo: "rock" },
  //   { tipo: "steel" },
  //   { tipo: "water" },
  //   { tipo: "fire" },
  // ];

  return (
    <PokemonsContext.Consumer>
      {({ pokemons, loading, totalPages, selectedType, handleTypeChange }) => (
        <>    
          <div className="pokedex-container pb-10 ">
            <div className="pokedex-header "> 
              <div>
                {/* <select
                  style={{ backgroundColor: pokemonTypeColors[selectedType] }}
                  className="w-30 h-10 text-[18px] rounded-md"
                  value={selectedType}
                  onChange={handleTypeChange}
                >
                  <option style={{ backgroundColor: "white" }} value="">
                    Todos
                  </option>
                  {options.map((opt,index) => {
                    return (
                      <option
                      key={index}
                        style={{ backgroundColor: pokemonTypeColors[opt.tipo] }}
                        value={opt.tipo}
                      >
                        {opt.tipo}
                      </option>
                    );
                  })}
                </select> */}
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
