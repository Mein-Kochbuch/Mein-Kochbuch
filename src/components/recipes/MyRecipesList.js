import React from "react";
import {View} from "react-native";
import MultiListItem from "../list/MultiListItem";
import CookbookListItem from "../cookbooks/CookbookListItem";
import styled from "styled-components/native";

export default function MyRecipesList({cookbooks}) {

    return (
        <View>
            <MultiListItem title={"All Recipes"} icon="all"/>
            <MultiListItem title={"Favorites"} icon="heart"/>
            <Spacer/>
            {
                cookbooks.map((cookbook) => <CookbookListItem key={cookbook.pk} cookbook={cookbook}/>)
            }
        </View>
    )
}

const Spacer = styled.View`
  margin: 12px;
`