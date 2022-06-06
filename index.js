/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {NativeRouter} from 'react-router-native';
import AuthProvider from './src/context/AuthProvider';

const AppWrapper = () => {
  return (
    <NativeRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </NativeRouter>
  );
};

AppRegistry.registerComponent(appName, () => AppWrapper);
