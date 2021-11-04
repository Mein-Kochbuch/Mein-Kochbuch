import React from "react";
import {FlatList} from "react-native";
import RecipeListItem from "./RecipeListItem";
import styled from "styled-components/native";

export default function RecipeList({recipes, loadMoreRecipes}) {

    return (
        <ViewStyled>
            <FlatList
                content
                data={recipes}
                renderItem={(item) => <RecipeListItem item={item}/>}
                keyExtractor={item => item.pk}
                onEndReached={loadMoreRecipes}
            />
        </ViewStyled>
    )
}


const ViewStyled = styled.View`
  height: 88%;
`
