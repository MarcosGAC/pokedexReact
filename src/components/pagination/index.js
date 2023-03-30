import React from "react";
import "./pagination.css";

const Pagination = ({page, totalPages, onLeftClick, onRightClick, loading}) => {


  return (
    <div className="pagination-container ">
      <div className="btnsize">
        <button
          onClick={onLeftClick}
          disabled={loading} // adicionando a propriedade disabled
        >
          ◀
        </button>
        <div className="paginationtext">
          {page} de {totalPages}
        </div>
        <button
          onClick={onRightClick}
          disabled={loading | page === totalPages} // adicionando a propriedade disabled
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default Pagination;
