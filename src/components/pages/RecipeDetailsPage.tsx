import React, {useContext} from "react";
import {ScrollView} from "react-native";
import {useHistory, useParams} from 'react-router-native'
import RecipeDetailsHeader from "../recipes/details/RecipeDetailsHeader";
import RecipeDetailsImageGallery from "../recipes/details/RecipeDetailsImageGallery";
import RecipeDetailsActionBar from "../recipes/details/RecipeDetailsActionBar";
import styled from "styled-components/native";
import RecipeDetailsItemComponent from "../recipes/details/RecipeDetailsItemComponent";
import RecipeDetailsPortions from "../recipes/details/RecipeDetailsPortions";
import {AuthContext} from "../../context/AuthProvider";
import {Recipe} from "../../models/Recipe";


interface RecipeDetailsPageProps {
    recipeDetails: Recipe[]
    getRecipeDetailsById: (id: number) => void,
    favorizeRecipeById: (id: number) => void,
    rateRecipeById: (id: number, rating: number) => void
}

export default function RecipeDetailsPage({
                                              recipeDetails,
                                              getRecipeDetailsById,
                                              favorizeRecipeById,
                                              rateRecipeById
                                          }: RecipeDetailsPageProps) {
    const auth = useContext(AuthContext)
    const {id}: { id: string } = useParams()
    const history = useHistory()
    const recipe = recipeDetails[parseInt(id)]
    const ingredients = recipe?.zutaten_set.reduce((previousValue, currentValue) => {
        return {zutat: previousValue.zutat.concat("\n").concat(currentValue?.zutat)}
    }).zutat

    getRecipeDetailsById(parseInt(id))

    const handleFavorize = () => {
        auth.user ?
            favorizeRecipeById(parseInt(id))
            : history.push("/login")
    }

    const handleRating = (rating: number) => {
        auth.user ?
            rateRecipeById(parseInt(id), rating)
            : history.push("/login")
    }

    return (
        <ScrollView>
            <RecipeDetailsHeader title={recipe?.title} owner={recipe?.owner}/>
            <RecipeDetailsImageGallery images={recipe?.image_set}/>
            <RecipeDetailsActionBar
                avgRating={recipe?.avg_rating}
                ratingCount={recipe?.rating_count}
                ownRating={recipe?.rating}
                favorite={recipe?.favorite}
                handleRating={handleRating}
                handleFavorize={handleFavorize}/>
            <RowWrapper>
                <ItemStyled content={"Duration: " + recipe?.dauer + " min"}/>
                <ItemStyled content={"Difficulty: " + recipe?.difficulty.difficulty}/>
                <PortionsStyled content={"Portions: " + recipe?.portionen}/>
            </RowWrapper>
            <ItemWrapper content={"Ingredients:\n" + ingredients}/>
            <ItemWrapper content={"Instructions: \n" + recipe?.anleitung}/>
        </ScrollView>
    )
}

const PortionsStyled = styled(RecipeDetailsPortions)`
  width: 49%;
  margin-top: 12px;
  border-radius: 10px;
  border-width: 1px;
  border-color: #fff;
`

const ItemStyled = styled(RecipeDetailsItemComponent)`
  width: 49%;
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
  flex-wrap: wrap;
`
