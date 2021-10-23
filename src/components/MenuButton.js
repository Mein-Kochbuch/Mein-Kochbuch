import React from "react";
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import globalStyles from "../styles/globalStyles";
import {useHistory} from "react-router-native";

export default function MenuButton({text, style, path}) {
    const {border} = globalStyles()
    const history = useHistory()

    const styles = StyleSheet.create({
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            width: "80%",
            minWidth: 300,
        },
        text: {
            textAlign: "center",
            fontSize: 30,
        }
    })

    const onPress = (to) => {
        history.push(`/${to}`)
    }

    return (
        <TouchableOpacity onPress={() => onPress(path)} style={{...border, ...styles.container, ...style}}>
            <Text style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}
