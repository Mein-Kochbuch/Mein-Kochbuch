import React from "react";
import {View} from "react-native";
import RecipeListItem from "./RecipeListItem";

export default function RecipeList({recipes}) {

    return (
        <View>
            {recipes.map(recipe => <RecipeListItem key={recipe.pk} recipe={recipe}/>)}
        </View>
    )
}
