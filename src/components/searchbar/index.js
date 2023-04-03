import { useEffect, useState } from "react";
import "./search.css";

import { pokemonTypeColors } from "../pokemonsStyles/typecolors";
import typeImages from "../Pokemon/iconesTypes";
import { PokedexRef } from "../ref/pokedexref";

const Searchbar = (props) => {
  const [search, setSearch] = useState("");
  const [searching, setSearching] = useState(false);
  const exceptThisSymbols = ["."];

  const { onSearch, searchbarOpen, setSelectedType } = props;

  const onChangeHandler = (e) => {
    const result = e.target.value.toLowerCase();
    setSearch(result);
    setSearching(true);
  };

  useEffect(() => {
    if (searching) {
      const searchTimeout = setTimeout(() => {
        setSearching(false);
        onSearch(search);
      }, 500);
      return () => clearTimeout(searchTimeout);
    }
  }, [search, onSearch, searching]);

  const options = [
    { tipo: "flying" },
    { tipo: "dark" },
    { tipo: "bug" },
    { tipo: "ghost" },
    { tipo: "grass" },
    { tipo: "dragon" },
    { tipo: "poison" },
    { tipo: "fairy" },
    { tipo: "fighting" },
    { tipo: "electric" },
    { tipo: "ground" },
    { tipo: "ice" },
    { tipo: "normal" },
    { tipo: "psychic" },
    { tipo: "rock" },
    { tipo: "steel" },
    { tipo: "water" },
    { tipo: "fire" },
  ];


  return (
    <>
      {!searchbarOpen ? (
        <nav className="searchbar-container shadow-lg shadow-zinc-900 w-full ">
          <div className="searchbar-items">
        
              <div className="col items-center">
                {options.map((opt, index) => {
                  const tipodaimg = typeImages[opt.tipo];

                  return (
                    <button
                      className=" ml-6 m-1 w-25 p-2 h-10 rounded-2xl"
                      key={index}
                      style={{ backgroundColor: pokemonTypeColors[opt.tipo] }}
                      value={opt.tipo}
                      onClick={() => setSelectedType(opt.tipo)}
                    >
                      <a href={PokedexRef.url}>
                      <div className="flex items-center justify-around uppercase text-white">
                        <img
                          key={index}
                          className="h-6 w-6"
                          src={tipodaimg}
                          alt="icone tipo"
                        />
                        {window.innerWidth > 600 ? (
                          <p>{opt.tipo}</p>
                          )
                        : null
                        }
                      </div>
                      </a>
                    </button>
                  );
                })}
           <a href={PokedexRef.url}><button onClick={()=>setSelectedType("") } className=" ml-6 align-top mt-1 w-[60px] p-2 h-10 rounded-2xl bg-white">All</button>  </a>
            </div>
            <div className="flex items-center">
            <div className="searchbar">
              <input
                className="w-auto border-[1px] border-gray-400 focus:border-black"
                onKeyDown={(e) => {
                  if (e.key === " ") {
                    e.preventDefault();
                  } else if (exceptThisSymbols.includes(e.key)) {
                    e.preventDefault();
                  }
                }}
                placeholder="Buscar Pokemon por nome ou id"
                onChange={onChangeHandler}
              />
            </div>
            <div className="searchbar-btn">
            <a href={PokedexRef.url}>
              <button
                className="flex items-center text-[20px] rounded-full bg-blue-900 p-2 text-white shadow-sm shadow-black"
                onClick={() => {
                  setSearching(true);
                  onSearch(search);
                }}
              >
                Buscar
              </button>
              </a>
            </div>
            </div>
          </div>
        </nav>
      ) : null}
    </>
  );
};

export default Searchbar;
