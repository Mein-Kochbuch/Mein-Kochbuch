import React from "react";
import styled from "styled-components/native";
import {KeyboardTypeOptions, Text} from "react-native";
// @ts-ignore
import Colors from "react-native/Libraries/NewAppScreen/components/Colors"
import {useColorScheme} from "react-native-appearance";

interface InputFieldProps {
    title: string,
    onChangeText: (value: string) => void,
    placeholder: string,
    value: string,
    keyboardType?: KeyboardTypeOptions
    secureTextEntry?: boolean
}

export default function InputField({title, ...props}: InputFieldProps) {

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

interface StyledTextInputProps {
    isDarkMode: boolean,
    onChangeText: (value: string) => void,
    placeholder: string,
    value: string,
    keyboardType?: string
    secureTextEntry?: boolean
}

const StyledTextInput = styled.TextInput<StyledTextInputProps>`
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