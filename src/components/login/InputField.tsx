import React from 'react';
import styled from 'styled-components/native';
import {KeyboardTypeOptions, Text} from 'react-native';
// @ts-ignore
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import {Appearance} from 'react-native';

interface InputFieldProps {
  title: string;
  errorText?: string;
  onChangeText: (value: string) => void;
  placeholder: string;
  value: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
}

export default function InputField({
  title,
  errorText,
  ...props
}: InputFieldProps) {
  const isDarkMode = Appearance.getColorScheme() === 'dark';

  return (
    <StyledView>
      <Text style={errorText ? {color: '#ff0000'} : {}}>
        {errorText ? errorText : title}
      </Text>
      <StyledTextInput isDarkMode={isDarkMode} {...props} />
    </StyledView>
  );
}

const StyledView = styled.View`
  margin: 12px;
`;

interface StyledTextInputProps {
  isDarkMode: boolean;
  onChangeText: (value: string) => void;
  placeholder: string;
  value: string;
  keyboardType?: string;
  secureTextEntry?: boolean;
}

const StyledTextInput = styled.TextInput<StyledTextInputProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  min-width: 300px;
  border-style: solid;
  border-color: ${props => (props.isDarkMode ? Colors.lighter : Colors.darker)};
  border-radius: 10px;
  border-width: 2px;
`;
