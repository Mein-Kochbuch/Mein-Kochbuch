import React from "react";
import styled from "styled-components/native";
import {Rating} from "react-native-ratings";
import {useColorScheme} from "react-native-appearance";
import Colors from "react-native/Libraries/NewAppScreen/components/Colors";

export default function RecipeDetailsActionBar() {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <ActionBar>
            <RatingStyled
                type={"custom"}
                tintColor={isDarkMode ? Colors.darker : Colors.lighter}
            />
        </ActionBar>
    )
}
const RatingStyled = styled(Rating)`
  padding: 12px;
  width: 250px;
`

const ActionBar = styled.View`
  display: flex;
  margin: 12px;
  height: 100px;
  border-radius: 10px;
  border-width: 1px;
  border-color: #fff;
`
