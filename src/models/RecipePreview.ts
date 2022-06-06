import {Image} from './Image';
import {ChefUserPreview} from './ChefUserPreview';

export interface RecipePreview {
  id: string;
  title: string;
  averageRating: number;
  thumbnail?: Image;
  ratingCount: number;
  owner: ChefUserPreview;
}
