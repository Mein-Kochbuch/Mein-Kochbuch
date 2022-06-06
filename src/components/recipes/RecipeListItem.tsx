import React from 'react';
import styled from 'styled-components/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Appearance, ListRenderItemInfo} from 'react-native';
import {useHistory} from 'react-router-native';
import {RecipePreview} from '../../models/RecipePreview';

export type RecipeListItemProps = {
  listItem: ListRenderItemInfo<RecipePreview>;
};

export default function RecipeListItem({listItem}: RecipeListItemProps) {
  const history = useHistory();
  const isDarkMode = Appearance.getColorScheme() === 'dark';

  const recipe = listItem.item;
  const imageSource = recipe.thumbnail?.url
    ? {uri: recipe.thumbnail.url}
    : require('../../../resources/platzhalter.png');

  const handleOnPress = () => {
    history.push('/recipes/' + recipe.id);
  };

  return (
    <StyledTouchableOpacity isDarkMode={isDarkMode} onPress={handleOnPress}>
      <ImageStyled source={imageSource} />
      <StyledTest numberOfLines={2} ellipsizeMode={'middle'}>
        {recipe.title}
      </StyledTest>
    </StyledTouchableOpacity>
  );
}

const ImageStyled = styled.Image`
  height: 100px;
  width: 100px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #68a0cf;
  border-radius: 10px;
  border-width: 1px;
  border-color: #fff;
`;

const StyledTest = styled.Text`
  text-align: center;
  font-size: 24px;
  margin-left: 12px;
  max-width: 70%;
`;

interface StyledTouchableOpacityProps {
  isDarkMode: boolean;
}

const StyledTouchableOpacity = styled.TouchableOpacity<StyledTouchableOpacityProps>`
  padding: 12px;
  margin: 12px;
  height: 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-style: solid;
  border-color: ${props => (props.isDarkMode ? Colors.lighter : Colors.darker)};
  border-radius: 10px;
  border-width: 2px;
`;
