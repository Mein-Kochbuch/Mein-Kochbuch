import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import MyRecipesPage from '../../../src/components/pages/MyRecipesPage';

import * as axios from 'axios';

jest.mock('axios');
axios.create.mockImplementation(() => axios);

it('MyRecipeTest Test', () => {
  axios.get.mockImplementation(() =>
    Promise.resolve({data: {results: [{recipe: '1'}, {recipe: '2'}]}}),
  );

  const component = renderer.create(<MyRecipesPage />);

  expect(component.toJSON()).toMatchSnapshot();
});
