import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import constantColor from '../constants/Colors';

const MembersStatus = (props) => {
  const {
    onPress,
    status,
    memberName,
  } = props;

  const statusDot = (status) => {
    switch (status.type) {
      case 'clocked-in':
        return ([styles.dot, { backgroundColor: constantColor.loginColor }]);
      case 'break-end':
        return ([styles.dot, { backgroundColor: constantColor.loginColor }]);
      case 'break-start':
        return ([styles.dot, { backgroundColor: constantColor.breakColor }]);
      case 'busy':
        return ([styles.dot, { backgroundColor: constantColor.logoutColor }]);
      case 'leave':
        return ([styles.dot, { backgroundColor: constantColor.lightGrayColor }]);
      default:
        return ([styles.dot, { backgroundColor: constantColor.loginColor }]);
    }
  };

  const addZeroBeforeSmallerThan10 = (number) => {
    return (number < 10 ? '0' : '') + number;
  }

  const timeHourMinute = (timestamp) => {
    const hours = new Date(timestamp).getHours();
    const minutes = new Date(timestamp).getMinutes();
    const string = addZeroBeforeSmallerThan10(hours) + ':' + addZeroBeforeSmallerThan10(minutes);
    return string;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchContainer} onPress={onPress}>
        <View style={styles.statusContainer}>
          <View style={styles.clockInContainer}>
            {
              (status.type === 'clocked-out')
                ? <Text>Clocked out</Text>
                : (status.type === 'leave')
                  ? <Text>On Leave</Text>
                  : <Text>{timeHourMinute(status.from)}</Text>
            }
          </View>
          <View style={styles.statusSeperator} />
          <View style={styles.clockOutContainer}>
            {
              (status.type === 'clocked-out')
                ? <Text>{timeHourMinute(status.to)}</Text>
                : <View style={statusDot(status)} />
            }
          </View>
        </View>
        <View style={styles.seperator} />
        <View style={styles.nameChartContainer}>
          <View style={styles.userNameContainer}>
            <Text style={styles.userNameText}>{memberName}</Text>
          </View>
          <View style={styles.barChartContainer}>
            <Text>Placeholder for bar chart</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 5,
    borderColor: constantColor.mainColor,
    borderWidth: 1,
    marginBottom: 5,
  },
  touchContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 85,
  },
  statusContainer: {
    flex: 60,
  },
  clockInContainer: {
    flex: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clockOutContainer: {
    flex: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusSeperator: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: constantColor.mainColor,
    width: 40,
  },
  seperator: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: constantColor.mainColor,
    height: 60,
  },
  nameChartContainer: {
    flex: 160,
  },
  userNameContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10,
  },
  userNameText: {
    fontSize: 16,
  },
  barChartContainer: {
    flex: 2,
    justifyContent: 'center',
    marginLeft: 10,
    backgroundColor: constantColor.lightGrayColor,
    opacity: 0.2,
  },
  dot: {
    height: 20,
    width: 20,
    borderRadius: 50,
  },
});

export default MembersStatus;
