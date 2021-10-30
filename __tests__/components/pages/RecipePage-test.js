import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Header from "../../../src/components/list/Header"
import RecipesPage from "../../../src/components/pages/RecipesPage";
import RecipeList from "../../../src/components/recipes/RecipeList";

const recipes = [{pk: "1", title: "test-title-1"}, {pk: "2", title: "test-title-2"}]

jest.mock("../../../src/hooks/useRecipes", () => {
    return () => {
        return {recipes}
    }
});

jest.mock("../../../src/components/recipes/RecipeList", () => {
    return (props) => {
        return <div {...props}/>
    }
});

jest.mock("../../../src/components/list/Header", () => {
    return (props) => {
        return <div {...props}/>
    }
});


it('RecipeTest Test', () => {

    const component = renderer.create(
        <RecipesPage title={"test-title"}/>
    );

    expect(component.toJSON()).toMatchSnapshot()
    expect(component.toJSON().children.length).toBe(1)
    expect(component.toJSON().children[0].children.length).toBe(2)
    const testInstance = component.root
    expect(testInstance.findByType(Header).props.title).toBe("test-title")
    expect(testInstance.findByType(RecipeList).props.recipes).toBe(recipes)
})
