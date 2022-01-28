import React from "react";
import {StyleSheet, Text, View} from "react-native";

interface HeaderProps {
    title: string
}

export default function Header({title}: HeaderProps) {

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
