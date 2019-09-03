import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import constantColor from '../constants/Colors';
import { AntDesign } from '@expo/vector-icons';

const BarChartAction = () => {
  
  const handleBarChartPress = () => {
    
  };

  return(
    <View style={styles.container}>
      <TouchableHighlight 
        style={[styles.button,
        {backgroundColor: constantColor.lightGrayColor}]}
        onPress={handleBarChartPress}
        underlayColor={constantColor.lightGrayColorOpacity}
      >
        <View>
          <Text style={styles.text}>I am a dummy label</Text>
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
  barChartLayout:{
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
