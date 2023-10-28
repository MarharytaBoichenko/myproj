import type { ICard } from "./card.types";
import { SearchState } from "./search.types";

export interface MainState {
  search: SearchState | "";
  cards: ICard[] | [];
  loading: boolean;
}
