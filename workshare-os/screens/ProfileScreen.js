import React from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native';
import constantColor from '../constants/Colors';
import SettingsButton from '../components/SettingsButton';
import { useAuth } from '../customHook/useAuth';

const ProfileScreen = ({ navigation }) => {

  const auth = useAuth();

  const navigator = (routeName) => {
    navigation.navigate(routeName)
  };

  const signout = () => {
    auth.signOut();
    navigator('Login');
  }

  const dummyPicuture = require('../assets/images/robot-prod.png');

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonLabel}>Users Name</Text>
        <SettingsButton text='My account' iconPath={dummyPicuture} onPress={() => navigator('MyAccount')} />
        <SettingsButton text='Change Email' iconPath={dummyPicuture} onPress={() => navigator('ChangeEmail')} />
        <SettingsButton text='Change password' iconPath={dummyPicuture} onPress={() => navigator('ChangePassword')} />
      </View>
      <View style={styles.buttonContainerCompany}>
        <Text style={styles.buttonLabel}>Company</Text>
        <SettingsButton text='Leaves' iconPath={dummyPicuture} onPress={() => navigator('Leaves')} />
        <SettingsButton text='Wage' iconPath={dummyPicuture} onPress={() => navigator('Wage')} />
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonLabel}>Settings</Text>
        <SettingsButton text='Settings' iconPath={dummyPicuture} onPress={() => navigator('Settings')} />
        <SettingsButton text='Switch Company' iconPath={dummyPicuture} onPress={() => navigator('SwitchCompany')} />
        <SettingsButton text='Log out' iconPath={dummyPicuture} onPress={() => signout()} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    marginVertical: 10,
    flex: 3,
  },
  buttonContainerCompany: {
    marginVertical: 10,
    flex: 2,
  },
  buttonLabel: {
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 5,
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
