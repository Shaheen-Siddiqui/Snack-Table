import { useContext } from "react";
import { Snacks } from "../component/Snacks";
import { SnackContext } from "../context/SnackContext";

export const SnackListing = () => {
  const {
    snackData,
    search,
    setSearch,
    filterSearch,
    sortSnacksById,
    sortSnacksByPrice,
    sortSnackByCalories,
    sortSnackByProductWeight,
    sortSnacksByProductName,
    sortSnacksByIngredients,
  } = useContext(SnackContext);

  return (
    <div className="snacks-case">
      <div class="input-group mb-3 mt-3 outline-dark">
        <input
          value={search}
          type="text"
          class="form-control"
          placeholder="product name and ingredients"
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <table class="table table-light table-striped-columns mt-4">
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
          return <Snacks item={item} />;
        })}
      </table>
    </div>
  );
};
