import React from "react";
import {View} from "react-native";
import styled from "styled-components/native";

export default function RecipeDetailsHeader({title, owner}) {
    return (
        <View>
            <TitleStyled>
                {title}
            </TitleStyled>
            <OwnerStyled>
                {owner?.username}
            </OwnerStyled>
        </View>
    )
}

const TitleStyled = styled.Text`
  text-align: center;
  font-size: 40px;
`

const OwnerStyled = styled.Text`
  text-align: center;
`
