import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import constantColor from '../constants/Colors';
import SettingsButton from '../components/SettingsButton';

const ProfileScreen = ({ navigation }) => {

  const dummyPicuture = require('../assets/images/robot-prod.png');

  const navigator = (routeName) => {
    navigation.navigate(routeName)
  };

  return(
    <View style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <SettingsButton text='My account' iconPath={dummyPicuture} onPress={() => navigator('MyAccount')}/>
      <SettingsButton text='Change Email' iconPath={dummyPicuture} onPress={() => navigator('ChangeEmail')}/>
      <SettingsButton text='Change password' iconPath={dummyPicuture} onPress={() => navigator('ChangePassword')}/>
      <SettingsButton text='Leaves' iconPath={dummyPicuture} onPress={() => navigator('Leaves')}/>
      <SettingsButton text='Wage' iconPath={dummyPicuture} onPress={() => navigator('Wage')}/>
      <SettingsButton text='Settings' iconPath={dummyPicuture} onPress={() => navigator('Settings')}/>
      <SettingsButton text='Switch Company' iconPath={dummyPicuture} onPress={() => navigator('SwitchCompany')}/>
      <SettingsButton text='Log out' iconPath={dummyPicuture} onPress={() => alert('navigation comes later')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

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
