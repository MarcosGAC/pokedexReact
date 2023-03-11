import { useState } from "react";
import "./search.css";
import Navbar from "../navbar";

const Searchbar = (props) => {
  const [search, setSearch] = useState();
  const { onSearch } = props;
  const exceptThisSymbols = ["."];

  const onChangeHandler = (e) => {
    const result = e.target.value.toLowerCase();
    setSearch(result);
    if (e.target.value.length === 0) {
      onSearch(undefined);
    }
  };

  const onClickBtnHandler = () => {
    onSearch(search);
  };

  return (
    <div className="searchbar-container fixed  bg-red-500  w-full z-50 justify-between">
      <div className="flex items-center">
        <div className="searchbar ">
          <input
            onKeyDown={(e) =>
              exceptThisSymbols.includes(e.key) && e.preventDefault()
            }
            placeholder="Buscar Pokemon"
            onChange={onChangeHandler}
          />
      </div>
      <div className="searchbar-btn">
        <button
          className=" flex items-center text-[20px] "
          onClick={onClickBtnHandler}
          >
          Buscar
        </button>
          </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Searchbar;
