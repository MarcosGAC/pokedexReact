import React from "react";
import "./pagination.css";
import { PokedexRef } from "../ref/pokedexref";

const Pagination = ({page, totalPages, onLeftClick, onRightClick, loading}) => {


  return (
    <div className="pagination-container ">
      <div className="btnsize">
      <a href={PokedexRef.url}>
        <button
          onClick={onLeftClick}
          disabled={loading} // adicionando a propriedade disabled
        >
          ◀
        </button>
        </a>
        <div className="paginationtext">
          {page} de {totalPages}
        </div>
        <a href={PokedexRef.url}>
        <button
          onClick={onRightClick}
          disabled={loading | page === totalPages} // adicionando a propriedade disabled
        >
          ▶
        </button>
        </a>
      </div>
    </div>
  );
};

export default Pagination;
