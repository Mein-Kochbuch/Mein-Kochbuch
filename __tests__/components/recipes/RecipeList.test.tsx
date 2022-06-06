import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import RecipeList, {
  RecipeListProps,
} from '../../../src/components/recipes/RecipeList';

jest.mock('../../../src/components/recipes/RecipeListItem', () => {
  return props => {
    return <div {...props} />;
  };
});

describe('RecipeList', () => {
  it('Snapshot Test', () => {
    const recipeListProps: RecipeListProps = {
      recipes: [
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
          ratingCount: 8,
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
      ],
      loadMoreRecipes: jest.fn(),
    };

    const component = renderer.create(<RecipeList {...recipeListProps} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
