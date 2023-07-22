import { useContext, useEffect, useState } from "react";
import { Snacks } from "../component/Snacks";
import { SnackContext } from "../context/SnackContext";
import { PaginationButtons } from "../component/Pagination";

export const SnackListing = () => {
  const {
    search,
    setSearch,
    filterSearch,
    sortSnacksById,
    sortSnacksByPrice,
    sortSnackByCalories,
    sortSnackByProductWeight,
    sortSnacksByProductName,
    sortSnacksByIngredients,
    setSortedSnacks,
    paginationSlice,
    startIndex,
  } = useContext(SnackContext);

  useEffect(() => {
    setSortedSnacks(paginationSlice);
  }, [startIndex]);

  return (
    <>
      <div className="snacks-case">
        <div className="input-group mb-3 mt-3 outline-dark">
          <input
            value={search}
            type="text"
            className="form-control"
            placeholder="product name and ingredients"
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <table className="table table-light table-striped-columns mt-4">
          <thead className="table-header">
            <tr>
              <th scope="col" onClick={sortSnacksById}>
                ID
              </th>
              <th scope="col" onClick={sortSnacksByProductName}>
                PRODUCT NAME
              </th>
              <th scope="col" onClick={sortSnackByProductWeight}>
                PRODUCT WEIGHT
              </th>
              <th scope="col" onClick={sortSnacksByPrice}>
                PRICE
              </th>
              <th scope="col" onClick={sortSnackByCalories}>
                CALORIES
              </th>
              <th scope="col" onClick={sortSnacksByIngredients}>
                INGREDIENTS
              </th>
            </tr>
          </thead>

          {filterSearch.map((item) => {
            return <Snacks key={item.id} item={item} />;
          })}
        </table>
      </div>
      <PaginationButtons />
    </>
  );
};
