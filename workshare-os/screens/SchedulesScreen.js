import React from 'react';
import { ScrollView, StatusBar, Button, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import constantColor from '../constants/Colors';

  const SchedulesScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content"/>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
      <ExpoLinksView />
      <Button title={'To a Schedule'} onPress={() => navigation.navigate('Schedule')}/>
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
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

export default SchedulesScreen;
