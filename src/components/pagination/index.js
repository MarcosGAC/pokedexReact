import React, { useState, useEffect } from "react";
import "./pagination.css";

const Pagination = (props) => {
  const { page, totalPages, onLeftClick, onRightClick } = props;
  const [debouncedClick, setDebouncedClick] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if (debouncedClick) {
      debouncedClick();
    }
  }, [debouncedClick]);

  function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func.apply(null, args);
        timeoutId = null;
      }, delay);
    };
  }

  function handleClick(callback) {
    if (!isButtonDisabled) {
      setIsButtonDisabled(true);
      const debouncedCallback = debounce(callback, 200);
      setDebouncedClick(() => debouncedCallback);

      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 500);
    }
  }

  return (
    <div className="pagination-container pb-10">
      <div className="btnsize">
        <button onClick={() => handleClick(onLeftClick)} disabled={isButtonDisabled}>
          ◀
        </button>
        <div className="paginationtext">
          {page} de {totalPages}
        </div>
        <button onClick={() => handleClick(onRightClick)} disabled={isButtonDisabled}>
          ▶
        </button>
      </div>
    </div>
  );
};

export default Pagination;
