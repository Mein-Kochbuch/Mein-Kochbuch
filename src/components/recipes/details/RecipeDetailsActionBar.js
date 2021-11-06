import React from "react";
import styled from "styled-components/native";
import RatingCompontent from "./RatingCompontent";
import Icon from "react-native-vector-icons/Feather";
import {useColorScheme} from "react-native-appearance";
import Colors from "react-native/Libraries/NewAppScreen/components/Colors";

export default function RecipeDetailsActionBar({
                                                   avgRating,
                                                   ratingCount,
                                                   ownRating,
                                                   handleRating,
                                                   favorite,
                                                   handleFavorize
                                               }) {
    const isDarkMode = useColorScheme() === 'dark';
    const dislikeColor = isDarkMode ? Colors.lighter : Colors.darker

    return (
        <ActionBar>
            <RatingCompontent
                ownRating={ownRating}
                avgRating={avgRating}
                ratingCount={ratingCount}
                handleRating={handleRating}/>
            <Icon name={"heart"} size={35} color={favorite ? "#f10f0f" : dislikeColor} onPress={handleFavorize}/>
        </ActionBar>
    )
}

const ActionBar = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin: 12px;
`
