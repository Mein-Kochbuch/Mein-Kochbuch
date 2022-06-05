import {Image} from './Image';
import {ChefUserPreview} from './ChefUserPreview';

export interface RecipePreview {
  id: string;
  name: string;
  averageRating: number;
  thumbnail?: Image;
  ratingCount: number;
  owner: ChefUserPreview;
}
