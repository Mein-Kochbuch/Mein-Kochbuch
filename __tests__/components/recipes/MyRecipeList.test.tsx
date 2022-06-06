import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import MyRecipesList, {
  MyRecipeListProps,
} from '../../../src/components/recipes/MyRecipesList';

jest.mock('../../../src/components/list/MultiListItem', () => {
  return props => {
    return <div {...props} />;
  };
});

jest.mock('../../../src/components/cookbooks/CookbookListItem', () => {
  return props => {
    return <div {...props} />;
  };
});

describe('MyRecipeList', () => {
  it('MyRecipesList Test', () => {
    const myRecipesListProps: MyRecipeListProps = {
      cookbooks: [
        {
          id: '1',
          name: 'cookbook-1',
          owner: {
            id: '1',
            name: 'me',
          },
          privacy: false,
          recipes: [],
          thumbnail: {
            id: '1',
            url: 'cookbook-thumbnail-url',
          },
        },
        {
          id: '2',
          name: 'cookbook-2',
          owner: {
            id: '2',
            name: 'you',
          },
          privacy: false,
          recipes: [],
          thumbnail: {
            id: '2',
            url: 'cookbook-thumbnail-url-2',
          },
        },
      ],
    };
    const component = renderer.create(
      <MyRecipesList {...myRecipesListProps} />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
