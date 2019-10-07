import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';
import { useAuth } from '../customHook/useAuth';

import ClockInOutButton from '../components/ClockInOutButton';
import BreakButton from '../components/BreakButton';
import LeaveButton from '../components/LeaveButton';
import constantColor from '../constants/Colors';
import BarChartAction from '../components/BarChartAction';

const ActionsScreen = () => {

  const auth = useAuth();
  const lastState = (auth.usersDocument.status.type);
  const clockInOutButtonEnabled = (() => {
    switch (lastState) {
      case 'clocked-in':
        return true;
      case 'clocked-out':
        return true;
      case 'break-start':
        return false;
      case 'break-end':
        // return false;
        return true;
      default:
    }
    // (lastState === 'break-end' || lastState === 'clocked-out' || lastState === 'clocked-in') ? true : false;
  })();
  const isClockInButton = (() => {
    switch (lastState) {
      case 'clocked-in':
        return false;
      case 'clocked-out':
        return true;
      case 'break-start':
        return false;
      case 'break-end':
        return false;
        // return true;
      default:
    }
    // (lastState === 'clocked-out') ? true : false;
  })();
  const breakButtonEnabled = (() => {
    switch (lastState) {
      case 'clocked-in':
        return true;
      case 'clocked-out':
        return false;
      case 'break-start':
        return true;
      case 'break-end':
        return true;
      default:
    }
    // (lastState === 'clocked-in') ? true : false;
  })();
  const isOnBreak = (() => {
    switch (lastState) {
      case 'clocked-in':
        return false;
      case 'clocked-out':
        return false;
      case 'break-start':
        return true;
      case 'break-end':
        return false;
      default:
    }
    // (lastState === 'clocked-in') ? true : false;
  })();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.clockInButtonContainer}>
        <ClockInOutButton enabled={clockInOutButtonEnabled} isClockInButton={!isClockInButton} />
      </View>
      <View style={styles.breakLeaveButtonContainer}>
        <View style={styles.breakButton}>
          <BreakButton enabled={breakButtonEnabled} isOnBreakNow={isOnBreak} />
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
    backgroundColor: constantColor.complementaryColor,
  },
  tabBarInfoText: {
    fontSize: 14,
    fontWeight: '700',
    color: constantColor.mainColor,
    textAlign: 'center',
  },
});

export default ActionsScreen;
