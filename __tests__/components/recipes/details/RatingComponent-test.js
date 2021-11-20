import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import RatingCompontent from "../../../../src/components/recipes/details/RatingCompontent";
import {Rating} from "react-native-ratings";
import Icon from "react-native-vector-icons/Feather";
import {useColorScheme} from "react-native-appearance";
import Colors from "react-native/Libraries/NewAppScreen/components/Colors";

jest.mock("react-native-appearance", () => ({
    useColorScheme: jest.fn(),
}));

describe("RatingComponent Test", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('Test dark theme', () => {
        useColorScheme.mockReturnValueOnce('dark');

        const avgRating = 4
        const ratingCount = 12
        const ownRating = 2.5
        const handleRating = () => {
        }

        const component = renderer.create(
            <RatingCompontent
                avgRating={avgRating}
                ratingCount={ratingCount}
                ownRating={ownRating}
                handleRating={handleRating}/>
        );

        expect(component.toJSON()).toMatchSnapshot()
        expect(component.toJSON().children.length).toBe(4)
        expect(component.toJSON().children[1].children[0]).toBe(avgRating.toString())
        expect(component.toJSON().children[3].children[0]).toBe(`(${ratingCount})`)

        const testInstance = component.root

        expect(testInstance.findAllByType(Rating)[0].props.type).toBe("custom")
        expect(testInstance.findAllByType(Rating)[0].props.fractions).toBe(1)
        expect(testInstance.findAllByType(Rating)[0].props.imageSize).toBe(30)
        expect(testInstance.findAllByType(Rating)[0].props.defaultRating).toBe(ownRating)
        expect(testInstance.findAllByType(Rating)[0].props.tintColor).toBe(Colors.darker)
        expect(testInstance.findAllByType(Rating)[0].props.onFinishRating).toBe(handleRating)

        expect(testInstance.findAllByType(Icon)[0].props.name).toBe("star")
        expect(testInstance.findAllByType(Icon)[0].props.size).toBe(20)
        expect(testInstance.findAllByType(Icon)[0].props.color).toBe("#F1C40F")
    })

    it('Test light theme', () => {
        useColorScheme.mockReturnValueOnce('light');

        const avgRating = 4
        const ratingCount = 12
        const ownRating = 2.5
        const handleRating = (rating) => {
        }

        const component = renderer.create(
            <RatingCompontent
                avgRating={avgRating}
                ratingCount={ratingCount}
                ownRating={ownRating}
                handleRating={handleRating}/>
        );

        expect(component.toJSON()).toMatchSnapshot()
        expect(component.toJSON().children.length).toBe(4)
        expect(component.toJSON().children[1].children[0]).toBe(avgRating.toString())
        expect(component.toJSON().children[3].children[0]).toBe(`(${ratingCount})`)

        const testInstance = component.root

        expect(testInstance.findAllByType(Rating)[0].props.type).toBe("custom")
        expect(testInstance.findAllByType(Rating)[0].props.fractions).toBe(1)
        expect(testInstance.findAllByType(Rating)[0].props.imageSize).toBe(30)
        expect(testInstance.findAllByType(Rating)[0].props.defaultRating).toBe(ownRating)
        expect(testInstance.findAllByType(Rating)[0].props.tintColor).toBe(Colors.lighter)
        expect(testInstance.findAllByType(Rating)[0].props.onFinishRating).toBe(handleRating)

        expect(testInstance.findAllByType(Icon)[0].props.name).toBe("star")
        expect(testInstance.findAllByType(Icon)[0].props.size).toBe(20)
        expect(testInstance.findAllByType(Icon)[0].props.color).toBe("#F1C40F")
    })
})
