import React from "react";
import {StyleSheet, Text, TouchableOpacity, useColorScheme} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";
import {useHistory} from "react-router-native"

export default function MenuButton({text, style, path}) {
    const isDarkMode = useColorScheme() === 'dark';
    const history = useHistory()

    const styles = StyleSheet.create({
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            width: "80%",
            borderStyle: "solid",
            borderColor: isDarkMode ? Colors.lighter : Colors.darker,
            borderRadius: 10,
            borderWidth: 2,
            minWidth: 300,
        },
        text: {
            textAlign: "center",
            fontSize: 30,
        }
    })

    const onPress = () => {
        history.push(`/${path}`)
    }

    return (
        <TouchableOpacity onPress={onPress} style={{...styles.container, ...style}}>
            <Text style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}
