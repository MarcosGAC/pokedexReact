import { useEffect, useState } from "react";
import "./search.css";
import Navbar from "../navbar";

const Searchbar = (props) => {
  const [search, setSearch] = useState("");
  const [searching, setSearching] = useState(false);
  const exceptThisSymbols = ["."];

  const { onSearch, searchbarOpen } = props;

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

  return (
    <>
      {!searchbarOpen ? (
        <div className="searchbar-container bg-red-900 fixed shadow-lg shadow-zinc-900 w-full justify-evenly">
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
                className="flex items-center text-[20px]"
                onClick={() => {
                  setSearching(true);
                  onSearch(search);
                }}
              >
                Buscar
              </button>
            </div>
          </div>
          <Navbar />
        </div>
      ) : null}
    </>
  );
};

export default Searchbar;
