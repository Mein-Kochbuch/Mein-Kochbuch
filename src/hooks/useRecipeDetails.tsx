import {useState} from 'react';
import AxiosInstance from '../utils/AxiosInstance';
import {Recipe} from '../models/Recipe';
import {FavorizeResponse, RatingResponse} from '../models/Responses';

export default function useRecipeDetails() {
  const [recipeDetails, setRecipeDetails] = useState<{[key: string]: Recipe}>(
    {},
  );
  const url = 'rezepte/';

  const axios = AxiosInstance();

  const getRecipeDetailsById = (id: number) => {
    if (!(id in recipeDetails)) {
      axios
        .get<Recipe>(url + id)
        .then(response => response.data)
        .then(data => {
          setRecipeDetails(currentState => {
            return {...currentState, [data.pk]: data};
          });
        })
        .catch(console.error);
    }
  };

  const favorizeRecipeById = (id: number) => {
    return axios
      .post<FavorizeResponse>('favorite/', {pk: id})
      .then(response => response.data)
      .then(data => {
        setRecipeDetails(currentState => {
          return {
            ...currentState,
            [id]: {...currentState[id], favorite: data.result},
          };
        });
        return data;
      })
      .catch(console.error);
  };

  const rateRecipeById = (id: number, rating: number) => {
    return axios
      .post<RatingResponse>('rate/', {pk: id, rating: rating})
      .then(response => response.data)
      .then(data => {
        setRecipeDetails(currentState => {
          return {
            ...currentState,
            [id]: {...currentState[id], rating: data.result.rating},
          };
        });
        return data;
      })
      .catch(console.error);
  };

  return {
    recipeDetails,
    getRecipeDetailsById,
    favorizeRecipeById,
    rateRecipeById,
  };
}
