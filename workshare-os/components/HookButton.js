import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import constantColor from '../constants/Colors';

const HookButton = () => {
  
  const [isJa, setIsJa] = useState(false);
  
  const setHookState = () => {
    setIsJa(!isJa);
  };

  return(
    <View style={styles.container}>
      <TouchableHighlight style={[styles.button, {backgroundColor: (isJa)? constantColor.logoutColor : constantColor.loginColor}]} onPress={setHookState}>
        <Text style={styles.text}>{(isJa)? "clock in" : "clock out"}</Text>
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

export default HookButton;
