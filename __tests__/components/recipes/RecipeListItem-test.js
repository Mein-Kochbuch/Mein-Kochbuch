import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {useColorScheme} from "react-native-appearance";
import {Image} from "react-native";
import RecipeListItem from "../../../src/components/recipes/RecipeListItem";


jest.mock("react-native-appearance", () => ({
    useColorScheme: jest.fn(),
}));

describe("RecipeListItem Test", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('dark', () => {
        useColorScheme.mockReturnValueOnce('dark');

        const recipe = {
            title: "test-title"
        }

        const component = renderer.create(
            <RecipeListItem recipe={recipe}/>
        );

        expect(component.toJSON()).toMatchSnapshot()
        expect(component.toJSON().children.length).toBe(2)
        expect(component.toJSON().children[1].children[0]).toBe("test-title")

        const testInstance = component.root

        expect(testInstance.findAllByType(RecipeListItem)[0].props.recipe).toStrictEqual({title: "test-title"})
        expect(testInstance.findAllByType(Image)[0].props.source).toStrictEqual({"testUri": "../../../resources/platzhalter.png"})
    })

    it('light', () => {
        useColorScheme.mockReturnValueOnce('light');

        const recipe = {
            title: "test-title",
            thumbnail_url: "test-uri"
        }

        const component = renderer.create(
            <RecipeListItem recipe={recipe}/>
        );

        expect(component.toJSON()).toMatchSnapshot()
        expect(component.toJSON().children.length).toBe(2)
        expect(component.toJSON().children[1].children[0]).toBe("test-title")

        const testInstance = component.root

        expect(testInstance.findAllByType(RecipeListItem)[0].props.recipe).toStrictEqual({
            title: "test-title",
            thumbnail_url: "test-uri"
        })
        expect(testInstance.findAllByType(Image)[0].props.source).toStrictEqual({"uri": "test-uri"})
    })
})
