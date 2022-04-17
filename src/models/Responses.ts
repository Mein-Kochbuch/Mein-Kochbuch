import {RecipePreview} from './RecipePreview';
import {Cookbook} from './Cookbook';

export interface RecipeListResponse {
  count: number;
  next?: string;
  previous?: string;
  results: RecipePreview[];
}

export interface FavorizeResponse {
  result: boolean;
}

export interface RatingResponse {
  result: {
    rating: number;
  };
}

export interface LoginResponse {
  token: string;
}

export interface CookbookResponse {
  results: Cookbook[];
}
