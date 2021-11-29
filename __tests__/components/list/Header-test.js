import 'react-native';
import React from 'react';
import Header from "../../../src/components/pages/Header";

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Header Test', () => {
    const component = renderer.create(
        <Header title={"Test-Title"}/>
    ).toJSON();

    expect(component).toMatchSnapshot()
    expect(component.children.length).toBe(1)
    expect(component.children[0].children[0]).toBe("Test-Title")
})

