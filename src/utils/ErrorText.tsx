import React from "react";
import styled from "styled-components/native";

export default function ErrorText({text}) {
    return (
        <StyledText>
            {text}
        </StyledText>
    )
}
const StyledText = styled.Text`
  color: red;
`
