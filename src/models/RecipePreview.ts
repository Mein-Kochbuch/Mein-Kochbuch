import {Image} from './Image';
import {ChefUser} from './ChefUser';

export interface RecipePreview {
  id: string;
  title: string;
  averageRating: number;
  thumbnail?: Image;
  ratingCount: number;
  owner: ChefUser;
}
