import React from 'react';
import { View, StatusBar, Text, StyleSheet } from 'react-native';

const ChangePasswordScreen = () => {

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content"/>
      <Text>Hello I'm a change password screen</Text>
    </View>
  );
}

ChangePasswordScreen.navigationOptions =  {
  title: 'Change Password',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default ChangePasswordScreen;
