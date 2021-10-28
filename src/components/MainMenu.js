import React from "react";
import {View} from "react-native";
import MenuButton from "./MenuButton";
import styled from "styled-components/native";

export default function MainMenu() {

    return (
        <StyledMenu>
            <View>
                <MenuButton
                    key={"my-recipes-button"}
                    text={"My Recipes"}
                    path={"myrecipes"}
                />
                <MenuButton
                    key={"all-recipes-button"}
                    text={"All Recipes"}
                    path={"recipes"}
                />
                <MenuButton
                    key={"cookbooks-button"}
                    text={"Cookbooks"}
                    path={"cookbooks"}
                />
                <MenuButton
                    key={"ad-recipe-button"}
                    text={"Ad Recipe"}
                    path={"addrecipe"}
                />
            </View>
            <StyledBottomMenu>
                <MenuButton key={"settings-button"} text={"Settings"} path={"settings"}/>
            </StyledBottomMenu>
        </StyledMenu>
    )
}

const StyledBottomMenu = styled.View`
  margin-top: auto;
`

const StyledMenu = styled.View`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80%;
`
