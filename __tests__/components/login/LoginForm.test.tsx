import React from 'react';
import renderer, {act} from 'react-test-renderer';
import LoginForm from '../../../src/components/login/LoginForm';

import {fireEvent, render} from '@testing-library/react-native';
import {Linking} from 'react-native';

jest.mock('../../../src/components/recipes/RecipeListItem', () => {
  return props => {
    return <div {...props} />;
  };
});

jest.mock('react-native/Libraries/Linking/Linking', () => ({
  openURL: jest.fn(() => Promise.resolve('mockResolve')),
}));

describe('LoginForm Test', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('LoginForm Snapshot light', () => {
    const onSubmit = jest.fn();

    const component = renderer.create(<LoginForm onSubmit={onSubmit} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('LoginForm Login Button press', async () => {
    const onSubmit = jest.fn(() => Promise.resolve());

    const component = render(<LoginForm onSubmit={onSubmit} />);

    fireEvent(component.getByText('E-Mail'), 'onChangeText', 'testMail');
    fireEvent(component.getByText('Password'), 'onChangeText', 'testPassword');

    await act(async () => {
      fireEvent(component.getByText('Login'), 'onPress');
    });

    expect(onSubmit).toBeCalledWith({
      username: 'testMail',
      password: 'testPassword',
    });
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('LoginForm Privacy Link press', () => {
    const {getByText} = render(<LoginForm />);

    fireEvent(getByText(' Privacy Policy '), 'onPress');
    expect(Linking.openURL).toBeCalledWith(
      'https://mein-kochbuch.org/privacypolicy/',
    );
  });

  it('LoginForm AGB Link press', () => {
    const {getByText, ...component} = render(<LoginForm />);

    fireEvent(getByText(' AGBs '), 'onPress');
    expect(Linking.openURL).toBeCalledWith('https://mein-kochbuch.org/agb/');
  });
});
