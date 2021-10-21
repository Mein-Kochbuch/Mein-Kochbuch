import {Colors} from "react-native/Libraries/NewAppScreen";
import {StyleSheet, useColorScheme} from "react-native";

export default function globalStyles() {
    const isDarkMode = useColorScheme() === 'dark';

    return StyleSheet.create({
        border: {
            borderStyle: "solid",
            borderColor: isDarkMode ? Colors.lighter : Colors.darker,
            borderRadius: 10,
            borderWidth: 2,
        },
    })
}
