import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { useAuth } from '../customHook/useAuth';
import constantColor from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const LeaveButton = () => {
  const [isLeavePressed, setLeavePressed] = useState(false);

  const auth = useAuth();

  const handleLeavePress = () => {
    setLeavePressed(!isLeavePressed);
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={[styles.button,
        { backgroundColor: constantColor.lightGrayColor }]}
        onPress={handleLeavePress}
        underlayColor={constantColor.lightGrayColorOpacity}
      >
        <View style={styles.iconContainer}>
          <Ionicons name="ios-airplane" size={70} color="#fff" />
          <Text style={styles.text}>{(isLeavePressed) ? "close" : "open leave modal"}</Text>
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

export default LeaveButton;
