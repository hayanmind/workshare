import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import constantColor from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const BreakButton = () => {

  const [isOnBreak, setIsOnBreak] = useState(false);

  const handleBreakPress = () => {
    setIsOnBreak(!isOnBreak);
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={[styles.button,
        { backgroundColor: (isOnBreak) ? constantColor.breakColor : constantColor.lightGrayColor }]}
        onPress={handleBreakPress}
        underlayColor={(isOnBreak) ? constantColor.breakColorOpacity : constantColor.lightGrayColorOpacity}
      >
        <View style={styles.iconContainer}>
          <Ionicons name="ios-cafe" size={70} color="#fff" />
          <Text style={styles.text}>{(isOnBreak) ? "end break" : "break"}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  iconContainer: {
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: "700",
  },
});

export default BreakButton;
