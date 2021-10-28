import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Header from "../../src/components/Header"
import MainMenuPage from "../../src/pages/MainMenuPage";
import MainMenu from "../../src/components/MainMenu";

jest.mock("../../src/components/MainMenu", () => {
    return (props) => {
        return <div {...props}/>
    }
});

jest.mock("../../src/components/Header", () => {
    return (props) => {
        return <div {...props}/>
    }
});


it('MainMenuPage Test', () => {

    const component = renderer.create(
        <MainMenuPage/>
    );

    expect(component.toJSON()).toMatchSnapshot()
    expect(component.toJSON().children.length).toBe(2)
    const testInstance = component.root
    expect(testInstance.findByType(Header).props.title).toBe("My-Cookbook")
    expect(testInstance.findByType(MainMenu)).not.toBeNull()
})
