import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import constantColor from '../constants/Colors';

const ProfileScreen = () => {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return <ExpoConfigView />;
}

ProfileScreen.navigationOptions = {
  title: 'Profile',
  headerStyle: {
    backgroundColor: constantColor.mainColor,
  },
  headerTitleStyle: {
    color: '#fff',
  },
};

export default ProfileScreen;
