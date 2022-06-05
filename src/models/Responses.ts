import {RecipePreview} from './RecipePreview';
import {Cookbook} from './Cookbook';

export type RecipeListResponse = {
  count: number;
  next?: string;
  previous?: string;
  results: RecipePreview[];
};

export type FavorizeResponse = {
  result: boolean;
};

export type RatingResponse = {
  result: {
    rating: number;
  };
};

export type LoginResponse = {
  token: string;
};

export type CookbookResponse = {
  results: Cookbook[];
};
