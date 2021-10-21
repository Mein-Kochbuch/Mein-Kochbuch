import React from "react";
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import globalStyles from "../styles/globalStyles";

export default function CookbookListItem({cookbook}) {
    const {border} = globalStyles();

    const styles = StyleSheet.create({
        container: {
            padding: 10,
            margin: 12,
            alignItems: "center",
            display: "flex",
        },
        text: {
            textAlign: "center",
            fontSize: 30,
        }
    })

    return (
        <TouchableOpacity style={{...border, ...styles.container}}>
            <Text style={styles.text}>
                {cookbook.name}
            </Text>
        </TouchableOpacity>
    )
}
