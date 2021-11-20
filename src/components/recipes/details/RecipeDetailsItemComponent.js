import React from "react";
import styled from "styled-components/native";
import {View} from "react-native";

export default function RecipeDetailsItemComponent({content, style}) {
    return (
        <View style={style}>
            <TextStyled>
                {content}
            </TextStyled>
        </View>
    )
}

const TextStyled = styled.Text`
  font-size: 18px;
  padding: 12px;
`
