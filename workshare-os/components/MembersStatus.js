import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import constantColor from '../constants/Colors';

const MembersStatus = (props) => {
  const {
    onPress,
    status = 'empty',
    memberName,
  } = props;

  const statusDot = (status) => {
    switch (status) {
      case 'available':
        return([styles.dot, {backgroundColor: constantColor.loginColor}]);
      case 'break':
        return([styles.dot, {backgroundColor: constantColor.breakColor}]);
      case 'busy':
        return([styles.dot, {backgroundColor: constantColor.logoutColor}]);
      case 'leave':
        return([styles.dot, {backgroundColor: constantColor.lightGrayColor}]);
      default:
        return([styles.dot, {backgroundColor: constantColor.loginColor}]);
    }
  };

  return(
    <View style={styles.container}>      
      <TouchableOpacity style={styles.touchContainer} onPress={onPress}>
        <View style={styles.statusContainer}>
          <View style={styles.clockInContainer}>
            {
            (status === 'empty')
              ? <Text>NotClockedIn</Text>
              : (status === 'leave')
                ? <Text>OnLeave</Text>
                : <Text>ClockInT</Text>
            }
          </View>
          <View style={styles.statusSeperator} />
          <View style={styles.clockOutContainer}>
            {
            (status === 'empty')
              ? <Text />
              : (status === 'clockedOut')
                ? <Text>ClockOutT</Text>
                : <View style={statusDot(status)}/>
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
    alignSelf:'center',
    backgroundColor : constantColor.mainColor,
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
