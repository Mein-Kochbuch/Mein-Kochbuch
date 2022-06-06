import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import LoginPage from '../../../src/components/pages/LoginPage';

describe('LoginPage', () => {
  it('Snapshot', () => {
    const component = renderer.create(<LoginPage />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
