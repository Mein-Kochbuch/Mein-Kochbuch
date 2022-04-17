import React from 'react';
import styled from 'styled-components/native';

export type ErrorTextProps = {
  text: string;
};

export default function ErrorText({text}: ErrorTextProps) {
  return <StyledText>{text}</StyledText>;
}
const StyledText = styled.Text`
  color: red;
`;
