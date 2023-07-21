import { createContext, useState } from "react";
import { snacksTableData } from "../database/SnackData";

export const SnackContext = createContext(null);

export const SnackContextProvider = ({ children }) => {
  const [snackData, setSnackData] = useState(snacksTableData);
  const [search, setSearch] = useState("");
  const [desending, setDesending] = useState(false);

  const filterSearch =
    search.length != 0
      ? snackData.filter(
          (item) =>
            item.product_name.toLowerCase().includes(search.toLowerCase()) ||
            item.ingredients.some((value) =>
              value.toLowerCase().includes(search.toLowerCase())
            )
        )
      : snackData;

  const sortSnacksById = () => {
    setDesending((desending) => !desending);
    setSnackData((snackData) =>
      desending
        ? [...snackData].sort((a, b) => a.id - b.id)
        : [...snackData].sort((a, b) => b.id - a.id)
    );
  };

  const sortSnacksByPrice = () => {
    setDesending((desending) => !desending);
    setSnackData((snackData) =>
      desending
        ? [...snackData].sort((a, b) => a.price - b.price)
        : [...snackData].sort((a, b) => b.price - a.price)
    );
  };

  const sortSnackByCalories = () => {
    setDesending((desending) => !desending);
    setSnackData((snackData) =>
      desending
        ? [...snackData].sort((a, b) => a.calories - b.calories)
        : [...snackData].sort((a, b) => b.calories - a.calories)
    );
  };

  const sortSnackByProductWeight = () => {
    setDesending((desending) => !desending);
    setSnackData((snackData) =>
      desending
        ? [...snackData].sort(
            (a, b) => parseInt(a.product_weight) - parseInt(b.product_weight)
          )
        : [...snackData].sort(
            (a, b) => parseInt(b.product_weight) - parseInt(a.product_weight)
          )
    );
  };
  const sortSnacksByProductName = () => {
    setDesending((desending) => !desending);
    setSnackData((snackData) =>
      desending
        ? [...snackData].sort((a, b) =>
            a.product_name.localeCompare(b.product_name)
          )
        : [...snackData].sort((a, b) =>
            b.product_name.localeCompare(a.product_name)
          )
    );
  };

  const sortSnacksByIngredients = () => {
    setDesending((desending) => !desending);
    setSnackData((snackData) =>
      desending
        ? [...snackData].sort((a, b) =>
            a.ingredients.join(", ").localeCompare(b.ingredients.join(", "))
          )
        : [...snackData].sort((a, b) =>
            b.ingredients.join(", ").localeCompare(a.ingredients.join(", "))
          )
    );
  };
  return (
    <SnackContext.Provider
      value={{
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
      }}
    >
      {children}
    </SnackContext.Provider>
  );
};
