import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import MainTabNavigator from './MainTabNavigator';
import RegisterScreen from '../screens/RegisterScreen';

export default createAppContainer(
  createSwitchNavigator({
    Login: {screen: LoginScreen},
    Register: {screen: RegisterScreen},
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
  })
);
