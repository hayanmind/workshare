import React from 'react';
import { View, StatusBar, Platform, Text, StyleSheet } from 'react-native';

const WageScreen = () => {

  return (
    <View style={styles.container}>
      <StatusBar barStyle={Platform.OS === 'ios' ? "dark-content" : "light-content"}/>
      <Text>Hello I'm a wage screen</Text>
    </View>
  );
}

WageScreen.navigationOptions =  {
  title: 'Wage',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default WageScreen;
