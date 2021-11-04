import React from "react";
import {useHistory} from "react-router-native";
import styled from "styled-components/native";
import {useColorScheme} from "react-native-appearance";
import {Colors} from "react-native/Libraries/NewAppScreen";

export default function MenuButton({text, path}) {
    const history = useHistory()
    const isDarkMode = useColorScheme() === 'dark';

    const onPress = (to) => {
        history.push(`/${to}`)
    }

    return (
        <StyledTouchableOpacity isDarkMode={isDarkMode} onPress={() => onPress(path)}>
            <StyledText>
                {text}
            </StyledText>
        </StyledTouchableOpacity>
    )
}

const StyledText = styled.Text`
  text-align: center;
  font-size: 30px;
`

const StyledTouchableOpacity = styled.TouchableOpacity`
  margin: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  min-width: 300px;
  border-style: solid;
  border-color: ${props => props.isDarkMode ? Colors.lighter : Colors.darker};
  border-radius: 10px;
  border-width: 2px;
`