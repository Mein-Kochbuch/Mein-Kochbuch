import React from 'react';
import {BackHandler, SafeAreaView, useColorScheme, View,} from 'react-native';

import {Colors,} from 'react-native/Libraries/NewAppScreen';
import {Route, Switch, useHistory} from "react-router-native";
import MainMenuPage from "./src/pages/MainMenuPage";
import MyRecipesPage from "./src/pages/MyRecipesPage";

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const history = useHistory();

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const backAction = () => {
        history.goBack()
    };

    BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
    );

    return (
        <SafeAreaView style={backgroundStyle}>
            <Switch>
                <View>
                    <Route path="/" exact>
                        <MainMenuPage/>
                    </Route>
                    <Route path="/myrecipes" exact>
                        <MyRecipesPage/>
                    </Route>
                </View>
            </Switch>
        </SafeAreaView>
    );
};

export default App;
