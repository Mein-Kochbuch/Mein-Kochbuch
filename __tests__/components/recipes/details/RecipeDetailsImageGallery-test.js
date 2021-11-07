import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import {render} from '@testing-library/react-native';
import RecipeDetailsImageGallery from "../../../../src/components/recipes/details/RecipeDetailsImageGallery";

describe("RecipeDetailsImageGallery", () => {

    it('With Image', () => {

        const component = render(
            <RecipeDetailsImageGallery
                images={[{image: "test-uri"}]}/>
        );

        expect(component.toJSON()).toMatchSnapshot()
        expect(component.toJSON().children.length).toBe(1)

        expect(component.toJSON().children[0].props.source).toStrictEqual({uri: "test-uri"})
    })

    it('default image', () => {

        const component = render(
            <RecipeDetailsImageGallery
                image={[]}/>
        );

        expect(component.toJSON()).toMatchSnapshot()
        expect(component.toJSON().children.length).toBe(1)

        expect(component.toJSON().children[0].props.source).toStrictEqual({testUri: "../../../resources/platzhalter.png"})
    })
})
