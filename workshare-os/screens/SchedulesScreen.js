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
    // auth.getAllMemberStatisticsFromToday();
  }

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ButtonCustom onPress={refresh} buttonText="refresh" />
      <NavigationEvents
        onWillFocus={() => {
          auth.getAllMembersOfTheCompany();
        }}
      />
      <FlatList
        data={auth.orgMembers}
        renderItem={({ item }) =>
          <MembersStatus
            memberName={item.name.firstName + ' ' + item.name.lastName}
            status={item.status}
            onPress={() => navigation.navigate('Schedule', { userId: item.userId })}
          />}
        keyExtractor={item => item.userId.toString()}
      />
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
