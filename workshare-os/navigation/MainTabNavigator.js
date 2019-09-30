import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import ActionsScreen from '../screens/ActionsScreen';
import SchedulesScreen from '../screens/SchedulesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MemberScheduleScreen from '../screens/MemberScheduleScreen';

import MyAccountScreen from '../screens/ProfileScreens/MyAccountScreen';
import ChangeEmailScreen from '../screens/ProfileScreens/ChangeEmailScreen';
import ChangePasswordScreen from '../screens/ProfileScreens/ChangePasswordScreen';
import LeavesScreen from '../screens/ProfileScreens/LeavesScreen';
import WageScreen from '../screens/ProfileScreens/WageScreen';
import AddMemberToOrganization from '../screens/ProfileScreens/AddMemberToOrganization';
import SettingsScreen from '../screens/ProfileScreens/SettingsScreen';
import SwitchCompanyScreen from '../screens/ProfileScreens/SwitchCompanyScreen';
import constantColor from '../constants/Colors';

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
    MyAccount: MyAccountScreen,
    ChangeEmail: ChangeEmailScreen,
    ChangePassword: ChangePasswordScreen,
    Leaves: LeavesScreen,
    Wage: WageScreen,
    AddMember: AddMemberToOrganization,
    Settings: SettingsScreen,
    SwitchCompany: SwitchCompanyScreen,
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
},
  {
    tabBarOptions: {
      style: {
        backgroundColor: constantColor.mainColor,
      },
      labelStyle: {
        color: '#ffffff',
      },
    }
  }
);

tabNavigator.path = '';

export default tabNavigator;
