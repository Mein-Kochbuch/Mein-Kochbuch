import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Header from "../../../src/components/list/Header"
import MainMenuPage from "../../../src/components/pages/MainMenuPage";
import MainMenu from "../../../src/components/mainmenu/MainMenu";

jest.mock("../../../src/components/mainmenu/MainMenu", () => {
    return (props) => {
        return <div {...props}/>
    }
});

jest.mock("../../../src/components/list/Header", () => {
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
