import React from 'react';
import {BackHandler, useColorScheme} from 'react-native';

import {Colors,} from 'react-native/Libraries/NewAppScreen';
import {Route, Switch, useHistory} from "react-router-native";
import MainMenuPage from "./src/components/pages/MainMenuPage";
import MyRecipesPage from "./src/components/pages/MyRecipesPage";
import RecipesPage from "./src/components/pages/RecipesPage";
import styled from "styled-components/native";
import useRecipes from "./src/hooks/useRecipes";

const App = () => {
    const {recipes, setFilter, loadNext} = useRecipes()
    const isDarkMode = useColorScheme() === 'dark';
    const history = useHistory();

    const backAction = () => {
        history.goBack()
    };

    BackHandler.addEventListener(
        "hardwareBackPress",
        () => {
            backAction()
            return true
        }
    );

    return (
        <SafeAreaViewStyled isDarkMode={isDarkMode}>
            <Switch>
                <Route path="/" exact>
                    <MainMenuPage/>
                </Route>
                <Route path="/myrecipes" exact>
                    <MyRecipesPage/>
                </Route>
                <Route path="/recipes" exact>
                    <RecipesPage recipes={recipes} setFilter={setFilter} loadNext={loadNext} title={"All Recipes"}/>
                </Route>
            </Switch>
        </SafeAreaViewStyled>
    );
};

export default App;

const SafeAreaViewStyled = styled.SafeAreaView`
  background-color: ${props => props.isDarkMode ? Colors.darker : Colors.lighter};
  height: 100%;
`
