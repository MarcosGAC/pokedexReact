import Loading from "../loading";
import Pagination from "../pagination";
import Pokemon from "../Pokemon";
import "./pokedex.css";

const Pokedex = (props) => {
  const {
    pokemons,
    loading,
    page,
    totalPages,
    setPage,
    searchbarOpen,
    setSearchbarOpen,
    handleTypeChange,
    selectedType,
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
    <div className="pokedex-container pt-[10%] ">
      <div className="pokedex-header ">
        <h1>Pokédex</h1>

        <div>
          <select
            className="type-filter"
            value={selectedType}
            onChange={handleTypeChange}
          >
            <option value="">Todos</option>
            <option value="grass">Grass</option>
            <option value="fire">Fire</option>
            <option value="water">Water</option>
            <option value="electric">Electric</option>
            <option value="normal">Normal</option>
            <option value="fighting">Fighting</option>
            <option value="flying">Flying</option>
            <option value="poison">Poison</option>
            <option value="ground">Ground</option>
            <option value="rock">Rock</option>
            <option value="bug">Bug</option>
            <option value="ghost">Ghost</option>
            <option value="steel">Steel</option>
            <option value="psychic">Psychic</option>
            <option value="ice">Ice</option>
            <option value="dragon">Dragon</option>
            <option value="dark">Dark</option>
            <option value="fairy">Fairy</option>
          </select>
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
          {" "}
          carregando..
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
      <div className="text-center justify-center flex">
        <Pagination
          loading={loading}
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
