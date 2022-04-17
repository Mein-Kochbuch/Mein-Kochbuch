import React from 'react';
import Header from './Header';
import styled from 'styled-components/native';
import RecipeList from '../recipes/RecipeList';
import {RecipePreview} from '../../models/RecipePreview';

interface RecipePageProps {
  recipes: RecipePreview[];
  loadNext: () => void;
  title: string;
}

export default function RecipesPage({
  recipes,
  loadNext,
  title,
}: RecipePageProps) {
  const loadMoreRecipes = () => {
    loadNext();
  };

  return (
    <ViewStyled>
      <Header title={title} />
      <RecipeList recipes={recipes} loadMoreRecipes={loadMoreRecipes} />
    </ViewStyled>
  );
}

const ViewStyled = styled.View`
  height: 100%;
`;
