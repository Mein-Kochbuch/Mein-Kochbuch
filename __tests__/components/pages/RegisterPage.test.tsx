import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer, {act} from 'react-test-renderer';
import RegisterPage from '../../../src/components/pages/RegisterPage';

import * as axios from 'axios';
import {fireEvent, render} from '@testing-library/react-native';
import {Router} from 'react-router-native';

// jest.mock('react-router-native', () => ({
//   ...jest.requireActual('react-router-native'), // use actual for all non-hook parts
//   useHistory: () => ({
//     push: jest.fn(),
//   }),
// }));

jest.mock('axios');
axios.create.mockImplementation(() => axios);

describe('RegisterPage Test', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Snapshot', () => {
    const component = renderer.create(<RegisterPage />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('Register click', () => {
    axios.post.mockImplementation(() => Promise.resolve({data: {}}));
    const push = jest.fn();
    const history = {
      push: push,
      listen: jest.fn(),
      location: {pathname: '/register/'},
    };

    const component = render(
      <Router history={history}>
        <RegisterPage />
      </Router>,
    );

    expect(component.toJSON()).toMatchSnapshot();

    fireEvent.changeText(
      component.getByPlaceholderText('E-Mail'),
      'test@test.com',
    );
    fireEvent.changeText(component.getByPlaceholderText('Name'), 'test-name');
    fireEvent.changeText(
      component.getAllByPlaceholderText('Password')[0],
      'Test123!',
    );
    fireEvent.changeText(
      component.getAllByPlaceholderText('Password')[1],
      'Test123!',
    );

    act(() => {
      fireEvent.press(component.getAllByText('Register')[1]);
    });

    expect(component.toJSON()).toMatchSnapshot();

    expect(axios.post).toBeCalledWith('/account/register/', {
      email: 'test@test.com',
      password: 'Test123!',
      username: 'test-name',
    });
  });
});
