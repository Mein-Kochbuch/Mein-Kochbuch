import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {useColorScheme} from "react-native-appearance";
import InputField from "../../../src/components/login/InputField";

jest.mock("react-native-appearance", () => ({
    useColorScheme: jest.fn(),
}))

describe('InputField Test', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });


    it('Snapshot light Test', () => {
        useColorScheme.mockReturnValueOnce('light');
        const onChangeText = jest.fn()

        const component = renderer.create(
            <InputField onChangeText={onChangeText} placeholder={"test-palceholder"} title={"test-title"} value={""}/>
        );

        expect(component.toJSON()).toMatchSnapshot()
    })

    it('Snapshot dark Test', () => {
        useColorScheme.mockReturnValueOnce('dark');
        const onChangeText = jest.fn()

        const component = renderer.create(
            <InputField onChangeText={onChangeText} placeholder={"test-palceholder"} title={"test-title"} value={""}/>
        );

        expect(component.toJSON()).toMatchSnapshot()
    })

    it('Snapshot with value', () => {
        useColorScheme.mockReturnValueOnce('dark');
        const onChangeText = jest.fn()

        const component = renderer.create(
            <InputField onChangeText={onChangeText} placeholder={"test-palceholder"} title={"test-title"}
                        value={"test-value"}/>
        );

        expect(component.toJSON()).toMatchSnapshot()
    })

    it('Snapshot with value, keyboard type email', () => {
        useColorScheme.mockReturnValueOnce('dark');
        const onChangeText = jest.fn()

        const component = renderer.create(
            <InputField onChangeText={onChangeText} placeholder={"test-palceholder"} title={"test-title"}
                        value={"test-value"} keyboardType={"email-address"}/>
        );

        expect(component.toJSON()).toMatchSnapshot()
    })

    it('Snapshot with value, secureTextEntry', () => {
        useColorScheme.mockReturnValueOnce('dark');
        const onChangeText = jest.fn()

        const component = renderer.create(
            <InputField onChangeText={onChangeText} placeholder={"test-palceholder"} title={"test-title"}
                        value={"test-value"} secureTextEntry={true}/>
        );

        expect(component.toJSON()).toMatchSnapshot()
    })

    it('Snapshot with value, ErrorTest', () => {
        useColorScheme.mockReturnValueOnce('dark');
        const onChangeText = jest.fn()

        const component = renderer.create(
            <InputField onChangeText={onChangeText} placeholder={"test-palceholder"} title={"test-title"}
                        value={"test-value"} errorText={"test-Error"}/>
        );

        expect(component.toJSON()).toMatchSnapshot()
    })
})
