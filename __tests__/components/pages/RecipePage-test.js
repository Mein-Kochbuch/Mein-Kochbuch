import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import RecipesPage from '../../../src/components/pages/RecipesPage';

const recipes = [
  {id: '1', title: 'test-title-1'},
  {id: '2', title: 'test-title-2'},
];

it('RecipeTest Test', () => {
  const loadNext = () => {};

  const component = renderer.create(
    <RecipesPage recipes={recipes} loadNext={loadNext} title={'test-title'} />,
  );

  expect(component.toJSON()).toMatchSnapshot();
  expect(component.toJSON().children.length).toBe(2);
});
