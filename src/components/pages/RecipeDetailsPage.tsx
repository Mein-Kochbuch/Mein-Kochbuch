import React, {useContext} from 'react';
import {ScrollView} from 'react-native';
import {useHistory, useParams} from 'react-router-native';
import RecipeDetailsHeader from '../recipes/details/RecipeDetailsHeader';
import RecipeDetailsImageGallery from '../recipes/details/RecipeDetailsImageGallery';
import RecipeDetailsActionBar from '../recipes/details/RecipeDetailsActionBar';
import styled from 'styled-components/native';
import RecipeDetailsItemComponent from '../recipes/details/RecipeDetailsItemComponent';
import RecipeDetailsPortions from '../recipes/details/RecipeDetailsPortions';
import {AuthContext} from '../../context/AuthProvider';
import {Recipe} from '../../models/Recipe';

interface RecipeDetailsPageProps {
  recipeDetails: {[key: string]: Recipe};
  getRecipeDetailsById: (id: string) => void;
  favorizeRecipeById: (id: string) => void;
  rateRecipeById: (id: string, rating: number) => void;
}

export default function RecipeDetailsPage({
  recipeDetails,
  getRecipeDetailsById,
  favorizeRecipeById,
  rateRecipeById,
}: RecipeDetailsPageProps) {
  const auth = useContext(AuthContext);
  const {id}: {id: string} = useParams();
  const history = useHistory();
  const recipe = recipeDetails[id];
  if (!recipe) {
    return <></>;
  }

  const ingredients: string = recipe.ingredients
    .map(ingredient => ingredient.text)
    .reduce((previousValue, currentValue) => {
      return previousValue.concat('\n').concat(currentValue);
    });

  getRecipeDetailsById(id);

  const handleFavorize = () => {
    auth.user ? favorizeRecipeById(id) : history.push('/login');
  };

  const handleRating = (rating: number) => {
    auth.user ? rateRecipeById(id, rating) : history.push('/login');
  };

  return (
    <ScrollView>
      <RecipeDetailsHeader title={recipe?.title} owner={recipe?.owner} />
      <RecipeDetailsImageGallery images={recipe?.images} />
      <RecipeDetailsActionBar
        averageRating={recipe?.averageRating}
        ratingCount={recipe?.ratingCount}
        //TODO Add OwnRating/isFavorite Request and processing
        ownRating={0}
        favorite={false}
        handleRating={handleRating}
        handleFavorize={handleFavorize}
      />
      <RowWrapper>
        <ItemStyled content={'Duration: ' + recipe?.duration + ' min'} />
        <ItemStyled content={'Difficulty: ' + recipe?.difficulty} />
        <PortionsStyled content={'Portions: ' + recipe?.portions} />
      </RowWrapper>
      <ItemWrapper content={'Ingredients:\n' + ingredients} />
      <ItemWrapper content={'Instructions: \n' + recipe?.instruction} />
    </ScrollView>
  );
}

const PortionsStyled = styled(RecipeDetailsPortions)`
  width: 49%;
  margin-top: 12px;
  border-radius: 10px;
  border-width: 1px;
  border-color: #fff;
`;

const ItemStyled = styled(RecipeDetailsItemComponent)`
  width: 49%;
  justify-content: center;
  border-radius: 10px;
  border-width: 1px;
  border-color: #fff;
`;

const ItemWrapper = styled(RecipeDetailsItemComponent)`
  margin: 12px;
  justify-content: center;
  border-radius: 10px;
  border-width: 1px;
  border-color: #fff;
`;

const RowWrapper = styled.View`
  margin: 12px;
  gap: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;
