import React from "react";
import {ScrollView} from "react-native";
import {useParams} from 'react-router-native'
import RecipeDetailsHeader from "../recipes/details/RecipeDetailsHeader";
import RecipeDetailsImageGallery from "../recipes/details/RecipeDetailsImageGallery";
import RecipeDetailsActionBar from "../recipes/details/RecipeDetailsActionBar";
import styled from "styled-components/native";
import RecipeDetailsItemComponent from "../recipes/details/RecipeDetailsItemComponent";

export default function RecipeDetailsPage({getRecipeDetailsById}) {
    const {id} = useParams()
    const recipe = getRecipeDetailsById(id)
    const ingredients = recipe?.zutaten_set.reduce((previousValue, currentValue) => {
        return {zutat: previousValue.zutat.concat("\n").concat(currentValue?.zutat)}
    }).zutat

    return (
        <ScrollView>
            <RecipeDetailsHeader title={recipe?.title} owner={recipe?.owner}/>
            <RecipeDetailsImageGallery images={recipe?.image_set}/>
            <RecipeDetailsActionBar/>
            <RowWrapper>
                <ItemStyled content={"Duration: " + recipe?.dauer + " min"}/>
                <ItemStyled content={"Difficulty: " + recipe?.difficulty.difficulty}/>
            </RowWrapper>
            <ItemWrapper content={"Ingredients:\n" + ingredients}/>
            <ItemWrapper content={"Instructions: \n" + recipe?.anleitung}/>
        </ScrollView>
    )
}

const ItemStyled = styled(RecipeDetailsItemComponent)`
  justify-content: center;
  border-radius: 10px;
  border-width: 1px;
  border-color: #fff;
`

const ItemWrapper = styled(RecipeDetailsItemComponent)`
  margin: 12px;
  justify-content: center;
  border-radius: 10px;
  border-width: 1px;
  border-color: #fff;
`

const RowWrapper = styled.View`
  margin: 12px;
  gap: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
