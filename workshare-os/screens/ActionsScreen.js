import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import ClockInOutButton from '../components/ClockInOutButton';
import BreakButton from '../components/BreakButton';
import LeaveButton from '../components/LeaveButton';
import constantColor from '../constants/Colors';
import BarChartAction from '../components/BarChartAction';

const ActionsScreen = () => {

  return (
    <View style={styles.container}>
      <View style={styles.clockInButtonContainer}>
        <ClockInOutButton />
      </View>
      <View style={styles.breakLeaveButtonContainer}>
        <View style={styles.breakButton}>
          <BreakButton />
        </View>
        <View style={styles.leaveButton}>
          <LeaveButton />
        </View>
      </View>
      <View style={styles.barChartContainer}>
        <BarChartAction />
      </View>
      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>
          Day:
        </Text>
        <Text style={styles.tabBarInfoText}>
          Break:
        </Text>
        <Text style={styles.tabBarInfoText}>
          Week:
        </Text>
      </View>
    </View>
  );
}

ActionsScreen.navigationOptions = {
  title: 'Actions',
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
  },
  clockInButtonContainer: {
    flex: 3,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  breakLeaveButtonContainer: {
    flex: 3,
    flexDirection: 'row',
  },
  breakButton: {
    flex: 1,
    paddingLeft: 5,
    paddingRight: 2.5,
  },
  leaveButton: {
    flex: 1,
    paddingRight: 5,
    paddingLeft: 2.5,
  },
  barChartContainer: {
    flex: 3,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  tabBarInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: constantColor.registerColor,
  },
  tabBarInfoText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
});

export default ActionsScreen;
