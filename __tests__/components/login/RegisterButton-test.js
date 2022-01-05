import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {useColorScheme} from "react-native-appearance";
import RegisterButton from "../../../src/components/login/RegisterButton";

jest.mock("react-native-appearance", () => ({
    useColorScheme: jest.fn(),
}));

describe("RegisterButton Test", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('RegisterButton darkmode Test', () => {
        useColorScheme.mockReturnValueOnce('dark');

        const component = renderer.create(
            <RegisterButton/>
        ).toJSON();

        expect(useColorScheme).toHaveBeenCalledTimes(1);
        expect(component).toMatchSnapshot()
    })

    it('RegisterButton lightmode Test', () => {
        useColorScheme.mockReturnValueOnce('light');

        const component = renderer.create(
            <RegisterButton/>
        ).toJSON();

        expect(useColorScheme).toHaveBeenCalledTimes(1);
        expect(component).toMatchSnapshot()
    })
})
