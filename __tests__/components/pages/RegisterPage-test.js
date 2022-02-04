import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import RegisterPage from "../../../src/components/pages/RegisterPage";

jest.mock("react-native-appearance", () => ({
    useColorScheme: jest.fn(),
}))

it('RegisterPage Test', () => {

    const component = renderer.create(
        <RegisterPage/>
    );

    expect(component.toJSON()).toMatchSnapshot()
})
