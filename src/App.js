import React, { useEffect, useState } from "react";
import { getPokemonData } from "./components/api/GetPokemonData";
import { getPokemons } from "./components/api/GetPokemons";
import { searchPokemon } from "./components/api/Searchpokemon";
import "./App.css";
import Pokedex from "./components/pokedex";
import Searchbar from "./components/searchbar";
import NotFound from "./components/notFound";
import { PokemonsContext } from "./common/context/PokemonsContext";
import { getPokemonsByType } from "./components/api/GetPokemonByType";
import Footer from "./components/footer";
import Header from "./components/header";

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
  
      if (selectedType !== "") {
        const filteredPokemons = await getPokemonsByType(selectedType);
        const startIndex = page * itensPerPage;
        const endIndex = startIndex + itensPerPage;
        setPokemons(filteredPokemons.slice(startIndex, endIndex));
        setTotalPages(Math.ceil(filteredPokemons.length / itensPerPage));
      } else {
        const startIndex = page * itensPerPage;
        const endIndex = startIndex + itensPerPage;
        const data = await getPokemons(endIndex, startIndex);
        let results = await Promise.all(
          data.results.map(async (pokemon) => {
            return await getPokemonData(pokemon.url);
          })
        );
        setPokemons(results);
        setTotalPages(Math.ceil(data.count / itensPerPage));
      }
  
      setTimeout(() => {
        setLoading(false);
      }, 750);
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
    <div className="bg-slate-200">
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
        <Header />
        {/* {<Searchbar onSearch={onSearchHandler} searchbarOpen={searchbarOpen} />} */}
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
      <Footer />
    </div>
  );
}
