import React from 'react';
import {FlatList} from 'react-native';
import RecipeListItem from './RecipeListItem';
import styled from 'styled-components/native';
import {RecipePreview} from '../../models/RecipePreview';

export type RecipeListProps = {
  recipes: RecipePreview[];
  loadMoreRecipes: () => void;
};

export default function RecipeList({
  recipes,
  loadMoreRecipes,
}: RecipeListProps) {
  return (
    <ViewStyled>
      <FlatList
        data={recipes}
        renderItem={item => <RecipeListItem listItem={item} />}
        keyExtractor={item => item.id}
        onEndReached={loadMoreRecipes}
      />
    </ViewStyled>
  );
}

const ViewStyled = styled.View`
  height: 88%;
`;
