import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import MyRecipesList from "../../../src/components/recipes/MyRecipesList";
import MultiListItem from "../../../src/components/list/MultiListItem";
import CookbookListItem from "../../../src/components/cookbooks/CookbookListItem";

jest.mock("../../../src/components/list/MultiListItem", () => {
    return (props) => {
        return <div {...props}/>
    }
});

jest.mock("../../../src/components/cookbooks/CookbookListItem", () => {
    return (props) => {
        return <div {...props}/>
    }
});

const cookbooks = [{cookbook: "1", pk: "1"}, {cookbook: "2", pk: "2"}]

it('MainMenu Test', () => {
    const component = renderer.create(
        <MyRecipesList cookbooks={cookbooks}/>
    );

    expect(component.toJSON()).toMatchSnapshot()
    expect(component.toJSON().children.length).toBe(5)

    const testInstance = component.root

    expect(testInstance.findAllByType(MultiListItem)[0].props.title).toBe("All Recipes")

    expect(testInstance.findAllByType(MultiListItem)[1].props.title).toBe("Favorites")

    expect(testInstance.findAllByType(CookbookListItem)[0].props.cookbook).toStrictEqual({cookbook: "1", pk: "1"},)

    expect(testInstance.findAllByType(CookbookListItem)[1].props.cookbook).toStrictEqual({cookbook: "2", pk: "2"})

})
