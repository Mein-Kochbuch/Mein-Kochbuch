import React from "react";
import Header from "../../components/list/Header";
import styled from "styled-components/native";
import useRecipes from "../../hooks/useRecipes";
import RecipeList from "../../components/recipes/RecipeList";

export default function RecipesPage({title}) {
    const {recipes} = useRecipes()

    return (
        <ScrollViewStyled>
            <Header title={title}/>
            <RecipeList recipes={recipes}/>
        </ScrollViewStyled>
    );
}

const ScrollViewStyled = styled.ScrollView`
  height: 100%;
`
