import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {fireEvent, render} from '@testing-library/react-native';
import {Router} from 'react-router-native';

import RegisterButton from '../../../src/components/login/RegisterButton';

describe('RegisterButton Test', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('RegisterButton Button Press', () => {
    const history = {
      push: jest.fn(),
      listen: jest.fn(),
      location: {pathname: '/'},
    };

    const {getByText} = render(
      <Router history={history}>
        <RegisterButton />
      </Router>,
    );

    fireEvent(getByText('Register'), 'onPress');
    expect(history.push).toBeCalledWith('/register');
  });

  it('RegisterButton lightmode Test', () => {
    const component = renderer.create(<RegisterButton />).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('RegisterButton lightmode Test', () => {
    const component = renderer.create(<RegisterButton />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
