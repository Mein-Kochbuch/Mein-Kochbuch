import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import RecipeList from "../../../src/components/recipes/RecipeList";
import RecipeListItem from "../../../src/components/recipes/RecipeListItem";

jest.mock("../../../src/components/recipes/RecipeListItem", () => {
    return (props) => {
        return <div {...props}/>
    }
});

const recipes = [{pk: "1", title: "test-title-1"}, {pk: "2", title: "test-title-2"}]

it('RecipeList Test', () => {
    const component = renderer.create(
        <RecipeList recipes={recipes}/>
    );

    expect(component.toJSON()).toMatchSnapshot()
    expect(component.toJSON().children.length).toBe(2)

    const testInstance = component.root

    expect(testInstance.findAllByType(RecipeListItem)[0].props.recipe).toStrictEqual({title: "test-title-1", pk: "1"})


    expect(testInstance.findAllByType(RecipeListItem)[1].props.recipe).toStrictEqual({title: "test-title-2", pk: "2"})
})
