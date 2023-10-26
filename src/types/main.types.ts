import type { ICard } from "./card.types";

export interface MainState {
  cards: ICard[] | null;
}
