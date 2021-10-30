import React from "react";
import Header from "../components/Header";
import styled from "styled-components/native";
import useRecipes from "../hooks/useRecipes";
import RecipeList from "../components/RecipeList";

export default function RecipesPage({title}) {
    const {recipes} = useRecipes()

    console.log(recipes[0])

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
