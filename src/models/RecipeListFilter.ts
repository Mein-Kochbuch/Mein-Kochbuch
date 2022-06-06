import {Difficulty} from './Recipe';

export interface RecipeListFilter {
  cookbookId?: string;
  count?: number;
  ownerId?: string;
  sortBy?: string;
  favorite?: boolean;
  maxDuration?: number;
  difficulty?: Difficulty;
  ingredients?: string[];
  search?: string[];
}
