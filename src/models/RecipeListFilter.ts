export interface RecipeListFilter {
  sammlungsID?: number;
  count?: number;
  owner?: string;
  sortBy?: string;
  favorite?: boolean;
  maxDauer?: number;
  difficulty?: number;
  zutaten?: string[];
  searchWords?: string[];
}
