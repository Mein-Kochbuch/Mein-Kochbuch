import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import RegisterForm from "../../../src/components/login/RegisterForm";
import {useColorScheme} from "react-native-appearance";

jest.mock("react-native-appearance", () => ({
    useColorScheme: jest.fn(),
}))

describe('RegisterForm Test', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });


    it('Snapshot light Test', () => {
        useColorScheme.mockReturnValueOnce('light');
        const handleRegister = () => {
        }

        const component = renderer.create(
            <RegisterForm handleRegister={handleRegister}/>
        );

        expect(component.toJSON()).toMatchSnapshot()
    })

    it('Snapshot dark Test', () => {
        useColorScheme.mockReturnValueOnce('dark');
        const handleRegister = () => {
        }

        const component = renderer.create(
            <RegisterForm handleRegister={handleRegister}/>
        );

        expect(component.toJSON()).toMatchSnapshot()
    })
})
