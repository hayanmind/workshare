import React from 'react';
import { View, StatusBar, Text, StyleSheet } from 'react-native';

const MyAccountScreen = () => {

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content"/>
      <Text>Hello I'm a my account screen</Text>
    </View>
  );
}

MyAccountScreen.navigationOptions =  {
  title: 'My Account',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default MyAccountScreen;
