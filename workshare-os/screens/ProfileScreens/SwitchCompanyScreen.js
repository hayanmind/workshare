import React from 'react';
import { View, StatusBar, Platform, Text, StyleSheet } from 'react-native';

const SwitchCompanyScreen = () => {

  return (
    <View style={styles.container}>
      <StatusBar barStyle={Platform.OS === 'ios' ? "dark-content" : "light-content"} />
      <Text>Hello I'm a switch company screen</Text>
    </View>
  );
}

SwitchCompanyScreen.navigationOptions = {
  title: 'SwitchCompany',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default SwitchCompanyScreen;
