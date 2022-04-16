import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import RegisterForm from "../../../src/components/login/RegisterForm";
import {useColorScheme} from "react-native-appearance";
import {fireEvent, render} from "@testing-library/react-native";
import {Linking} from "react-native";

jest.mock("react-native-appearance", () => ({
    useColorScheme: jest.fn(),
}))

describe('RegisterForm Test', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });


    it('Snapshot light Test', () => {
        useColorScheme.mockReturnValueOnce('light');
        const handleRegister = jest.fn()

        const component = renderer.create(
            <RegisterForm handleRegister={handleRegister}/>
        );

        expect(component.toJSON()).toMatchSnapshot()
    })

    it('Snapshot dark Test', () => {
        useColorScheme.mockReturnValueOnce('dark');
        const handleRegister = jest.fn()

        const component = renderer.create(
            <RegisterForm handleRegister={handleRegister}/>
        );

        expect(component.toJSON()).toMatchSnapshot()
    })

    it('Privacy Link press', () => {
        useColorScheme.mockReturnValueOnce('dark');
        const handleRegister = jest.fn()

        const {getByText} = render(
            <RegisterForm handleRegister={handleRegister}/>
        );

        fireEvent(getByText(' Privacy Policy '), 'onPress');
        expect(Linking.openURL).toBeCalledWith("https://mein-kochbuch.org/privacypolicy/")
    })

    it('AGB Link press', () => {
        useColorScheme.mockReturnValueOnce('dark');
        const handleRegister = jest.fn()

        const {getByText} = render(
            <RegisterForm handleRegister={handleRegister}/>
        );

        fireEvent(getByText(' AGBs '), 'onPress');
        expect(Linking.openURL).toBeCalledWith("https://mein-kochbuch.org/agb/")
    })

    it('Register Button valid press', () => {
        useColorScheme.mockReturnValueOnce('dark');
        const handleRegister = jest.fn()

        const {getByText, getAllByText} = render(
            <RegisterForm handleRegister={handleRegister}/>
        );

        fireEvent(getByText('E-Mail'), 'onChangeText', "test@mein-kochbuch.org");
        fireEvent(getByText('Name'), 'onChangeText', "testName");
        fireEvent(getAllByText('Password')[0], 'onChangeText', "Test123!");
        fireEvent(getAllByText('Password')[1], 'onChangeText', "Test123!");

        fireEvent(getByText('Register'), 'onPress');
        expect(handleRegister).toBeCalledWith("test@mein-kochbuch.org", "testName", "Test123!")
    })

    it('Register Button press, no valid email', () => {
        useColorScheme.mockReturnValueOnce('dark');
        const handleRegister = jest.fn()

        const {getByText, getAllByText} = render(
            <RegisterForm handleRegister={handleRegister}/>
        );

        fireEvent(getByText('E-Mail'), 'onChangeText', "test-email");
        fireEvent(getByText('Name'), 'onChangeText', "testName");
        fireEvent(getAllByText('Password')[0], 'onChangeText', "Test123!");
        fireEvent(getAllByText('Password')[1], 'onChangeText', "Test123!");

        fireEvent(getByText('Register'), 'onPress');
        expect(handleRegister).toBeCalledTimes(0)
    })

    it('Register Button press, no valid password', () => {
        useColorScheme.mockReturnValueOnce('dark');
        const handleRegister = jest.fn()

        const {getByText, getAllByText} = render(
            <RegisterForm handleRegister={handleRegister}/>
        );

        fireEvent(getByText('E-Mail'), 'onChangeText', "test-email");
        fireEvent(getByText('Name'), 'onChangeText', "testName");
        fireEvent(getAllByText('Password')[0], 'onChangeText', "Test123");
        fireEvent(getAllByText('Password')[1], 'onChangeText', "Test123");

        fireEvent(getByText('Register'), 'onPress');
        expect(handleRegister).toBeCalledTimes(0)
    })
})