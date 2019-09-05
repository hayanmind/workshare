import React from 'react';
import { ScrollView, StatusBar, View, Button, StyleSheet } from 'react-native';
import MembersStatus from '../components/MembersStatus';
import constantColor from '../constants/Colors';

  const SchedulesScreen = ({navigation}) => {

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content"/>
        <MembersStatus onPress={() => navigation.navigate('Schedule')}/>
        <MembersStatus onPress={() => navigation.navigate('Schedule')}/>
        <MembersStatus onPress={() => navigation.navigate('Schedule')}/>
        <MembersStatus onPress={() => navigation.navigate('Schedule')}/>
        <MembersStatus onPress={() => navigation.navigate('Schedule')}/>
        <MembersStatus onPress={() => navigation.navigate('Schedule')}/>
        <MembersStatus onPress={() => navigation.navigate('Schedule')}/>
        <MembersStatus onPress={() => navigation.navigate('Schedule')}/>
        <MembersStatus onPress={() => navigation.navigate('Schedule')}/>
        <MembersStatus onPress={() => navigation.navigate('Schedule')}/>
        <MembersStatus onPress={() => navigation.navigate('Schedule')}/>
    </ScrollView>
  );
}

SchedulesScreen.navigationOptions = {
  title: 'Member Schedules',
  headerStyle: {
    backgroundColor: constantColor.mainColor,
  },
  headerTitleStyle: {
    color: '#fff',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 5,
  },
});

export default SchedulesScreen;
