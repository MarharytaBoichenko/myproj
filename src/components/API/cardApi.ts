import { ICard } from "../../types/card.types";

type SearchParams = Record<string, string>;

export default {
  uploadCards: async (
    page = "1",
    search = "",
    limit = "30",
  ): Promise<[ICard[], number]> => {
    const params: SearchParams = {};

    if (limit) params.limit = limit;
    if (page) params.skip = ((+page - 1) * +limit).toString();
    params.q = search;

    const searchParams = new URLSearchParams(params);
    console.log(
      `https://dummyjson.com/users/search?${searchParams.toString()}`,
    );

    const response = await fetch(
      `https://dummyjson.com/users/search?${searchParams.toString()}`,
    );
    const data = await response.json();

    if (data.error) return [[], 0];

    const cards: ICard[] = data.users;
    const totalPages: number = data.total / data.limit;

    return [cards, totalPages];
  },

  uploadCard: async (id: string) => {
    const response = await fetch(`https://dummyjson.com/users/${id}`);
    const card: ICard = await response.json();
    return card;
  },
};
