import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import RegisterForm from "../../../src/components/login/RegisterForm";

jest.mock("react-native-appearance", () => ({
    useColorScheme: jest.fn(),
}))

it('RegisterForm Test', () => {

    const handleRegister = () => {
    }

    const component = renderer.create(
        <RegisterForm handleRegister={handleRegister}/>
    );

    expect(component.toJSON()).toMatchSnapshot()
})
