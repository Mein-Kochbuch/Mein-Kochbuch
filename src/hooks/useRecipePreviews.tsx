import {useEffect, useState} from 'react';
import {applyFilter} from '../utils/urlService';
import AxiosInstance from '../utils/AxiosInstance';
import {RecipeListFilter} from '../models/RecipeListFilter';
import {RecipeListResponse} from '../models/Responses';
import {RecipePreview} from '../models/RecipePreview';

export default function useRecipePreviews() {
  const [recipePreviews, setRecipePreviews] = useState<RecipePreview[]>([]);
  const [filter, setFilter] = useState<RecipeListFilter>({});
  const [nextUrl, setNextUrl] = useState<string | undefined>();

  const axios = AxiosInstance();

  useEffect(() => {
    axios
      .get<RecipeListResponse>(applyFilter(filter))
      .then(response => response.data)
      .then(data => {
        setNextUrl(data.next);
        setRecipePreviews(existingRecipes =>
          existingRecipes.concat(
            data.results.filter(
              newRecipe => !existingRecipes.some(i => i.pk === newRecipe.pk),
            ),
          ),
        );
      })
      .catch(console.error);
  }, [filter]);

  const loadNext = () => {
    if (nextUrl) {
      axios
        .get<RecipeListResponse>(nextUrl)
        .then(response => response.data)
        .then(data => {
          setNextUrl(data.next);
          setRecipePreviews(existingRecipes =>
            existingRecipes.concat(
              data.results.filter(
                newRecipe => !existingRecipes.some(i => i.pk === newRecipe.pk),
              ),
            ),
          );
        })
        .catch(console.error);
    }
  };
  return {recipePreviews, setFilter, loadNext};
}
