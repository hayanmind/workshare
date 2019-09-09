import React from 'react';
import { ScrollView, StatusBar, StyleSheet } from 'react-native';
import MembersStatus from '../components/MembersStatus';
import constantColor from '../constants/Colors';

const SchedulesScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <MembersStatus memberName='User Name - break' onPress={() => navigation.navigate('Schedule')} status='break' />
      <MembersStatus memberName='User Name - available' onPress={() => navigation.navigate('Schedule')} status='available' />
      <MembersStatus memberName='User Name - busy' onPress={() => navigation.navigate('Schedule')} status='busy' />
      <MembersStatus memberName='User Name - notClockedIn' onPress={() => navigation.navigate('Schedule')} />
      <MembersStatus memberName='User Name - clocked out' onPress={() => navigation.navigate('Schedule')} status='clockedOut' />
      <MembersStatus memberName='User Name - leave' onPress={() => navigation.navigate('Schedule')} status='leave' />
      <MembersStatus memberName='User Name - available' onPress={() => navigation.navigate('Schedule')} status='available' />
      <MembersStatus memberName='User Name - available' onPress={() => navigation.navigate('Schedule')} status='available' />
      <MembersStatus memberName='User Name - notClockedIn' onPress={() => navigation.navigate('Schedule')} />
      <MembersStatus memberName='User Name - break' onPress={() => navigation.navigate('Schedule')} status='break' />
      <MembersStatus memberName='User Name - notClockedIn' onPress={() => navigation.navigate('Schedule')} />
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
