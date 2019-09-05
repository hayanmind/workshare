import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import constantColor from '../constants/Colors';

const MembersStatus = (props) => {
  const {
    onPress,
  } = props;

  return(
    <View style={styles.container}>      
      <TouchableOpacity style={styles.touchContainer} onPress={onPress}>
        <View style={styles.statusContainer}>
          <View style={styles.clockInContainer}>
            <Text>ClockIn</Text>
          </View>
          <View style={styles.statusSeperator} />
          <View style={styles.clockOutContainer}>
            <Text>ClockOut</Text>
          </View>
        </View>
        <View style={styles.seperator} />
        <View style={styles.nameChartContainer}>
          <View style={styles.userNameContainer}>
            <Text style={styles.userNameText}>Name of user</Text>
          </View>
          <View style={styles.barChartContainer}>

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
    height: 90,
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
  },
});

export default MembersStatus;
