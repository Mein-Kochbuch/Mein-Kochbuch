import React from "react";
import styled from "styled-components/native";
import {Colors} from "react-native/Libraries/NewAppScreen";
import {useColorScheme} from "react-native-appearance";

export default function CookbookListItem({cookbook}) {

    const isDarkMode = useColorScheme() === 'dark';
    const imageSource = cookbook.thumbnail ? {uri: cookbook.thumbnail} : require("../../resources/platzhalter.png")

    return (
        <StyledTouchableOpacity isDarkMode={isDarkMode}>
            <StyledImage source={imageSource}/>
            <StyledText numberOfLines={3} ellipsizeMode={"clip"}>
                {cookbook.name}
            </StyledText>
        </StyledTouchableOpacity>
    )
}

const StyledImage = styled.Image`
  height: 100px;
  width: 100px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #68a0cf;
  border-radius: 10px;
  border-width: 1px;
  border-color: #fff;
`

const StyledText = styled.Text`
  max-width: 70%;
  margin-left: 12px;
  text-align: center;
  font-size: 30px;
`

const StyledTouchableOpacity = styled.TouchableOpacity`
  padding: 10px;
  margin: 12px;
  display: flex;
  align-items: center;
  flex-direction: row;
  border-style: solid;
  border-color: ${props => props.isDarkMode ? Colors.lighter : Colors.darker};
  border-radius: 10px;
  border-width: 2px;
`
