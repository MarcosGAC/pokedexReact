import React, { useEffect, useState } from "react";
import { getPokemonData, getPokemons, searchPokemon } from "./api";
import "./App.css";
import Pokedex from "./components/pokedex";
import Searchbar from "./components/searchbar";
import notfound from "./assets/notfound.jpg";

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
      setLoading(false);
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
      <section className="">
        <Searchbar onSearch={onSearchHandler} searchbarOpen={searchbarOpen} />

        {notFound ? (
          <div className="w-full h-full">
            <div className="text-[25px] flex justify-center">
              Não foi possivel encontrar o pokemon
            </div>
            <div className="w-full h-full">
              <img
                className="w-full h-full  opacity-60"
                src={notfound}
                alt="notfound"
              />
            </div>
          </div>
        ) : (
          <Pokedex
            pokemons={pokemons}
            loading={loading}
            page={page}
            totalPages={totalPages}
            setPage={setPage}
            searchbarOpen={searchbarOpen}
            setSearchbarOpen={setSearchbarOpen}
            selectedType={selectedType}
            handleTypeChange={handleTypeChange}
          />
        )}
      </section>
    </div>
  );
}
