import {Image} from './Image';
import {Recipe} from './Recipe';
import {ChefUser} from './ChefUser';

export interface Cookbook {
  id: string;
  name: string;
  owner: ChefUser;
  privacy: boolean;
  recipes: Recipe[];
  thumbnail?: Image;
}
