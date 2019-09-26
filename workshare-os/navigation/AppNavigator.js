import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import RegisterCompany from '../screens/CompanyRegisterScreen2';
import MainTabNavigator from './MainTabNavigator';
import RegisterTabNavigator from './RegisterTagNavigator';

const LoginRegisterNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null
      },
    },
    Register: RegisterTabNavigator
  },
);

export default createAppContainer(
  createSwitchNavigator({
    Login: LoginRegisterNavigator,
    RegisterCompany: RegisterCompany,
    Main: MainTabNavigator,
  })
);
