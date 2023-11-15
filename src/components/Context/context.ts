import { createContext } from "react";
import { ICard } from "../../types/card.types";

const search = localStorage.getItem("search") || "";
console.log("first");

type ISearchContext = [string, React.Dispatch<React.SetStateAction<string>>];
export const SearchContext = createContext<ISearchContext>([
  search,
  () => null,
]);
export const CardsContext = createContext<ICard[] | null>(null);
