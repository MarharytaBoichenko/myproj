import { ICard } from "../../types/card.types";

type SearchParams = Record<string, string>;

export default {
  uploadCards: async (
    page = "1",
    search = "",
    limit = "30",
  ): Promise<[ICard[], number]> => {
    const params: SearchParams = {};

    params.q = search;
    if (limit) params.limit = limit;
    if (page) params.skip = ((+page - 1) * +limit).toString();

    const searchParams = new URLSearchParams(params);

    const response = await fetch(
      `https://dummyjson.com/users/search?${searchParams.toString()}`,
    );
    const data = await response.json();

    if (data.error) return [[], 0];

    const cards: ICard[] = data.users;
    const totalPages: number = data.total / data.limit;

    return [cards, totalPages];
  },
};
