import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { useAuth } from '../customHook/useAuth';
import moment from "moment";
import constantColor from '../constants/Colors';
import { AntDesign } from '@expo/vector-icons';

const BarChartAction = () => {

  // const [fakeData, setFakeData] = useState(
  //   [
  //     { createdAt: 2, type: 'clocked-out' },
  //     { createdAt: 6, type: 'clocked-out' },
  //     { createdAt: 5, type: 'clocked-in' },
  //     { createdAt: 3, type: 'clocked-in' },
  //     { createdAt: 4, type: 'clocked-out' },
  //     { createdAt: 1, type: 'clocked-in' },
  //   ]
  // );
  const [workingSeconds, setWorkingSeconds] = useState(0);
  const [breakSeconds, setBreakSeconds] = useState(0);

  const auth = useAuth();

  const startOfDay = moment.utc().startOf('day').unix();
  // const endOfDay = moment.utc().endOf('day').unix();
  // const twentyFourHours = (endOfDay - startOfDay) / (60 * 60)

  const sort = (data, key) => {
    return data.sort(function (a, b) {
      const x = a[key];
      const y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }

  const handleBarChartPress = () => {
    //toDo it does not reset the state
    setWorkingSeconds(0);
    const arrayOfEvents = sort(auth.workingHoursDocumentsToday, 'createdAt');
    timestampNow = moment.utc().unix();

    for (let index = 0; index < arrayOfEvents.length; index++) {
      if (index === 0) {
        switch (arrayOfEvents[0].type) {
          case 'clocked-in':
            if (arrayOfEvents.length === 1) {
              setWorkingSeconds(timestampNow - arrayOfEvents[0].createdAt)
            } else {
              break;
            }
          case 'clocked-out':
            setWorkingSeconds(arrayOfEvents[0].createdAt - startOfDay);
          case 'break-start':
            setWorkingSeconds(arrayOfEvents[0].createdAt - startOfDay);
          case 'break-end':
            setBreakSeconds(arrayOfEvents[0].createdAt - startOfDay);
          default:
            break;
        }
      } else {
        const lastElementInArray = arrayOfEvents.length === arrayOfEvents[index + 1];
        switch (arrayOfEvents[index].type) {
          case 'clocked-in':
            if (lastElementInArray) {
              setWorkingSeconds(workingSeconds + (timestampNow - arrayOfEvents[index].createdAt))
            } else {
              break;
            }
          case 'clocked-out':
            setWorkingSeconds(workingSeconds + (arrayOfEvents[index - 1].createdAt - arrayOfEvents[index].createdAt))
          case 'break-start':
            if (lastElementInArray) {
              setBreakSeconds(breakSeconds + (timestampNow - arrayOfEvents[index].createdAt));
            }
            setWorkingSeconds(workingSeconds + (arrayOfEvents[index - 1].createdAt - arrayOfEvents[index].createdAt))
          case 'break-end':
            if (lastElementInArray) {
              setWorkingSeconds(workingSeconds + (timestampNow - arrayOfEvents[index].createdAt))
            }
            setBreakSeconds(breakSeconds + (arrayOfEvents[index - 1].createdAt - arrayOfEvents[index].createdAt))
          default:
            break;
        }
      }
    }
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={[styles.button,
        { backgroundColor: constantColor.lightGrayColor }]}
        onPress={handleBarChartPress}
        underlayColor={constantColor.lightGrayColorOpacity}
      >
        <View>
          <Text style={styles.text}>Placeholder for bar two charts</Text>
          <AntDesign style={styles.barChartLayout} name="bars" size={20} color="#000000" />
          <AntDesign style={styles.barChartLayout} name="bars" size={20} color="#000000" />
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    alignItems: 'flex-start',
    width: '100%',
    height: '100%',
  },
  barChartLayout: {
    flex: 2,
  },
  text: {
    flex: 1,
    color: '#fff',
    fontSize: 18,
    fontWeight: "700",
  },
});

export default BarChartAction;
