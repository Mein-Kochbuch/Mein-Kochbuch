import {Image} from './Image';
import {Recipe} from './Recipe';
import {ChefUserPreview} from './ChefUserPreview';

export interface Cookbook {
  id: string;
  name: string;
  owner: ChefUserPreview;
  privacy: boolean;
  recipes: Recipe[];
  thumbnail?: Image;
}
