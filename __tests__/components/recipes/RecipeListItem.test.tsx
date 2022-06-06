import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import RecipeListItem, {
  RecipeListItemProps,
} from '../../../src/components/recipes/RecipeListItem';
import {fireEvent, render} from '@testing-library/react-native';
import {Router} from 'react-router-native';

describe('RecipeListItem', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Snapshot Test light', () => {
    const item: RecipeListItemProps = {
      listItem: {
        item: {
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
        index: 1,
      },
    };

    const component = renderer.create(<RecipeListItem {...item} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('Test click', () => {
    const history = {
      push: jest.fn(),
      listen: jest.fn(),
      location: {pathname: '/'},
    };

    const item: RecipeListItemProps = {
      listItem: {
        item: {
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
        index: 1,
      },
    };

    const {getByText} = render(
      <Router history={history}>
        <RecipeListItem {...item} />
      </Router>,
    );

    fireEvent(getByText('test-title-1'), 'onPress');
    expect(history.push).toBeCalledWith('/recipes/1');
  });
});
