import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import MyRecipesPage from '../../../src/components/pages/MyRecipesPage';

it('MyRecipeTest Test', () => {
  const component = renderer.create(<MyRecipesPage />);

  expect(component.toJSON()).toMatchSnapshot();
});
