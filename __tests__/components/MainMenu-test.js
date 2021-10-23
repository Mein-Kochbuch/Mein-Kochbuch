import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import MainMenu from "../../src/components/MainMenu";

it('MainMenu Test', () => {
    const component = renderer.create(
        <MainMenu/>
    ).toJSON();

    expect(component).toMatchSnapshot()
    expect(component.children.length).toBe(2)
    expect(component.children[0].children.length).toBe(4)
    expect(component.children[0].children[0].children[0].children[0]).toBe("My Recipes")
    expect(component.children[0].children[1].children[0].children[0]).toBe("All Recipes")
    expect(component.children[0].children[2].children[0].children[0]).toBe("Cookbooks")
    expect(component.children[0].children[3].children[0].children[0]).toBe("Ad Recipe")

    expect(component.children[1].children[0].children[0].children[0]).toBe("Settings")
})
