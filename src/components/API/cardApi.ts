import { ICard } from "../../types/card.types";

export default {
  uploadCard: async (id: string) => {
    const response = await fetch(`https://dummyjson.com/users/${id}`);
    const card: ICard = await response.json();
    return card;
  },
};
