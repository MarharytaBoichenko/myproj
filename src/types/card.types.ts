export interface CardsProps {
  cards: ICard[] | [] | null;
}

export interface CardProps {
  info: ICard | null;
  details: boolean;
}

export interface ICard {
  id: number;
  firstName: string;
  lastName: string;
  age: string;
  birthDate: string;
  height: string;
  weight: string;
  gender: string;
  image: string;
  username?: string;
  email?: string;
  phone?: string;
  bloodGroup?: string;
  eyeColor?: string;
}
