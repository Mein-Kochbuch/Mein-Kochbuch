import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import MainMenu from "../../src/components/MainMenu";
import MenuButton from "../../src/components/MenuButton";

jest.mock("../../src/components/MenuButton", () => {
    return (props) => {
        return <div {...props}/>
    }
});


it('MainMenu Test', () => {
    const component = renderer.create(
        <MainMenu/>
    );

    expect(component.toJSON()).toMatchSnapshot()
    expect(component.toJSON().children.length).toBe(2)
    expect(component.toJSON().children[0].children.length).toBe(4)

    const testInstance = component.root

    expect(testInstance.findAllByType(MenuButton)[0].props.style).toStrictEqual({margin: 12})
    expect(testInstance.findAllByType(MenuButton)[0].props.text).toBe("My Recipes")
    expect(testInstance.findAllByType(MenuButton)[0].props.path).toBe("myrecipes")

    expect(testInstance.findAllByType(MenuButton)[1].props.style).toStrictEqual({margin: 12})
    expect(testInstance.findAllByType(MenuButton)[1].props.text).toBe("All Recipes")
    expect(testInstance.findAllByType(MenuButton)[1].props.path).toBe("recipes")

    expect(testInstance.findAllByType(MenuButton)[2].props.style).toStrictEqual({margin: 12})
    expect(testInstance.findAllByType(MenuButton)[2].props.text).toBe("Cookbooks")
    expect(testInstance.findAllByType(MenuButton)[2].props.path).toBe("cookbooks")

    expect(testInstance.findAllByType(MenuButton)[3].props.style).toStrictEqual({margin: 12})
    expect(testInstance.findAllByType(MenuButton)[3].props.text).toBe("Ad Recipe")
    expect(testInstance.findAllByType(MenuButton)[3].props.path).toBe("addrecipe")

    expect(testInstance.findAllByType(MenuButton)[4].props.style).toBe(undefined)
    expect(testInstance.findAllByType(MenuButton)[4].props.text).toBe("Settings")
    expect(testInstance.findAllByType(MenuButton)[4].props.path).toBe("settings")
})