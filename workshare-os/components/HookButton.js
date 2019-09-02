import React, { useState } from 'react';
import { Button, Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import constantColor from '../constants/Colors';

const HookButton = () => {
  
  const [isJa, setIsJa] = useState(false);
  
  const setHookState = () => {
    setIsJa(!isJa);
  };

  return(
    // <Button title={(isJa)? "clock in" : "clock out"} onPress={setHookState}/>
    <View style={styles.container}>
      <TouchableHighlight style={[styles.button, {backgroundColor: (isJa)? constantColor.logoutColor : constantColor.loginColor}]} onPress={setHookState}>
        <Text>{(isJa)? "clock in" : "clock out"}</Text>
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
});

export default HookButton;
