import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import RecipeDetailsHeader from "../../../../src/components/recipes/details/RecipeDetailsHeader";

it('RecipeDetails Header Test', () => {
    const component = renderer.create(
        <RecipeDetailsHeader title={"Test-Title"} owner={{username: "owner-name"}}/>
    ).toJSON();

    expect(component).toMatchSnapshot()
    expect(component.children.length).toBe(2)
    expect(component.children[0].children[0]).toBe("Test-Title")
    expect(component.children[1].children[0]).toBe("owner-name")
})
