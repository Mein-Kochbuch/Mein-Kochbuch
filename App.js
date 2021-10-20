import React from 'react';
import {SafeAreaView, useColorScheme, View,} from 'react-native';

import {Colors,} from 'react-native/Libraries/NewAppScreen';
import {NativeRouter, Route, Switch} from "react-router-native";
import MainMenuPage from "./src/pages/MainMenuPage";

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <NativeRouter>
                <Switch>
                    <View>
                        <Route path="/" exact>
                            <MainMenuPage/>
                        </Route>
                    </View>
                </Switch>
            </NativeRouter>
        </SafeAreaView>
    );
};

export default App;
