import React from "react";
import styled from "styled-components/native";
import {Text} from "react-native";
import Colors from "react-native/Libraries/NewAppScreen/components/Colors";
import {useColorScheme} from "react-native-appearance";

export default function InputField({title, ...props}) {

    const isDarkMode = useColorScheme() === 'dark';

    return (
        <StyledView>
            <Text>
                {title}
            </Text>
            <StyledTextInput
                isDarkMode={isDarkMode}
                {...props}/>
        </StyledView>
    )
}

const StyledView = styled.View`
  margin: 12px;
`

const StyledTextInput = styled.TextInput`
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
