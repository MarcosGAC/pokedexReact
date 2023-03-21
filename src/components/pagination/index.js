import React from "react";
import "./pagination.css";

const Pagination = (props) => {
  const { page, totalPages, onLeftClick, onRightClick, loading } = props;

  return (
    <div className="pagination-container pb-10">
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
          disabled={loading} // adicionando a propriedade disabled
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default Pagination;
