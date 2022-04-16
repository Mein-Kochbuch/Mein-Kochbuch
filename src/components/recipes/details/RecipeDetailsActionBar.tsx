import React from 'react';
import styled from 'styled-components/native';
import RatingCompontent from './RatingCompontent';
import Icon from 'react-native-vector-icons/Feather';
import {Appearance} from 'react-native';
// @ts-ignore
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';

interface RecipeDetailsActionBarProps {
  avgRating: number;
  ratingCount: number;
  ownRating?: number;
  favorite: boolean;
  handleRating: (rating: number) => void;
  handleFavorize: () => void;
}

export default function RecipeDetailsActionBar({
  avgRating,
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
      <RatingCompontent
        ownRating={ownRating}
        avgRating={avgRating}
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
