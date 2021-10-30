import React from "react";
import MainMenu from "../mainmenu/MainMenu";
import Header from "../list/Header";
import {StyleSheet, View} from "react-native";

export default function MainMenuPage() {


    return (
        <View style={styles.container}>
            <Header title={"My-Cookbook"}/>
            <MainMenu/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
    },
})
