import React from "react";
import {StyleSheet, View} from "react-native";
import MenuButton from "./MenuButton";

export default function MainMenu() {

    return (
        <View style={styles.container}>
            <View style={styles.topmenu}>
                <MenuButton style={{margin: 12}}
                            key={"my-recipes-button"}
                            text={"My Recipes"}
                            path={"myrecipes"}
                />
                <MenuButton style={{margin: 12}}
                            key={"all-recipes-button"}
                            text={"All Recipes"}
                            path={"recipes"}
                />
                <MenuButton style={{margin: 12}}
                            key={"cookbooks-button"}
                            text={"Cookbooks"}
                            path={"cookbooks"}
                />
                <MenuButton style={{margin: 12}}
                            key={"ad-recipe-button"}
                            text={"Ad Recipe"}
                            path={"addrecipe"}
                />
            </View>
            <View style={styles.bottommenu}>
                <MenuButton key={"settings-button"} text={"Settings"}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        height: "80%",
    },
    topmenu: {},
    bottommenu: {
        marginTop: "auto",
    }
})
