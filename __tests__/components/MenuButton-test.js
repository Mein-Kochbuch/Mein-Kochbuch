import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import MenuButton from "../../src/components/MenuButton";
import {fireEvent, render} from '@testing-library/react-native';
import {Router} from "react-router-native";
import {useColorScheme} from "react-native-appearance";

jest.mock("react-native-appearance", () => ({
    useColorScheme: jest.fn(),
}));

describe("MenuButton Test", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('MenuButton Button Press', () => {
        const history = {
            push: jest.fn(),
            listen: jest.fn(),
            location: {pathname: "/"}
        }

        const {getByText} = render(
            <Router history={history}>
                <MenuButton text={"Test-title"} path={"test"}/>
            </Router>
        );

        fireEvent(getByText('Test-title'), 'onPress');
        expect(history.push).toBeCalledWith("/test")
    })

    it('MenuButton darkmode Test', () => {
        useColorScheme.mockReturnValueOnce('dark');

        const component = renderer.create(
            <MenuButton text={"Test-text"}/>
        ).toJSON();

        expect(useColorScheme).toHaveBeenCalledTimes(1);
        expect(component).toMatchSnapshot()
        expect(component.children.length).toBe(1)
        expect(component.children[0].children[0]).toBe("Test-text")
    })

    it('MenuButton lightmode Test', () => {
        useColorScheme.mockReturnValueOnce('light');

        const component = renderer.create(
            <MenuButton text={"Test-text"} style={{backgroundColor: "green"}}/>
        ).toJSON();

        expect(useColorScheme).toHaveBeenCalledTimes(1);
        expect(component).toMatchSnapshot()
        expect(component.children.length).toBe(1)
        expect(component.children[0].children[0]).toBe("Test-text")
    })
})
