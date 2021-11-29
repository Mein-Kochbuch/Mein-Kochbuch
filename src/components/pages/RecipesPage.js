import React from "react";
import Header from "./Header";
import styled from "styled-components/native";
import RecipeList from "../../components/recipes/RecipeList";

export default function RecipesPage({recipes, loadNext, title}) {

    const loadMoreRecipes = () => {
        loadNext()
    }

    return (
        <ViewStyled>
            <Header title={title}/>
            <RecipeList recipes={recipes} loadMoreRecipes={loadMoreRecipes}/>
        </ViewStyled>
    )

}

const ViewStyled = styled.View`
  height: 100%;
`
