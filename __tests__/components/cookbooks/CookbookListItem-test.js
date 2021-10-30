import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {useColorScheme} from "react-native-appearance";
import CookbookListItem from "../../../src/components/cookbooks/CookbookListItem";
import {Image} from "react-native";


jest.mock("react-native-appearance", () => ({
    useColorScheme: jest.fn(),
}));

describe("CookbookListItem Test", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('dark', () => {
        useColorScheme.mockReturnValueOnce('dark');

        const cookbook = {
            name: "test-title"
        }

        const component = renderer.create(
            <CookbookListItem cookbook={cookbook}/>
        );

        expect(component.toJSON()).toMatchSnapshot()
        expect(component.toJSON().children.length).toBe(2)
        expect(component.toJSON().children[1].children[0]).toBe("test-title")

        const testInstance = component.root

        expect(testInstance.findAllByType(CookbookListItem)[0].props.cookbook).toStrictEqual({name: "test-title"})
        expect(testInstance.findAllByType(Image)[0].props.source).toStrictEqual({"testUri": "../../../resources/platzhalter.png"})
    })

    it('light', () => {
        useColorScheme.mockReturnValueOnce('light');

        const cookbook = {
            name: "test-title",
            thumbnail: "test-uri"
        }

        const component = renderer.create(
            <CookbookListItem cookbook={cookbook}/>
        );

        expect(component.toJSON()).toMatchSnapshot()
        expect(component.toJSON().children.length).toBe(2)
        expect(component.toJSON().children[1].children[0]).toBe("test-title")

        const testInstance = component.root

        expect(testInstance.findAllByType(CookbookListItem)[0].props.cookbook).toStrictEqual({
            name: "test-title",
            thumbnail: "test-uri"
        })
        expect(testInstance.findAllByType(Image)[0].props.source).toStrictEqual({"uri": "test-uri"})
    })
})
