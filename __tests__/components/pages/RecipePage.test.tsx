import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import RecipesPage from '../../../src/components/pages/RecipesPage';
import {RecipePreview} from '../../../src/models/RecipePreview';

describe('RecipesPage', () => {
  const recipes: RecipePreview[] = [
    {
      id: '1',
      title: 'test-title-1',
      ratingCount: 3,
      averageRating: 3.8,
      owner: {
        id: '1',
        name: 'me',
      },
      thumbnail: {
        id: '1',
        url: 'thumbnail-url-1',
      },
    },
    {
      id: '2',
      title: 'test-title-2',
      ratingCount: 16,
      averageRating: 4.1,
      owner: {
        id: '2',
        name: 'you',
      },
      thumbnail: {
        id: '2',
        url: 'thumbnail-url-2',
      },
    },
  ];

  it('Snapshot Test', () => {
    const loadNext = () => {};

    const component = renderer.create(
      <RecipesPage
        recipes={recipes}
        loadNext={loadNext}
        title={'test-title'}
      />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
