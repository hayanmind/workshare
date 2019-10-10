import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import moment from "moment";
import constantColor from '../constants/Colors';
import { AntDesign } from '@expo/vector-icons';

const BarChartAction = () => {

  const [fakeData, setFakeData] = useState(
    [
      { createdAt: 2, type: 'clocked-out' },
      { createdAt: 6, type: 'clocked-out' },
      { createdAt: 5, type: 'clocked-in' },
      { createdAt: 3, type: 'clocked-in' },
      { createdAt: 4, type: 'clocked-out' },
      { createdAt: 1, type: 'clocked-in' },
    ]
  );

// lade alle docs mit gleicher user id
// const set day start
// sortiere all docs nach Zeitstempel
// for each element in the array if first ci subtract second from first, push 'green', 'clockin',
// selbe für break-end  
// wenn letzte element nicht type: clocked out hat setzte timestamp

  const startOfDay = moment.utc().startOf('day').unix();
  const endOfDay = moment.utc().endOf('day').unix();
  const twentyFourHours = (endOfDay - startOfDay) / (60 * 60)

  const sort = (data, key) => {
    return data.sort(function (a, b) {
      const x = a[key];
      const y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }


  const handleBarChartPress = () => {
    console.log('startOfDay :', startOfDay);
    console.log('endOfDay :', endOfDay);
    console.log('twentFourHours :', twentyFourHours);
    console.log('fakeData :', fakeData);
    // console.log('fakeDataSorter :', sort(fakeData, 'createdAt'));
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
