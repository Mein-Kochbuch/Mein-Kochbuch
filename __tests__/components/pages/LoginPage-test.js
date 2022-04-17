import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Header from '../../../src/components/pages/Header';
import LoginPage from '../../../src/components/pages/LoginPage';
import LoginForm from '../../../src/components/login/LoginForm';

jest.mock('../../../src/components/pages/Header', () => {
  return props => {
    return <div {...props} />;
  };
});

jest.mock('../../../src/utils/ErrorText', () => {
  return props => {
    return <div {...props} />;
  };
});

jest.mock('../../../src/components/login/LoginForm', () => {
  return props => {
    return <div {...props} />;
  };
});

jest.mock('../../../src/components/login/RegisterButton', () => {
  return props => {
    return <div {...props} />;
  };
});

it('LoginPage Test', () => {
  const component = renderer.create(<LoginPage />);

  expect(component.toJSON()).toMatchSnapshot();
  expect(component.toJSON().children.length).toBe(3);
  const testInstance = component.root;
  expect(testInstance.findByType(Header).props.title).toBe('Login');
  expect(typeof testInstance.findByType(LoginForm).props.onSubmit).toBe(
    'function',
  );
});
