import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import RecipeDetailsPage from '../../../src/components/pages/RecipeDetailsPage';
import {render} from '@testing-library/react-native';
import {Router} from 'react-router-native';

jest.mock('../../../src/components/recipes/details/RecipeDetailsHeader', () => {
  return props => {
    return <div {...props} />;
  };
});

jest.mock(
  '../../../src/components/recipes/details/RecipeDetailsImageGallery',
  () => {
    return props => {
      return <div {...props} />;
    };
  },
);

jest.mock(
  '../../../src/components/recipes/details/RecipeDetailsActionBar',
  () => {
    return props => {
      return <div {...props} />;
    };
  },
);

jest.mock(
  '../../../src/components/recipes/details/RecipeDetailsItemComponent',
  () => {
    return props => {
      return <div {...props} />;
    };
  },
);

jest.mock('react-router-native', () => ({
  ...jest.requireActual('react-router-native'), // use actual for all non-hook parts
  useParams: () => ({
    id: '3',
  }),
}));

describe('RecipeDetailsPage Test', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('RecipeDetailsPage Snapshot Test', () => {
    const history = {
      push: jest.fn(),
      listen: jest.fn(),
      location: {pathname: '/recipes/3'},
    };

    const recipeDetails = {
      3: {
        title: 'recipe-title',
        owner: {name: 'owner-name'},
        image_set: [{image: 'url'}],
        avg_rating: 3.7,
        rating_count: 17,
        rating: 2.5,
        favorite: true,
        dauer: 25,
        difficulty: {difficulty: 'Mittel'},
        portionen: 4,
        zutaten_set: [{zutat: 'mehl'}, {zutat: 'zucker'}],
        anleitung: 'test Anleitung',
      },
    };
    const getRecipeDetailsById = jest.fn();

    const component = render(
      <Router history={history}>
        <RecipeDetailsPage
          recipeDetails={recipeDetails}
          getRecipeDetailsById={getRecipeDetailsById}
        />
      </Router>,
    );

    expect(component.toJSON()).toMatchSnapshot();
    expect(getRecipeDetailsById).toBeCalledWith(3);
  });
});
