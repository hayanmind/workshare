import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, Alert } from 'react-native';
import useDidUpdateEffect from '../customHook/useDidUpdateEffect';
import { useAuth } from '../customHook/useAuth';
import constantColor from '../constants/Colors';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { Ionicons } from '@expo/vector-icons';

const BreakButton = ({ enabled }) => {
  const [isOnBreak, setIsOnBreak] = useState(false);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [timestamp, setTimestamp] = useState(0);
  const [isBreakButtonPressed, setIsBreakButtonPressed] = useState(false);

  const auth = useAuth();

  useDidUpdateEffect(() => {
    if (isBreakButtonPressed === true) {
      auth.db.collection('events').add({
        additionalInfo: {
          latitude: latitude,
          longitude: longitude,
        },
        createdAt: timestamp,
        type: (isOnBreak) ? 'break-start' : 'break-end',
        userId: auth.user.uid,
      })
        .then((docRef) => {
          setIsBreakButtonPressed(false);
          auth.updateUsersStatus(
            docRef.id,
            (isOnBreak) ? timestamp : 0,
            (isOnBreak) ? 0 : timestamp,
            (isOnBreak) ? 'break-start' : 'break-end');
        });
    }
  }, [isBreakButtonPressed]);

  const _getLocationAsync = async () => {
    const currentLocation = await Location.getCurrentPositionAsync({});
    setLatitude(currentLocation.coords.latitude);
    setLongitude(currentLocation.coords.longitude);
    setTimestamp(currentLocation.timestamp);
  };

  const handleBreakPress = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      Alert.alert("Permission to access location was denied");
    }
    _getLocationAsync()
      .then(() => {
        setIsOnBreak(!isOnBreak);
        setIsBreakButtonPressed(true);
      })
      .catch(error => {
        console.log('error :', error);
      });
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={[styles.button,
        { backgroundColor: (isOnBreak) ? constantColor.breakColor : constantColor.lightGrayColor }]}
        onPress={handleBreakPress}
        underlayColor={(isOnBreak) ? constantColor.breakColorOpacity : constantColor.lightGrayColorOpacity}
        disabled={!enabled}
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
