import React from 'react';
import { View, StatusBar, Text, StyleSheet } from 'react-native';

const MemberScheduleScreen = () => {

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text>Hello I'm a member schedule</Text>
    </View>
  );
}

MemberScheduleScreen.navigationOptions = {
  title: 'Member Schedule',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default MemberScheduleScreen;
