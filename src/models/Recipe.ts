import {Image} from './Image';
import {ChefUser} from './ChefUser';

export interface Recipe {
  id: string;
  title: string;
  owner: ChefUser;
  privacy: boolean;
  instruction: string;
  duration: number;
  difficulty: Difficulty;
  portions: number;
  thumbnail: Image;
  images: Image[];
  ingredients: Ingredient[];
  averageRating: number;
  ratingCount: number;
}

export type Ingredient = {
  id: string;
  amount: number;
  text: string;
};

export enum Difficulty {
  VERY_EASY = 0,
  EASY = 1,
  MEDIUM = 2,
  HARD = 3,
  EXPERT = 4,
}
