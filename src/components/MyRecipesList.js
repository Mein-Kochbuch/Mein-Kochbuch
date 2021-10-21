import React from "react";
import {View} from "react-native";
import MultiListItem from "./MultiListItem";
import CookbookListItem from "./CookbookListItem";

export default function MyRecipesList({cookbooks}) {

    return (
        <View>
            <MultiListItem title={"All Recipes"}/>
            <MultiListItem title={"Favorites"}/>
            <View style={{margin: 10}}/>
            {
                cookbooks.map((cookbook) => <CookbookListItem key={cookbook.pk} cookbook={cookbook}/>)
            }
        </View>
    )
}
