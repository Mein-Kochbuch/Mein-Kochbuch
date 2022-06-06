import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import InputField from '../../../src/components/login/InputField';

describe('InputField Test', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Snapshot light Test', () => {
    const onChangeText = jest.fn();

    const component = renderer.create(
      <InputField
        onChangeText={onChangeText}
        placeholder={'test-palceholder'}
        title={'test-title'}
        value={''}
      />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('Snapshot with value', () => {
    const onChangeText = jest.fn();

    const component = renderer.create(
      <InputField
        onChangeText={onChangeText}
        placeholder={'test-palceholder'}
        title={'test-title'}
        value={'test-value'}
      />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('Snapshot with value, keyboard type email', () => {
    const onChangeText = jest.fn();

    const component = renderer.create(
      <InputField
        onChangeText={onChangeText}
        placeholder={'test-palceholder'}
        title={'test-title'}
        value={'test-value'}
        keyboardType={'email-address'}
      />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('Snapshot with value, secureTextEntry', () => {
    const onChangeText = jest.fn();

    const component = renderer.create(
      <InputField
        onChangeText={onChangeText}
        placeholder={'test-palceholder'}
        title={'test-title'}
        value={'test-value'}
        secureTextEntry={true}
      />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('Snapshot with value, ErrorTest', () => {
    const onChangeText = jest.fn();

    const component = renderer.create(
      <InputField
        onChangeText={onChangeText}
        placeholder={'test-palceholder'}
        title={'test-title'}
        value={'test-value'}
        errorText={'test-Error'}
      />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
