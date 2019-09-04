import React from 'react';
import { View, StatusBar, Text, StyleSheet } from 'react-native';

const SwitchCompanyScreen = () => {

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content"/>
      <Text>Hello I'm a member schedule</Text>
    </View>
  );
}

SwitchCompanyScreen.navigationOptions =  {
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
