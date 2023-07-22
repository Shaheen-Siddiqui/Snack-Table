import { useContext } from "react";
import { SnackContext } from "../context/SnackContext";

export const PaginationButtons = () => {
  const {
    paginationNexPage,
    paginationPreviousPage,
    startIndex,
    endIndex,
    snackData,
  } = useContext(SnackContext);


  return (
    <div className="pagination-btn-case">
      <button
        type="button"
        className="btn btn-outline-secondary"
        disabled={startIndex <= 0 ? true : false}
        onClick={paginationPreviousPage}
      >
        ⏮ Previous
      </button>

      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={paginationNexPage}
        disabled={endIndex == snackData.length + 1 ? true : false}
      >
        Next ⏭️
      </button>
    </div>
  );
};
