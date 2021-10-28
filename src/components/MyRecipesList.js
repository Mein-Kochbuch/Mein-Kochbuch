import React from "react";
import {View} from "react-native";
import MultiListItem from "./MultiListItem";
import CookbookListItem from "./CookbookListItem";

export default function MyRecipesList({cookbooks}) {

    return (
        <View>
            <MultiListItem title={"All Recipes"} icon="all"/>
            <MultiListItem title={"Favorites"} icon="heart"/>
            <View style={{margin: 10}}/>
            {
                cookbooks.map((cookbook) => <CookbookListItem key={cookbook.pk} cookbook={cookbook}/>)
            }
        </View>
    )
}
