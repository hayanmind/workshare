import React from 'react';
import { ScrollView, StatusBar, FlatList, StyleSheet } from 'react-native';
import { useAuth } from '../customHook/useAuth';
import { NavigationEvents } from "react-navigation";
import MembersStatus from '../components/MembersStatus';
import ButtonCustom from '../components/ButtonCustom';
import constantColor from '../constants/Colors';

const SchedulesScreen = ({ navigation }) => {

  const auth = useAuth();

  const refresh = () => {
    auth.getAllMembersOfTheCompany();
  }

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ButtonCustom onPress={refresh} buttonText="refresh" />
      <NavigationEvents
        onWillFocus={payload => {
          console.log("will focus", payload);
          auth.getAllMembersOfTheCompany();
        }}
      />
      <FlatList
        data={auth.orgMembers}
        renderItem={({ item }) =>
          <MembersStatus
            memberName={item.name.firstName + ' ' + item.name.lastName}
            status={item.status}
            onPress={() => navigation.navigate('Schedule', {userId: item.userId})}
          />}
        keyExtractor={item => item.userId.toString()}
      />
      {/* <MembersStatus memberName='User Name - break' onPress={() => navigation.navigate('Schedule')} status='break' />
      <MembersStatus memberName='User Name - available' onPress={() => navigation.navigate('Schedule')} status='available' />
      <MembersStatus memberName='User Name - busy' onPress={() => navigation.navigate('Schedule')} status='busy' />
      <MembersStatus memberName='User Name - notClockedIn' onPress={() => navigation.navigate('Schedule')} />
      <MembersStatus memberName='User Name - clocked out' onPress={() => navigation.navigate('Schedule')} status='clockedOut' />
      <MembersStatus memberName='User Name - leave' onPress={() => navigation.navigate('Schedule')} status='leave' />
      <MembersStatus memberName='User Name - available' onPress={() => navigation.navigate('Schedule')} status='available' />
      <MembersStatus memberName='User Name - available' onPress={() => navigation.navigate('Schedule')} status='available' />
      <MembersStatus memberName='User Name - notClockedIn' onPress={() => navigation.navigate('Schedule')} />
      <MembersStatus memberName='User Name - break' onPress={() => navigation.navigate('Schedule')} status='break' />
      <MembersStatus memberName='User Name - notClockedIn' onPress={() => navigation.navigate('Schedule')} /> */}
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
