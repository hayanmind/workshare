import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import constantColor from '../constants/Colors';

const ClockInOutButton = () => {

  const [isClockedIn, setIsClockedIn] = useState(false);

  const handleOnPress = () => {
    setIsClockedIn(!isClockedIn);
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={[styles.button,
        { backgroundColor: (isClockedIn) ? constantColor.logoutColor : constantColor.loginColor }]}
        onPress={handleOnPress}
        underlayColor={(isClockedIn) ? constantColor.logoutColorOpacity : constantColor.loginColorOpacity}
      >
        <Text style={styles.text}>{(isClockedIn) ? "clock out" : "clock in"}</Text>
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
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: "700",
  },
});

export default ClockInOutButton;
