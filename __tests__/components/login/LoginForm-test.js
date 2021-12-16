import React from "react";
import renderer from "react-test-renderer";
import LoginForm from "../../../src/components/login/LoginForm";
import {useColorScheme} from "react-native-appearance";
import {fireEvent, render} from "@testing-library/react-native";

jest.mock("../../../src/components/recipes/RecipeListItem", () => {
    return (props) => {
        return <div {...props}/>
    }
});

jest.mock("react-native-appearance", () => ({
    useColorScheme: jest.fn(),
}));


describe('LoginForm Test', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });


    it('LoginForm Snapshot', () => {
        useColorScheme.mockReturnValueOnce('dark');
        const onSubmit = jest.fn();

        const component = renderer.create(
            <LoginForm onSubmit={onSubmit}/>
        );

        expect(component.toJSON()).toMatchSnapshot()
    })

    it('LoginForm Login Button press', () => {
        useColorScheme.mockReturnValueOnce('dark');
        const onSubmit = jest.fn();

        const {getByText} = render(
            <LoginForm onSubmit={onSubmit}/>
        );

        fireEvent(getByText('E-Mail'), 'onChangeText', "testMail");
        fireEvent(getByText('Password'), 'onChangeText', "testPassword");

        fireEvent(getByText('Login'), 'onPress');
        expect(onSubmit).toBeCalledWith({username: "testMail", password: "testPassword"})
    })
})
