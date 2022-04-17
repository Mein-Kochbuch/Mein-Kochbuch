import React from 'react';
import styled from 'styled-components/native';
import RatingComponent from './RatingComponent';
import Icon from 'react-native-vector-icons/Feather';
import {Appearance} from 'react-native';
// @ts-ignore
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';

interface RecipeDetailsActionBarProps {
  averageRating: number;
  ratingCount: number;
  ownRating?: number;
  favorite: boolean;
  handleRating: (rating: number) => void;
  handleFavorize: () => void;
}

export default function RecipeDetailsActionBar({
  averageRating,
  ratingCount,
  ownRating,
  handleRating,
  favorite,
  handleFavorize,
}: RecipeDetailsActionBarProps) {
  const isDarkMode = Appearance.getColorScheme() === 'dark';
  const dislikeColor = isDarkMode ? Colors.lighter : Colors.darker;

  return (
    <ActionBar>
      <RatingComponent
        ownRating={ownRating}
        averageRating={averageRating}
        ratingCount={ratingCount}
        handleRating={handleRating}
      />
      <Icon
        name={'heart'}
        size={35}
        color={favorite ? '#F10F0F' : dislikeColor}
        onPress={handleFavorize}
      />
    </ActionBar>
  );
}

const ActionBar = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin: 12px;
`;
