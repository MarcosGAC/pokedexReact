import { useEffect, useState } from "react";
import "./search.css";
import Navbar from "../navbar";

const Searchbar = (props) => {
  const [search, setSearch] = useState("");
  const [searching, setSearching] = useState(false);

  const { onSearch, searchbarOpen } = props;
  const exceptThisSymbols = ["."];

  const onChangeHandler = (e) => {
    const result = e.target.value.toLowerCase();
    setSearch(result);
  
  };

  const onClickBtnHandler = () => {
    setSearching(true);
    onSearch(search);
  };

  let mostrar = "";
  if (searchbarOpen === true) {
    mostrar = "";
  } else {
    mostrar = "fixed";
  }

  const mudar = {
    width: "100%",
    zIndex: "50",
    justifyContent: "space-between",
    position: mostrar,
  };

  useEffect(() => {
    if (searching) {
      onSearch(search);
      setSearching(false);
    }
  }, [search, onSearch, searching]);


  return (
    <>
      {!searchbarOpen ? (
        <div className="searchbar-container bg-red-900  shadow-lg shadow-zinc-900" style={mudar}>
          <div className="flex items-center">
            <div className="searchbar">
              <input
                className="w-[300px]"
                onKeyDown={(e) => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                placeholder="Buscar Pokemon por nome ou id"
                onChange={onChangeHandler}
                onKeyUp={onClickBtnHandler}
              />
            </div>
            <div className="searchbar-btn">
              <button className="flex items-center text-[20px]" onClick={onClickBtnHandler}>
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
