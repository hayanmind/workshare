import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';

import UserRegisterScreen from '../screens/UserRegisterScreen';
import CompanyRegisterScreen from '../screens/CompanyRegisterScreen';
import constantColor from '../constants/Colors';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const UserStack = createStackNavigator(
  {
    User: UserRegisterScreen,
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  },
  config,
);

UserStack.navigationOptions = {
  tabBarLabel: 'Person',
};

UserStack.path = '';

const CompanyStack = createStackNavigator(
  {
    Company: CompanyRegisterScreen,
  },
  {
    defaultNavigationOptions: {
      header: null
    },
  },
  config,
);

CompanyStack.navigationOptions = {
  tabBarLabel: 'Company',
};

CompanyStack.path = '';

const tabNavigator = createMaterialTopTabNavigator({
  UserStack: UserStack,
  CompanyStack: CompanyStack,
},
  {
  tabBarOptions: {
    style: {
      backgroundColor: constantColor.mainColor,
    },
    indicatorStyle: {
      borderBottomColor: '#ffffff',
      borderBottomWidth: 2,
    },
  }}
);

tabNavigator.path = '';

export default tabNavigator;
