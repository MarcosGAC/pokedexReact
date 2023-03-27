import React, { useEffect, useState } from "react";
import { getPokemonData } from "./components/api/GetPokemonData";
import { getPokemons } from "./components/api/GetPokemons";
import { searchPokemon } from "./components/api/Searchpokemon";
import "./App.css";
import Pokedex from "./components/pokedex";
import Searchbar from "./components/searchbar";
import NotFound from "./components/notFound";
import { PokemonsContext } from "./common/context/PokemonsContext";

export default function App() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [searchbarOpen, setSearchbarOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("");

  const itensPerPage = 27;

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      setNotFound(false);
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      let results = await Promise.all(
        data.results.map(async (pokemon) => {
          return await getPokemonData(pokemon.url);
        })
      );
      let filteredPokemons = results;
      if (selectedType !== "") {
        filteredPokemons = results.filter((pokemon) =>
          pokemon.types.some((type) => type.type.name === selectedType)
        );
      }
      setPokemons(filteredPokemons);

      // Add setTimeout function to delay the loading state change
      setTimeout(() => {
        setLoading(false);
      }, 750);

      setTotalPages(Math.ceil(data.count / itensPerPage));
    } catch (error) {
      console.log("fetchPokemons error: ", error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, [page, selectedType]);

  const onSearchHandler = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }

    setLoading(true);
    setNotFound(false);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
    } else {
      setPokemons([result]);
      setPage(0);
      setTotalPages(1);
    }
    setLoading(false);
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
    setPage(0);
  };

  return (
    <div className="bg-gradient-to-b from-red-500 to-yellow-500 ">
      <PokemonsContext.Provider
        value={{
          pokemons,
          loading,
          totalPages,
          selectedType,
          handleTypeChange,
          searchbarOpen,
        }}
      >
        <Searchbar onSearch={onSearchHandler} searchbarOpen={searchbarOpen} />
        <section className="">
          {notFound ? (
            <NotFound />
          ) : (
            <Pokedex
              page={page}
              setPage={setPage}
              searchbarOpen={searchbarOpen}
              setSearchbarOpen={setSearchbarOpen}
            />
          )}
        </section>
      </PokemonsContext.Provider>
    </div>
  );
}
