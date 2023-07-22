import { createContext, useState } from "react";
import { snacksTableData } from "../database/SnackData";

export const SnackContext = createContext(null);

export const SnackContextProvider = ({ children }) => {
  const [snackData, setSnackData] = useState(snacksTableData);
  const [search, setSearch] = useState("");
  const [desending, setDesending] = useState(false);

  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(7);

  const paginationSlice =
    startIndex >= 0 ? snackData.slice(startIndex, endIndex) : snackData;
  const [sortedSnacks, setSortedSnacks] = useState(paginationSlice);

  const paginationNexPage = () => {
    setStartIndex((startIndex) => startIndex + 7);
    setEndIndex((endIndex) => endIndex + 7);
    setDesending(false);
  };

  const paginationPreviousPage = () => {
    setStartIndex((startIndex) => startIndex - 7);
    setEndIndex((endIndex) => endIndex - 7);
  };

  const filterSearch =
    search.length !== 0
      ? sortedSnacks.filter(
          (item) =>
            item.product_name.toLowerCase().includes(search.toLowerCase()) ||
            item.ingredients.some((value) =>
              value.toLowerCase().includes(search.toLowerCase())
            )
        )
      : sortedSnacks;

  const sortSnacksById = () => {
    setDesending((desending) => !desending);
    setSortedSnacks((sortedSnacks) =>
      desending
        ? [...sortedSnacks].sort((a, b) => a.id - b.id)
        : [...sortedSnacks].sort((a, b) => b.id - a.id)
    );
  };

  const sortSnacksByPrice = () => {
    setDesending((desending) => !desending);
    setSortedSnacks((sortedSnacks) =>
      desending
        ? [...sortedSnacks].sort((a, b) => a.price - b.price)
        : [...sortedSnacks].sort((a, b) => b.price - a.price)
    );
  };

  const sortSnackByCalories = () => {
    setDesending((desending) => !desending);
    setSortedSnacks((sortedSnacks) =>
      desending
        ? [...sortedSnacks].sort((a, b) => a.calories - b.calories)
        : [...sortedSnacks].sort((a, b) => b.calories - a.calories)
    );
  };

  const sortSnackByProductWeight = () => {
    setDesending((desending) => !desending);
    setSortedSnacks((sortedSnacks) =>
      desending
        ? [...sortedSnacks].sort(
            (a, b) => parseInt(a.product_weight) - parseInt(b.product_weight)
          )
        : [...sortedSnacks].sort(
            (a, b) => parseInt(b.product_weight) - parseInt(a.product_weight)
          )
    );
  };
  const sortSnacksByProductName = () => {
    setDesending((desending) => !desending);
    setSortedSnacks(
      desending
        ? [...sortedSnacks].sort((a, b) =>
            a.product_name.localeCompare(b.product_name)
          )
        : [...sortedSnacks].sort((a, b) =>
            b.product_name.localeCompare(a.product_name)
          )
    );
  };

  const sortSnacksByIngredients = () => {
    setDesending((desending) => !desending);
    setSortedSnacks(
      desending
        ? [...sortedSnacks].sort((a, b) =>
            a.ingredients.join(", ").localeCompare(b.ingredients.join(", "))
          )
        : [...sortedSnacks].sort((a, b) =>
            b.ingredients.join(", ").localeCompare(a.ingredients.join(", "))
          )
    );
  };

  return (
    <SnackContext.Provider
      value={{
        paginationNexPage,
        paginationPreviousPage,
        startIndex,
        endIndex,
        setSortedSnacks,
        paginationSlice,
        setSnackData,

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
