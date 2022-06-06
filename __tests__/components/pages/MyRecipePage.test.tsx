import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import MyRecipesPage from '../../../src/components/pages/MyRecipesPage';
import {Cookbook} from '../../../src/models/Cookbook';
import {Difficulty} from '../../../src/models/Recipe';

describe('MyRecipesPage', () => {
  it('Snapshot Test', () => {
    const cookbooks: Cookbook[] = [
      {
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
        id: '1',
        name: 'cookbook-name-1',
        privacy: false,
        owner: {
          name: 'me',
          id: '1',
        },
        thumbnail: {
          id: '1',
          url: 'thumbnail-url-1',
        },
      },
      {
        recipes: [
          {
            title: 'recipe-2',
            id: '2',
            averageRating: 3.0,
            images: [],
            instruction: 'instructions-2',
            difficulty: Difficulty.EASY,
            portions: 2,
            privacy: true,
            duration: 20,
            ratingCount: 1,
            thumbnail: {
              id: '2',
              url: 'thumnail-url-2',
            },
            ingredients: [
              {
                id: '2',
                amount: 500,
                text: 'ingredient-2',
              },
            ],
            owner: {name: 'you', id: '2'},
          },
        ],
        id: '2',
        name: 'cookbook-name-2',
        privacy: false,
        owner: {
          name: 'you',
          id: '2',
        },
        thumbnail: {
          id: '2',
          url: 'thumbnail-url-2',
        },
      },
    ];

    const component = renderer.create(<MyRecipesPage cookbooks={cookbooks} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
