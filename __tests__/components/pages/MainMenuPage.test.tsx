import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import MainMenuPage from '../../../src/components/pages/MainMenuPage';

it('MainMenuPage Test', () => {
  const component = renderer.create(<MainMenuPage />);

  expect(component.toJSON()).toMatchSnapshot();
});
