import React from "react";
import styled from "styled-components/native/dist/styled-components.native.esm";
import {Colors} from "react-native/Libraries/NewAppScreen";
import {useColorScheme} from "react-native-appearance";
import { useHistory } from "react-router-native";

export default function RegisterButton() {
    const history = useHistory
    const isDarkMode = useColorScheme() === 'dark';

    const onPress = () => {
      history.push(`/register`)
    }

    return (
        <StyledButton
            isDarkMode={isDarkMode}
            onPress={onPress}>
            <StyledText>
                Register
            </StyledText>
        </StyledButton>
    )
}

const StyledText = styled.Text`
  text-align: center;
  font-size: 30px;
`

const StyledButton = styled.TouchableOpacity`
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
