import {useEffect, useState} from 'react';
import {applyFilter} from '../utils/urlService';
import {RecipeListFilter} from '../models/RecipeListFilter';
import {RecipeListResponse} from '../models/Responses';
import {RecipePreview} from '../models/RecipePreview';
import {AxiosInstance} from 'axios';
import useAxios from '../utils/useAxios';

export default function useRecipePreviews() {
  const [recipePreviews, setRecipePreviews] = useState<RecipePreview[]>([]);
  const [filter, setFilter] = useState<RecipeListFilter>({});
  const [nextUrl, setNextUrl] = useState<string | undefined>();

  const axios: AxiosInstance = useAxios();

  useEffect(() => {
    axios
      .get<RecipeListResponse>(applyFilter(filter))
      .then(response => response.data)
      .then(addRecipes)
      .catch(console.error);
    //eslint-disable-next-line
  }, [filter]);

  const loadNext = () => {
    if (nextUrl) {
      axios
        .get<RecipeListResponse>(nextUrl)
        .then(response => response.data)
        .then(addRecipes)
        .catch(console.error);
    }
  };

  const addRecipes = (data: RecipeListResponse) => {
    setNextUrl(data.next);
    setRecipePreviews(existingRecipes =>
      existingRecipes.concat(
        data.results.filter(
          (newRecipe: any) => !existingRecipes.some(i => i.id === newRecipe.id),
        ),
      ),
    );
  };
  return {recipePreviews, setFilter, loadNext};
}
