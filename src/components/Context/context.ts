import { createContext } from "react";

const search = localStorage.getItem("search") || "";

type ISearchContext = [string, React.Dispatch<React.SetStateAction<string>>];
export const SearchContext = createContext<ISearchContext>([
  search,
  () => null,
]);
export const CardsContext = createContext(null);
