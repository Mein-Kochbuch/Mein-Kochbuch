/**
 * @format
 */

import React from "react";
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {NativeRouter} from "react-router-native";

const AppWrapper = () => {
    return (
        <NativeRouter>
            <App/>
        </NativeRouter>
    )
}

AppRegistry.registerComponent(appName, () => AppWrapper);
