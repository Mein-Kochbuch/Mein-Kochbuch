import React from "react";
import styled from "styled-components/native";

interface RecipeDetailsImageGalleryProps {
    images?: { image: string }[]
}

export default function RecipeDetailsImageGallery({images}: RecipeDetailsImageGalleryProps) {
    const imageSource = (images && images.length > 0) ? {uri: images[0].image} : require("../../../../resources/platzhalter.png")

    return (
        <ImageGallery>
            <ImageStyled source={imageSource}/>
        </ImageGallery>
    )
}

const ImageGallery = styled.View`
  margin: 12px;
  height: 300px;
`

const ImageStyled = styled.Image`
  width: 100%;
  height: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #68a0cf;
  border-radius: 10px;
  border-width: 1px;
  border-color: #fff;
`
