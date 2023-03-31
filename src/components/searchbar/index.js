import { useEffect, useState } from "react";
import "./search.css";

import { pokemonTypeColors } from "../pokemonsStyles/typecolors";
import typeImages from "../Pokemon/iconesTypes";

const Searchbar = (props) => {
  const [search, setSearch] = useState("");
  const [searching, setSearching] = useState(false);
  const exceptThisSymbols = ["."];

  const { onSearch, searchbarOpen,setSelectedType } = props;

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
        <nav className="searchbar-container shadow-lg shadow-zinc-900 w-full justify-evenly">
          <div className="searchbar-items flex items-center">
            <div className="searchbar">
              <input
                className="w-auto"
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
              <button
                className="flex items-center text-[20px] "
                onClick={() => {
                  setSearching(true);
                  onSearch(search);
                }}
              >
                Buscar
              </button>
            </div>
            <div className="">
            {options.map((opt,index) => {
              const tipodaimg = typeImages[opt.tipo]
             
                    return (
                      <button
                      className="m-1 w-20 h-10 rounded-2xl"
                      key={index}
                        style={{ backgroundColor: pokemonTypeColors[opt.tipo] }}
                        value={opt.tipo}
                        onClick={()=>setSelectedType(opt.tipo)}
                      >
                         <div className="flex items-center justify-around">
                    <img key={index} className="h-6 w-6" src={tipodaimg} alt="icone tipo"/>
                    {opt.tipo}
                    </div>
                      </button>
                    );
                  })}
            </div>      
          </div>
        </nav>
      ) : null}
    </>
  );
};

export default Searchbar;
