import React from 'react';
import Header from './Header';
import {ScrollView, StyleSheet} from 'react-native';
import MyRecipesList from '../recipes/MyRecipesList';
import {Cookbook} from '../../models/Cookbook';

export type MyRecipesPageProps = {
  cookbooks: Cookbook[];
};

export default function MyRecipesPage({cookbooks}: MyRecipesPageProps) {
  return (
    <ScrollView style={styles.container}>
      <Header title={'My Recipes'} />
      <MyRecipesList cookbooks={cookbooks} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});
