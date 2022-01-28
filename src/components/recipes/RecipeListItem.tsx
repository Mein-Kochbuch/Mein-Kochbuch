import React from "react";
import styled from "styled-components/native";
import {Colors} from "react-native/Libraries/NewAppScreen";
import {useColorScheme} from "react-native-appearance";
import {useHistory} from "react-router-native";
import {RecipePreview} from "../../models/RecipePreview";

interface RecipeListItemProps {
    item: {
        item: RecipePreview
    }
}

export default function RecipeListItem({item}: RecipeListItemProps) {
    const history = useHistory()
    const isDarkMode = useColorScheme() === 'dark';

    const recipe = item.item
    const imageSource = recipe.thumbnail_url ? {uri: recipe.thumbnail_url} : require("../../../resources/platzhalter.png")

    const handleOnPress = () => {
        history.push("/recipes/" + recipe.pk)
    }

    return (
        <StyledTouchableOpacity isDarkMode={isDarkMode} onPress={handleOnPress}>
            <ImageStyled source={imageSource}/>
            <StyledTest numberOfLines={2} ellipsizeMode={"middle"}>
                {recipe.title}
            </StyledTest>
        </StyledTouchableOpacity>
    )
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
`

const StyledTest = styled.Text`
  text-align: center;
  font-size: 24px;
  margin-left: 12px;
  max-width: 70%;
`

interface StyledTouchableOpacityProps {
    isDarkMode: boolean
}

const StyledTouchableOpacity = styled.TouchableOpacity<StyledTouchableOpacityProps>`
  padding: 12px;
  margin: 12px;
  height: 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-style: solid;
  border-color: ${props => props.isDarkMode ? Colors.lighter : Colors.darker};
  border-radius: 10px;
  border-width: 2px;
`
