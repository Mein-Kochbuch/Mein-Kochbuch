import React from "react";
import styled from "styled-components/native/dist/styled-components.native.esm";

export default function RecipeDetailsPortions({content, style}) {
    return (
        <ViewStyled style={style}>
            <TextStyled>
                {content}
            </TextStyled>
        </ViewStyled>
    )
}

const ViewStyled = styled.View`
  width: 150px;
`

const TextStyled = styled.Text`
  font-size: 18px;
  padding: 12px;
`
