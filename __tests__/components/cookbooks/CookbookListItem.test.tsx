import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import CookbookListItem from '../../../src/components/cookbooks/CookbookListItem';
import {Cookbook} from '../../../src/models/Cookbook';
import {Difficulty} from '../../../src/models/Recipe';

describe('CookbookListItem', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Snapshot Test', () => {
    const cookbook: Cookbook = {
      id: '1',
      owner: {
        id: '1',
        name: 'me',
      },
      privacy: false,
      recipes: [],
      name: 'test-title',
    };

    const component = renderer.create(<CookbookListItem cookbook={cookbook} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('Snapshot with Thumbnail+Recipe', () => {
    const cookbook: Cookbook = {
      id: '1',
      owner: {
        id: '1',
        name: 'me',
      },
      privacy: false,
      recipes: [
        {
          title: 'recipe-1',
          id: '1',
          averageRating: 3.5,
          images: [],
          instruction: 'instructions-1',
          difficulty: Difficulty.EXPERT,
          portions: 4,
          privacy: false,
          duration: 15,
          ratingCount: 13,
          thumbnail: {
            id: '1',
            url: 'thumnail-url-1',
          },
          ingredients: [
            {
              id: '1',
              amount: 500,
              text: 'ingredient-1',
            },
          ],
          owner: {name: 'me', id: '1'},
        },
      ],
      name: 'test-title',
      thumbnail: {
        id: '1',
        url: 'test-uri',
      },
    };

    const component = renderer.create(<CookbookListItem cookbook={cookbook} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
