import React from 'react';
import styled from 'styled-components/native';

interface RecipeDetailsPortionsProps {
  content: string;
  style?: {};
}

export default function RecipeDetailsPortions({
  content,
  style,
}: RecipeDetailsPortionsProps) {
  return (
    <ViewStyled style={style}>
      <TextStyled>{content}</TextStyled>
    </ViewStyled>
  );
}

const ViewStyled = styled.View`
  width: 150px;
`;

const TextStyled = styled.Text`
  font-size: 18px;
  padding: 12px;
`;
