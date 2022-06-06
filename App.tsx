import React from 'react';
import {Appearance, BackHandler} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Route, Switch, useHistory} from 'react-router-native';
import MainMenuPage from './src/components/pages/MainMenuPage';
import MyRecipesPage from './src/components/pages/MyRecipesPage';
import RecipesPage from './src/components/pages/RecipesPage';
import styled from 'styled-components/native';
import useRecipePreviews from './src/hooks/useRecipePreviews';
import RecipeDetailsPage from './src/components/pages/RecipeDetailsPage';
import useRecipeDetails from './src/hooks/useRecipeDetails';
import LoginPage from './src/components/pages/LoginPage';
import RegisterPage from './src/components/pages/RegisterPage';
import useCookbooks from './src/hooks/useCookbooks';

const App = () => {
  const {recipePreviews, setFilter, loadNext} = useRecipePreviews();
  const {
    recipeDetails,
    getRecipeDetailsById,
    favorizeRecipeById,
    rateRecipeById,
  } = useRecipeDetails();
  const {cookbooks} = useCookbooks();
  const isDarkMode = Appearance.getColorScheme() === 'dark';
  const history = useHistory();

  const backAction = () => {
    history.goBack();
  };

  BackHandler.addEventListener('hardwareBackPress', () => {
    backAction();
    return true;
  });

  return (
    <SafeAreaViewStyled isDarkMode={isDarkMode}>
      <Switch>
        <Route path="/" exact>
          <MainMenuPage />
        </Route>
        <Route path="/myrecipes" exact>
          <MyRecipesPage cookbooks={cookbooks} />
        </Route>
        <Route path="/recipes" exact>
          <RecipesPage
            recipes={recipePreviews}
            loadNext={loadNext}
            title={'All Recipes'}
          />
        </Route>
        <Route path={'/recipes/:id'}>
          <RecipeDetailsPage
            getRecipeDetailsById={getRecipeDetailsById}
            recipeDetails={recipeDetails}
            favorizeRecipeById={favorizeRecipeById}
            rateRecipeById={rateRecipeById}
          />
        </Route>
        <Route path={'/login'}>
          <LoginPage />
        </Route>
        <Route path={'/register'}>
          <RegisterPage />
        </Route>
      </Switch>
    </SafeAreaViewStyled>
  );
};

export default App;

interface SafeAreaViewStyledProps {
  isDarkMode: boolean;
}

const SafeAreaViewStyled = styled.SafeAreaView<SafeAreaViewStyledProps>`
  background-color: ${props =>
    props.isDarkMode ? Colors.darker : Colors.lighter};
  height: 100%;
`;
