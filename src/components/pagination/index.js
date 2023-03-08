import React from "react";
import "./pagination.css";

const Pagination = (props) => {
  const { page, totalPages, onLeftClick, onRightClick } = props;
  return (
    <div className="pagination-container">
      <div className="btnsize">
        <button onClick={onLeftClick}>◀</button>
        <div>
          {page} de {totalPages}
        </div>
        <button onClick={onRightClick}>▶</button>
      </div>
    </div>
  );
};

export default Pagination;
