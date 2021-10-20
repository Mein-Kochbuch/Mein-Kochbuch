import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import MenuButton from "../src/components/MenuButton";

it('MenuButton Default Style Test', () => {
    const component = renderer.create(
        <MenuButton text={"Test-text"}/>
    ).toJSON();

    expect(component).toMatchSnapshot()
    expect(component.children.length).toBe(1)
    expect(component.children[0].children[0]).toBe("Test-text")
})

it('MenuButton Custom Style Test', () => {
    const component = renderer.create(
        <MenuButton text={"Test-text"} style={{backgroundColor: "green"}}/>
    ).toJSON();

    expect(component).toMatchSnapshot()
    expect(component.children.length).toBe(1)
    expect(component.children[0].children[0]).toBe("Test-text")
})
