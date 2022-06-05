import {useState} from 'react';
import AxiosInstance from '../utils/AxiosInstance';
import {Recipe} from '../models/Recipe';
import {FavorizeResponse, RatingResponse} from '../models/Responses';

export default function useRecipeDetails() {
  const [recipeDetails, setRecipeDetails] = useState<{[key: string]: Recipe}>(
    {},
  );
  const url = '/recipes/';

  const axios = AxiosInstance();

  const getRecipeDetailsById = (id: string) => {
    if (!(id in recipeDetails)) {
      axios
        .get<Recipe>(url + id)
        .then(response => response.data)
        .then(data => {
          setRecipeDetails(currentState => {
            return {...currentState, [data.id]: data};
          });
        })
        .catch(console.error);
    }
  };

  const favorizeRecipeById = (id: string) => {
    return axios
      .post<FavorizeResponse>('favorite/', {id: id})
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

  const rateRecipeById = (id: string, rating: number) => {
    return axios
      .post<RatingResponse>('rate/', {id: id, rating: rating})
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
