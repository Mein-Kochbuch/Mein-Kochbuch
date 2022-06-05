import 'react-native';
import React from 'react';
import AuthProvider from '../../src/context/AuthProvider';
import renderer from 'react-test-renderer';

describe('AuthProvider', () => {
  test('Snapshot', () => {
    const component = renderer.create(
      <AuthProvider>
        <div>Test children</div>
      </AuthProvider>,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
