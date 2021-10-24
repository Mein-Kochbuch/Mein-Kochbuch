import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import MyRecipesPage from "../../src/pages/MyRecipesPage";
import MyRecipesList from "../../src/components/MyRecipesList";
import Header from "../../src/components/Header"

const cookbooks = [{cookbook: "1", pk: "1"}, {cookbook: "2", pk: "2"}]

jest.mock("../../src/hooks/useCookbooks", () => {
    return () => {
        return {cookbooks}
    }
});

it('MyRecipeTest Test', () => {

    const component = renderer.create(
        <MyRecipesPage/>
    );

    expect(component.toJSON()).toMatchSnapshot()
    expect(component.toJSON().children.length).toBe(1)
    expect(component.toJSON().children[0].children.length).toBe(2)
    const testInstance = component.root
    expect(testInstance.findByType(Header).props.title).toBe("My Recipes")
    expect(testInstance.findByType(MyRecipesList).props.cookbooks).toBe(cookbooks)
})
