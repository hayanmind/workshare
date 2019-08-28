import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import ActionsScreen from '../screens/ActionsScreen';
import SchedulesScreen from '../screens/SchedulesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MemberScheduleScreen from '../screens/MemberScheduleScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const ActionsStack = createStackNavigator(
  {
    Actions: ActionsScreen,
  },
  config
);

ActionsStack.navigationOptions = {
  tabBarLabel: 'Actions',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-stopwatch`
          : 'md-clock'
      }
    />
  ),
};

ActionsStack.path = '';

const SchedulesStack = createStackNavigator(
  {
    Schedules: SchedulesScreen,
    Schedule: MemberScheduleScreen,
  },
  config
);

SchedulesStack.navigationOptions = {
  tabBarLabel: 'Schedules',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-stats' : 'md-stats'} />
  ),
};

SchedulesStack.path = '';

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} />
  ),
};

ProfileStack.path = '';

const tabNavigator = createBottomTabNavigator({
  ActionsStack: ActionsStack,
  SchedulesStack: SchedulesStack,
  ProfileStack: ProfileStack,
});

tabNavigator.path = '';

export default tabNavigator;
