export interface Recipe {
  pk: number;
  title: string;
  owner: {
    pk: number;
    username: string;
  };
  privacy: boolean;
  anleitung: string;
  dauer: number;
  difficulty: {
    pk: number;
    difficulty: string;
  };
  portionen: number;
  similiars: [];
  thumbnail: string;
  image_set: {image: string}[];
  zutaten_set: {zutat: string}[];
  avg_rating: number;
  rating_count: number;
  rating?: number;
  favorite: boolean;
}
