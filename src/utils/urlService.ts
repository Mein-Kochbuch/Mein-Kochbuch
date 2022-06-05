import {RecipeListFilter} from '../models/RecipeListFilter';

const applyFilter = (filter: RecipeListFilter) => {
  let url = '/recipes/';

  if ('cookbookId' in filter) {
    console.log('HIER');
    url = '/cookbooks/' + filter.cookbookId;
  }

  if (filter.count) {
    url = addParameter(url, 'page=' + (filter.count / 10 + 1));
  }

  if (filter.ownerId) {
    url = addParameter(url, 'user=' + filter.ownerId);
  }

  if (filter.sortBy) {
    url = addParameter(url, 'sort=' + filter.sortBy);
  }
  if (filter.favorite) {
    url = addParameter(url, 'favorite=True');
  }
  if (filter.maxDuration) {
    url = addParameter(url, 'duration=' + filter.maxDuration);
  }
  if (filter.difficulty) {
    url = addParameter(url, 'difficulty=' + filter.difficulty);
  }
  if (filter.ingredients) {
    let ingredients = filter.ingredients[0];

    for (let i = 1; i < filter.ingredients.length; i++) {
      ingredients = ingredients.concat('+').concat(filter.ingredients[i]);
    }
    url = addParameter(url, 'ingredients=' + ingredients);
  }

  if (filter.search) {
    let search = filter.search[0];
    for (let i = 1; i < filter.search.length; i++) {
      search = search.concat('+').concat(filter.search[i]);
    }
    url = addParameter(url, 'search=' + search);
  }
  return url;
};

const addParameter = (url: string, parameter: string) => {
  return url.charAt(url.length - 1) === '/'
    ? url + '?' + parameter
    : url + '&' + parameter;
};

export {applyFilter};
