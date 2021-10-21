import React from "react";
import Header from "../components/Header";
import {ScrollView, StyleSheet} from "react-native";
import MyRecipesList from "../components/MyRecipesList";
import useCookbooks from "../hooks/useCookbooks";

export default function MyRecipesPage() {
    const {cookbooks} = useCookbooks()

    return (
        <ScrollView style={styles.container}>
            <Header title={"My Recipes"}/>
            <MyRecipesList cookbooks={cookbooks}/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
    },
})
