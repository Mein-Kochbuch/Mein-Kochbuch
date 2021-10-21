import React from "react";
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {useHistory} from "react-router-native"
import globalStyles from "../styles/globalStyles";

export default function MenuButton({text, style, path}) {
    const history = useHistory()
    const {border} = globalStyles()

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

    const onPress = () => {
        history.push(`/${path}`)
    }

    return (
        <TouchableOpacity onPress={onPress} style={{...border, ...styles.container, ...style}}>
            <Text style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}
