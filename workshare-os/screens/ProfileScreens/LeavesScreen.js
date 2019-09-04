import React from 'react';
import { View, StatusBar, Text, StyleSheet } from 'react-native';

const LeavesScreen = () => {

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content"/>
      <Text>Hello I'm a leave screen</Text>
    </View>
  );
}

LeavesScreen.navigationOptions =  {
  title: 'Leaves',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default LeavesScreen;
