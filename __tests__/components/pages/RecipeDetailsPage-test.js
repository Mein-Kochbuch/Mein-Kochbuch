import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import RecipeDetailsPage from "../../../src/components/pages/RecipeDetailsPage";
import {render} from '@testing-library/react-native';
import {Router} from "react-router-native";


jest.mock("../../../src/components/recipes/details/RecipeDetailsHeader", () => {
    return (props) => {
        return <div{...props} />
    }
});

jest.mock("../../../src/components/recipes/details/RecipeDetailsImageGallery", () => {
    return (props) => {
        return <div {...props}/>
    }
});

jest.mock("../../../src/components/recipes/details/RecipeDetailsActionBar", () => {
    return (props) => {
        return <div {...props}/>
    }
});

jest.mock("../../../src/components/recipes/details/RecipeDetailsItemComponent", () => {
    return (props) => {
        return <div {...props}/>
    }
});

jest.mock('react-router-native', () => ({
    ...jest.requireActual('react-router-native'), // use actual for all non-hook parts
    useParams: () => ({
        id: '3',
    }),
}));


it('RecipeDetailsPage Test', () => {

    const history = {
        push: jest.fn(),
        listen: jest.fn(),
        location: {pathname: "/recipes/3"}
    }

    const recipeDetails = {
        3: {
            title: "recipe-title",
            owner: {name: "owner-name"},
            image_set: [{image: "url"}],
            avg_rating: 3.7,
            rating_count: 17,
            rating: 2.5,
            favorite: true,
            dauer: 25,
            difficulty: {difficulty: "Mittel"},
            portionen: 4,
            zutaten_set: [
                {zutat: "mehl"},
                {zutat: "zucker"}
            ],
            anleitung: "test Anleitung"
        }
    }
    const getRecipeDetailsById = jest.fn()

    const component = render(
        <Router history={history}>
            <RecipeDetailsPage recipeDetails={recipeDetails} getRecipeDetailsById={getRecipeDetailsById}/>
        </Router>
    );

    expect(component.toJSON()).toMatchSnapshot()
    expect(component.toJSON().children.length).toBe(1)
    expect(component.toJSON().children[0].children.length).toBe(6)
    expect(component.toJSON().children[0].children[3].children.length).toBe(3)

    expect(getRecipeDetailsById).toBeCalledWith("3")

    expect(component.toJSON().children[0].children[0].props).toStrictEqual(
        {title: "recipe-title", owner: {name: "owner-name"}}
    )
    expect(component.toJSON().children[0].children[1].props).toStrictEqual({images: [{image: "url"}]})
    expect(component.toJSON().children[0].children[2].props).toStrictEqual(
        {
            avgRating: 3.7,
            ratingCount: 17,
            ownRating: 2.5,
            favorite: true
        }
    )
    expect(component.toJSON().children[0].children[3].children[0].props).toStrictEqual({
        content: "Duration: 25 min",
        style: [
            {
                "borderColor": "#fff",
                "borderRadius": 10,
                "borderWidth": 1,
                "justifyContent": "center",
                "width": "49%"
            }
        ],
        testID: undefined,
    })
    expect(component.toJSON().children[0].children[3].children[1].props).toStrictEqual({
        content: "Difficulty: Mittel",
        style: [
            {
                "borderColor": "#fff",
                "borderRadius": 10,
                "borderWidth": 1,
                "justifyContent": "center",
                "width": "49%"
            }
        ],
        testID: undefined
    })
    expect(component.toJSON().children[0].children[3].children[2].children[0].children[0]).toStrictEqual("Portions: 4")
    expect(component.toJSON().children[0].children[4].props).toStrictEqual({
        content: "Ingredients:\nmehl\nzucker",
        style: [
            {
                "borderColor": "#fff",
                "borderRadius": 10,
                "borderWidth": 1,
                "justifyContent": "center",
                "marginBottom": 12,
                "marginLeft": 12,
                "marginRight": 12,
                "marginTop": 12
            }
        ],
        testID: undefined
    })
    expect(component.toJSON().children[0].children[5].props).toStrictEqual({
        content: "Instructions: \ntest Anleitung",
        style: [
            {
                "borderColor": "#fff",
                "borderRadius": 10,
                "borderWidth": 1,
                "justifyContent": "center",
                "marginBottom": 12,
                "marginLeft": 12,
                "marginRight": 12,
                "marginTop": 12
            }
        ],
        testID: undefined
    })
})
