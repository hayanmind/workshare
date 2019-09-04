import React from 'react';
import { View, StatusBar, Text, StyleSheet } from 'react-native';

const SettingsScreen = () => {

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content"/>
      <Text>Hello I'm a settings screen</Text>
    </View>
  );
}

SettingsScreen.navigationOptions =  {
  title: 'Settings',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default SettingsScreen;
