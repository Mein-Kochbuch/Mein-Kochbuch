import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {ChefUser} from '../../../models/ChefUser';

interface RecipeDetailsHeaderProps {
  title: string;
  owner?: ChefUser;
}

export default function RecipeDetailsHeader({
  title,
  owner,
}: RecipeDetailsHeaderProps) {
  return (
    <View>
      <TitleStyled>{title}</TitleStyled>
      <OwnerStyled>{owner?.name}</OwnerStyled>
    </View>
  );
}

const TitleStyled = styled.Text`
  text-align: center;
  font-size: 40px;
`;

const OwnerStyled = styled.Text`
  text-align: center;
`;
