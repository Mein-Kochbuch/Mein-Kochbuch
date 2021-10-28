import React from "react";
import styled from "styled-components/native";
import {Colors} from "react-native/Libraries/NewAppScreen";
import {useColorScheme} from "react-native-appearance";

export default function CookbookListItem({cookbook}) {

    const isDarkMode = useColorScheme() === 'dark';

    return (
        <StyledTouchableOpacity isDarkMode={isDarkMode}>
            <StyledTest>
                {cookbook.name}
            </StyledTest>
        </StyledTouchableOpacity>
    )
}

const StyledTest = styled.Text`
  text-align: center;
  font-size: 30px;
`

const StyledTouchableOpacity = styled.TouchableOpacity`
  padding: 10px;
  margin: 12px;
  display: flex;
  align-items: center;
  border-style: solid;
  border-color: ${props => props.isDarkMode ? Colors.lighter : Colors.darker};
  border-radius: 10px;
  border-width: 2px;
`
