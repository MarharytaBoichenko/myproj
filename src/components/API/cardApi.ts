import { ICard } from "../../types/card.types";

export default {
  uploadCard: async (id: string) => {
    const baseUrl = "https://dummyjson.com/users/";
    const response = await fetch(`${baseUrl}${id}`);
    const card: ICard = await response.json();
    return card;
  },
};
