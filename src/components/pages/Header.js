import React from "react";
import {StyleSheet, Text, View} from "react-native";

export default function Header({title}) {

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>
                {title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 12,
        display: "flex",
        justifyContent: "center",
    },
    heading: {
        textAlign: "center",
        fontSize: 50,
    }
})
