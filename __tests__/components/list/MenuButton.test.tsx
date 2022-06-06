import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import MenuButton from '../../../src/components/mainmenu/MenuButton';
import {fireEvent, render} from '@testing-library/react-native';
import {Router} from 'react-router-native';

describe('MenuButton Test', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('MenuButton Button Press', () => {
    const history = {
      push: jest.fn(),
      listen: jest.fn(),
      location: {pathname: '/'},
    };

    const {getByText} = render(
      <Router history={history}>
        <MenuButton text={'Test-title'} path={'test'} />
      </Router>,
    );

    fireEvent(getByText('Test-title'), 'onPress');
    expect(history.push).toBeCalledWith('/test');
  });

  it('MenuButton lightmode Test', () => {
    const component = renderer
      .create(<MenuButton text={'Test-text'} />)
      .toJSON();

    expect(component).toMatchSnapshot();
    expect(component.children.length).toBe(1);
    expect(component.children[0].children[0]).toBe('Test-text');
  });
});
