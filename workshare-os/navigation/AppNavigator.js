import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import RegisterCompany from '../screens/CompanyRegisterScreen';
import UserRegisterScreen from '../screens/UserRegisterScreen';
import MainTabNavigator from './MainTabNavigator';

const LoginRegisterNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null
      },
    },
    RegisterCompany: {
      screen: RegisterCompany,
      navigationOptions: {
        title: 'Register a Company'
      },
    },
    Register: {
      screen: UserRegisterScreen,
      navigationOptions: {
        title: 'Register an Account'
      },
    },
  },
);

export default createAppContainer(
  createSwitchNavigator({
    Login: LoginRegisterNavigator,
    Main: MainTabNavigator,
  })
);
